import React, { useState } from 'react';
import './ProductDetailsComp.css';

const ProductDetailsComp = ({ productId, productDetails, onUpdate }) => {
  const [detailsForm, setDetailsForm] = useState({
    color: '',
    size: '',
    quantity: '',
    color_hex: '',
  });
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [detailsError, setDetailsError] = useState(null);

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setDetailsForm({
      ...detailsForm,
      [name]: value,
    });
  };

  const handleColorChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedOption = e.target.options[selectedIndex];
    const colorName = selectedOption.getAttribute('data-color-name');
    const colorHex = selectedOption.getAttribute('data-color-hex');
    setDetailsForm({
      ...detailsForm,
      color: colorName,
      color_hex: colorHex,
    });
    setSelectedColor({ name: colorName, colorCode: colorHex });
  };

  const handleSizeChange = (e) => {
    const { value } = e.target;
    setDetailsForm({
      ...detailsForm,
      size: value,
    });
    setSelectedSize(value);
  };

  const handleAddStock = async (e) => {
    e.preventDefault();
    if (!detailsForm.color_hex) {
      setDetailsError('Color hex code is required.');
      return;
    }
    try {
      const payload = {
        productId,
        color: detailsForm.color,
        color_hex: detailsForm.color_hex,
        size: detailsForm.size,
        quantity: detailsForm.quantity,
      };

      const token = localStorage.getItem('jwtToken');

      const response = await fetch('/api/add-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to add product details: ${errorText}`);
      }

      setDetailsError(null);
      const data = await response.json();
      onUpdate(data);
      refreshProductDetails();
    } catch (error) {
      console.error('Error adding product details:', error);
      setDetailsError(error.message);
    }
  };

  const handleUpdateStock = async (e) => {
    e.preventDefault();
    try {
      const payload = { productId, ...detailsForm };

      const token = localStorage.getItem('jwtToken');

      const response = await fetch(`/api/update-details/${detailsForm.details_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to update product details: ${errorText}`);
      }
      setDetailsError(null);
      const data = await response.json();
      onUpdate(data);
      refreshProductDetails();
    } catch (error) {
      console.error('Error updating product details:', error);
      setDetailsError(error.message);
    }
  };

  const handleDeleteStock = async (detailsId) => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch(`/api/delete-details/${detailsId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to delete product details: ${errorText}`);
      }
      const data = await response.json();
      onUpdate(data);
      refreshProductDetails();
    } catch (error) {
      console.error('Error deleting product details:', error);
      setDetailsError(error.message);
    }
  };

  const handleEditStock = (detail) => {
    setDetailsForm({
      details_id: detail.details_id,
      color: detail.color,
      size: detail.size,
      quantity: detail.quantity,
      color_hex: detail.color_hex,
    });
    setSelectedColor({ name: detail.color, colorCode: detail.color_hex });
    setSelectedSize(detail.size);
  };

  const refreshProductDetails = () => {
    const token = localStorage.getItem('jwtToken');
    fetch(`/api/view-details/${productId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((response) => response.json())
      .then((data) => onUpdate(data))
      .catch((error) => console.error('Error fetching product details:', error));
  };

  const totalQuantity = productDetails.reduce((total, detail) => total + parseInt(detail.quantity, 10), 0);

  return (
    <div>
      <h3>Product Details</h3>
      <table className="product-details-table">
        <thead>
          <tr>
            <th>Color</th>
            <th>Color Hex</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(productDetails) && productDetails.map((detail) => (
            <tr key={detail.details_id}>
              <td style={{ backgroundColor: detail.color_hex }}>{detail.color}</td>
              <td>{detail.color_hex}</td>
              <td>{detail.size}</td>
              <td>{detail.quantity}</td>
              <td>
                <button onClick={() => handleEditStock(detail)} className="btn-edit">Edit</button>
                <button onClick={() => handleDeleteStock(detail.details_id)} className="btn-delete">Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="4" style={{ textAlign: 'right', fontWeight: 'bold' }}>Total Quantity</td>
            <td style={{ fontWeight: 'bold' }}>{totalQuantity}</td>
          </tr>
        </tbody>
      </table>
      {detailsError && <div className="error-message">{detailsError}</div>}
      <form className="product-details-form-xo">
        <div className="form-row">
          <div className="form-group pd-color">
            <label>
              Color:
              <select name="color" value={detailsForm.color} onChange={handleColorChange}>
                <option value="">Select a color</option>
                <option data-color-name="White" data-color-hex="#FFFFFF" style={{ backgroundColor: '#FFFFFF' }}>White</option>
                <option data-color-name="Black" data-color-hex="#000000" style={{ backgroundColor: '#000000', color: 'white' }}>Black</option>
                <option data-color-name="Gray" data-color-hex="#808080" style={{ backgroundColor: '#808080' }}>Gray</option>
                <option data-color-name="Silver" data-color-hex="#C0C0C0" style={{ backgroundColor: '#C0C0C0' }}>Silver</option>
                <option data-color-name="Red" data-color-hex="#FF0000" style={{ backgroundColor: '#FF0000' }}>Red</option>
                <option data-color-name="Maroon" data-color-hex="#800000" style={{ backgroundColor: '#800000', color: 'white' }}>Maroon</option>
                <option data-color-name="Burgundy" data-color-hex="#800020" style={{ backgroundColor: '#800020', color: 'white' }}>Burgundy</option>
                <option data-color-name="Crimson" data-color-hex="#DC143C" style={{ backgroundColor: '#DC143C' }}>Crimson</option>
                <option data-color-name="Rose" data-color-hex="#FF007F" style={{ backgroundColor: '#FF007F' }}>Rose</option>
                <option data-color-name="Pink" data-color-hex="#FFC0CB" style={{ backgroundColor: '#FFC0CB' }}>Pink</option>
                <option data-color-name="Hot Pink" data-color-hex="#FF69B4" style={{ backgroundColor: '#FF69B4' }}>Hot Pink</option>
                <option data-color-name="Fuchsia" data-color-hex="#FF00FF" style={{ backgroundColor: '#FF00FF' }}>Fuchsia</option>
                <option data-color-name="Blush" data-color-hex="#DE5D83" style={{ backgroundColor: '#DE5D83' }}>Blush</option>
                <option data-color-name="Orange" data-color-hex="#FFA500" style={{ backgroundColor: '#FFA500' }}>Orange</option>
                <option data-color-name="Coral" data-color-hex="#FF7F50" style={{ backgroundColor: '#FF7F50' }}>Coral</option>
                <option data-color-name="Peach" data-color-hex="#FFDAB9" style={{ backgroundColor: '#FFDAB9' }}>Peach</option>
                <option data-color-name="Yellow" data-color-hex="#FFFF00" style={{ backgroundColor: '#FFFF00' }}>Yellow</option>
                <option data-color-name="Gold" data-color-hex="#FFD700" style={{ backgroundColor: '#FFD700' }}>Gold</option>
                <option data-color-name="Mustard" data-color-hex="#FFDB58" style={{ backgroundColor: '#FFDB58' }}>Mustard</option>
                <option data-color-name="Green" data-color-hex="#008000" style={{ backgroundColor: '#008000', color: 'white' }}>Green</option>
                <option data-color-name="Olive" data-color-hex="#808000" style={{ backgroundColor: '#808000' }}>Olive</option>
                <option data-color-name="Mint" data-color-hex="#98FF98" style={{ backgroundColor: '#98FF98' }}>Mint</option>
                <option data-color-name="Emerald" data-color-hex="#50C878" style={{ backgroundColor: '#50C878' }}>Emerald</option>
                <option data-color-name="Teal" data-color-hex="#008080" style={{ backgroundColor: '#008080', color: 'white' }}>Teal</option>
                <option data-color-name="Blue" data-color-hex="#0000FF" style={{ backgroundColor: '#0000FF', color: 'white' }}>Blue</option>
                <option data-color-name="Navy" data-color-hex="#000080" style={{ backgroundColor: '#000080', color: 'white' }}>Navy</option>
                <option data-color-name="Sky Blue" data-color-hex="#87CEEB" style={{ backgroundColor: '#87CEEB' }}>Sky Blue</option>
                <option data-color-name="Royal Blue" data-color-hex="#4169E1" style={{ backgroundColor: '#4169E1' }}>Royal Blue</option>
                <option data-color-name="Cobalt Blue" data-color-hex="#0047AB" style={{ backgroundColor: '#0047AB', color: 'white' }}>Cobalt Blue</option>
                <option data-color-name="Purple" data-color-hex="#800080" style={{ backgroundColor: '#800080', color: 'white' }}>Purple</option>
                <option data-color-name="Lavender" data-color-hex="#E6E6FA" style={{ backgroundColor: '#E6E6FA' }}>Lavender</option>
                <option data-color-name="Violet" data-color-hex="#EE82EE" style={{ backgroundColor: '#EE82EE' }}>Violet</option>
                <option data-color-name="Plum" data-color-hex="#DDA0DD" style={{ backgroundColor: '#DDA0DD' }}>Plum</option>
                <option data-color-name="Brown" data-color-hex="#A52A2A" style={{ backgroundColor: '#A52A2A', color: 'white' }}>Brown</option>
                <option data-color-name="Tan" data-color-hex="#D2B48C" style={{ backgroundColor: '#D2B48C' }}>Tan</option>
                <option data-color-name="Beige" data-color-hex="#F5F5DC" style={{ backgroundColor: '#F5F5DC' }}>Beige</option>
              </select>
              {selectedColor && (
                <div id="color-display" style={{ marginTop: '20px' }}>
                  <strong>{selectedColor.name}</strong>
                  <div className="color-box" style={{ backgroundColor: selectedColor.colorCode }}></div>
                </div>
              )}
            </label>
          </div>
          <div className="form-group pd-size">
            <label>
              Size:
              <select name="size" value={detailsForm.size} onChange={handleSizeChange}>
                <option value="">Select a size</option>
                <option value="XS">XS (Extra Small)</option>
                <option value="S">S (Small)</option>
                <option value="M">M (Medium)</option>
                <option value="L">L (Large)</option>
                <option value="XL">XL (Extra Large)</option>
                <option value="XXL">XXL (Double Extra Large)</option>
              </select>
              {selectedSize && (
                <div id="size-display" style={{ marginTop: '20px' }}>
                  <strong>Selected Size: {selectedSize}</strong>
                </div>
              )}
            </label>
          </div>
          <div className="form-group pd-quantity">
            <label>
              Quantity:
              <input
                type="number"
                name="quantity"
                value={detailsForm.quantity}
                onChange={handleDetailsChange}
              />
            </label>
          </div>
        </div>
        <button className="btn-add" onClick={handleAddStock}>Add New Stock</button>
        <button className="btn-update" onClick={handleUpdateStock}>Update Stock</button>
      </form>
    </div>
  );
};

export default ProductDetailsComp;