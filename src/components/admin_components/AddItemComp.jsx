import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddItemComp.css';

const typeOptions = [
    "Dress", "Bags", "Jewellery", "Shoes", "Accessories", "Cosmetics",
    "Skincare", "Lingerie", "Fragrance", "Ethnicwear", "Westernwear",
    "Footwear", "Haircare", "Nightwear", "Activewear", "Maternity", "Hijab"
];

const subTypeOptions = {
    Dress: [
        "Salwar Kameez", "Anarkali", "Gowns", "Saree", "Kurtis",
        "Western Dresses", "Party Wear", "Casual Wear"
    ],
    Jewellery: [
        "Necklaces", "Earrings", "Bangles", "Rings", "Sets (e.g., full bridal set)",
        "Artificial Jewelry", "Gold-Plated / Kundan / Polki"
    ]
    // Add other sub_type options as needed for other types
};

const AddItemComp = () => {
    const [productData, setProductData] = useState({
        sku: '',
        product_name: '',
        description: '',
        price: '',
        sale_percentage: '',
        sold_out: false,
        brand: '',
        primary_img_url: '',
        type: '',
        sub_type: ''
    });

    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        localStorage.getItem('jwtToken');
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleImageUpload = async () => {
        const { product_name, sku } = productData;
        if (!product_name || !sku) {
            alert('Product name and SKU must be filled out before uploading an image.');
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('productName', product_name);
        formData.append('sku', sku);

        const token = localStorage.getItem('jwtToken');

        try {
            const response = await axios.post('http://localhost:3000/api/upload-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            setProductData((prevData) => ({
                ...prevData,
                primary_img_url: response.data.url
            }));
            alert('Image uploaded successfully!');
        } catch (error) {
            if (error.response) {
                alert('Failed to upload image');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('jwtToken');

        try {
            const response = await axios.post('http://localhost:3000/api/add-product', productData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            alert(response.data.message);
        } catch (error) {
            if (error.response) {
                alert('Failed to add product');
            }
        }
    };

    const handleTypeChange = (e) => {
        const selectedType = e.target.value;
        setProductData((prevData) => ({
            ...prevData,
            type: selectedType,
            sub_type: '' // Reset sub_type when type changes
        }));
    };

    return (
        <form className="ad-fi-form" onSubmit={handleSubmit}>
            <div className="ad-fi-row">
                <div className="ad-fi-div">
                    <label className="ad-fi-label">SKU:</label>
                    <input className="ad-fi-input" type="text" name="sku" value={productData.sku} onChange={handleChange} required />
                </div>
                <div className="ad-fi-div">
                    <label className="ad-fi-label">Product Name:</label>
                    <input className="ad-fi-input" type="text" name="product_name" value={productData.product_name} onChange={handleChange} required />
                </div>
            </div>
            <div className="ad-fi-fi-img-div">
                <label className="ad-fi-label">Primary Image URL:</label>
                <input className="ad-fi-input" type="text" name="primary_img_url" value={productData.primary_img_url} onChange={handleChange} required />
                <input className="ad-fi-file-input" type="file" onChange={handleFileChange} />
                <button className="ad-fi-button" type="button" onClick={handleImageUpload}>Upload Image</button>
            </div>
            <div className="ad-fi-div">
                <label className="ad-fi-label">Description:</label>
                <textarea className="ad-fi-textarea" name="description" value={productData.description} onChange={handleChange} required></textarea>
            </div>
            <div className="ad-fi-row">
                <div className="ad-fi-div">
                    <label className="ad-fi-label">Price:</label>
                    <input className="ad-fi-input" type="number" name="price" value={productData.price} onChange={handleChange} required />
                </div>
                <div className="ad-fi-div">
                    <label className="ad-fi-label">Sale Percentage:</label>
                    <input className="ad-fi-input" type="number" name="sale_percentage" value={productData.sale_percentage} onChange={handleChange} />
                </div>
            </div>
            <div className="ad-fi-row">
                <div className="ad-fi-div">
                    <label className="ad-fi-label">Brand:</label>
                    <input className="ad-fi-input" type="text" name="brand" value={productData.brand} onChange={handleChange} required />
                </div>
            </div>
            <div className="ad-fi-div">
                <label className="ad-fi-label">Type:</label>
                <select className="ad-fi-input" name="type" value={productData.type} onChange={handleTypeChange} required>
                    <option value="">Select Type</option>
                    {typeOptions.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>
            {productData.type && subTypeOptions[productData.type] && (
                <div className="ad-fi-div">
                    <label className="ad-fi-label">Sub Type:</label>
                    <select className="ad-fi-input" name="sub_type" value={productData.sub_type} onChange={handleChange}>
                        <option value="">Select Sub Type</option>
                        {subTypeOptions[productData.type].map((subType) => (
                            <option key={subType} value={subType}>{subType}</option>
                        ))}
                    </select>
                </div>
            )}

            <div className="ass-inline">
                <div className="chiki-1">
                    <input className="chiki" type="checkbox" name="sold_out" checked={productData.sold_out} onChange={handleChange} /> 
                </div>
                <div className="chiki-1">
                    Sold Out
                </div>          
            </div>
            <button className="ad-fi-button" type="submit">Add Product</button>
        </form>
    );
};

export default AddItemComp;