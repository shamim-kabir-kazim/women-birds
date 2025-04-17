import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddItemComp.css';

const typeOptions = [
    "Sarees", "Lehengas", "ThreePiece", "Occasionals", "Jewelry", 
    "Accessories", "MehendiWear", "HaldiWear", "CoupleSet"
];

const subTypeOptions = {
    Sarees: [
        "banarasi-saree", "katan-saree", "jamdani-saree", "silk-saree",
        "muslin-saree", "georgette-saree", "tissue-saree", "half-silk-saree",
        "embroidered-saree", "designer-saree", "bridal-saree", "handloom-saree",
        "partywear-saree"
    ],
    Lehengas: [
        "bridal-lehenga", "a-line-lehenga", "circular-lehenga", 
        "fishtail-lehenga", "panelled-lehenga", "sharara-cut-lehenga", 
        "velvet-lehenga", "net-lehenga", "embroidered-lehenga", 
        "semi-stitched-lehenga", "lehenga-with-dupatta", 
        "simple-lehenga"
    ],
    ThreePiece: [
        "embroidered-threepiece", "cotton-threepiece", "silk-threepiece", 
        "lawn-threepiece", "chikan-threepiece", "partywear-threepiece", 
        "long-kameez-threepiece", "anarkali-threepiece", "palazzo-set", 
        "pant-style-threepiece", "kurti-dupatta-set"
    ],
    Occasionals: [
        "gown", "designer-salwar", "embroidered-kurti", 
        "stylish-threepiece", "party-saree", "modern-lehenga", 
        "sharara-gharara", "kaftan-dress", "tunic-palazzo-set", 
        "readywear-suit"
    ],
    Jewelry: [
        "bridal-jewelry", "goldplated-jewelry", "kundan-jewelry", 
        "pearl-jewelry", "necklace-set", "maangtikka", 
        "nose-ring", "bangles", "earrings", 
        "anklets", "rings", "bridal-chura", "waist-belt"
    ],
    Accessories: [
        "bridal-dupatta", "potli-bag", "bindis", "hair-accessories", 
        "footwear", "hijab-scarves", 
        "bridal-gloves", "hair-extensions", "safety-pins", 
        "attar"
    ],
    MehendiWear: [
        "floral-lehenga", "light-saree", 
        "simple-gharara", "bright-threepiece", 
        "kurti-skirt", "kaftan", "mehendi-gown", 
        "yellow-green-set", "floral-jewelry", "minimal-dupatta"
    ],
    HaldiWear: [
        "yellow-saree", "yellow-lehenga", "simple-gharara", 
        "kurti-dupatta", "floral-accessories", 
        "yellow-threepiece", "haldi-gown", 
        "haldi-jewelry"
    ],
    CoupleSet: [
        "matching-saree-panjabi", "lehenga-sherwani", 
        "color-matched-wear", "couple-tshirt", 
        "engagement-set", "reception-look"
    ]
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
        sub_type: []
    });

    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        localStorage.getItem('jwtToken');
    }, []);

    useEffect(() => {
        if (selectedFile) {
            const objectUrl = URL.createObjectURL(selectedFile);
            setImagePreview(objectUrl);
            return () => URL.revokeObjectURL(objectUrl);
        } else {
            setImagePreview(productData.primary_img_url || null);
        }
    }, [selectedFile, productData.primary_img_url]);

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
            sub_type: []
        }));
    };

    const handleTagToggle = (tag) => {
        setProductData((prevData) => {
            const updatedSubTypes = prevData.sub_type.includes(tag)
                ? prevData.sub_type.filter((subType) => subType !== tag)
                : [...prevData.sub_type, tag];
            return {
                ...prevData,
                sub_type: updatedSubTypes
            };
        });
    };

    const calculateSalePrice = () => {
        if (productData.price && productData.sale_percentage) {
            const price = parseFloat(productData.price);
            const discount = parseFloat(productData.sale_percentage);
            return (price - (price * discount / 100)).toFixed(2);
        }
        return productData.price || 'N/A';
    };

    return (
        <div className="product-add-container">
            <form className="product-form" onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">SKU:</label>
                        <input className="form-input" type="text" name="sku" value={productData.sku} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Product Name:</label>
                        <input className="form-input" type="text" name="product_name" value={productData.product_name} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-group image-group">
                    <label className="form-label">Primary Image URL:</label>
                    <input className="form-input" type="text" name="primary_img_url" value={productData.primary_img_url} onChange={handleChange} required />
                    <input className="form-file-input" type="file" onChange={handleFileChange} />
                    <button className="form-button" type="button" onClick={handleImageUpload}>Upload Image</button>
                </div>
                <div className="form-group">
                    <label className="form-label">Description:</label>
                    <textarea className="form-textarea" name="description" value={productData.description} onChange={handleChange} required></textarea>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">Price:</label>
                        <input className="form-input" type="number" name="price" value={productData.price} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Sale Percentage:</label>
                        <input className="form-input" type="number" name="sale_percentage" value={productData.sale_percentage} onChange={handleChange} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">Brand:</label>
                        <input className="form-input" type="text" name="brand" value={productData.brand} onChange={handleChange} required />
                    </div>
                </div>
                <div className="form-group">
                    <label className="form-label">Type:</label>
                    <select className="form-input" name="type" value={productData.type} onChange={handleTypeChange} required>
                        <option value="">Select Type</option>
                        {typeOptions.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                {productData.type && subTypeOptions[productData.type] && (
                    <div className="form-group">
                        <label className="form-label">Sub Type (Tags):</label>
                        <div className="tag-container">
                            {subTypeOptions[productData.type].map((subType) => (
                                <span
                                    key={subType}
                                    className={`tag ${productData.sub_type.includes(subType) ? 'selected' : ''}`}
                                    onClick={() => handleTagToggle(subType)}
                                >
                                    {subType}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                <div className="checkbox-group">
                    <div className="checkbox-wrapper">
                        <input className="checkbox-input" type="checkbox" name="sold_out" checked={productData.sold_out} onChange={handleChange} /> 
                    </div>
                    <div className="checkbox-label">
                        Sold Out
                    </div>          
                </div>
                <button className="form-button submit-button" type="submit">Add Product</button>
            </form>
            <div className="product-preview">
                <h2 className="preview-title">Product Preview</h2>
                <div className="product-card">
                    <div className="form-row">
                        {imagePreview ? (
                            <img src={imagePreview} alt={productData.product_name || 'Product'} className="product-image" />
                        ) : (
                            <div className="image-placeholder">No Image Selected</div>
                        )}
                        <div className="product-main-details">
                            <div className="info-box">
                                <div className="info-label">
                                    <i className="fas fa-tag"></i> Product Name:
                                </div>
                                <h3 className="product-name">{productData.product_name || 'Product Name'}</h3>
                            </div>
                            <div className="info-box">
                                <div className="info-label">
                                    <i className="fas fa-dollar-sign"></i> Price:
                                </div>
                                <div className="product-price-container">
                                    <span className="product-price">${calculateSalePrice()}</span>
                                    {productData.sale_percentage && (
                                        <span className="original-price">Was: ${productData.price}</span>
                                    )}
                                </div>
                            </div>
                            <div className="info-box">
                                <div className="info-label">
                                    <i className="fas fa-trademark"></i> Brand:
                                </div>
                                <p className="product-brand">{productData.brand || 'N/A'}</p>
                            </div>
                            <div className="info-box">
                                <div className="info-label">
                                    <i className="fas fa-info-circle"></i> Description:
                                </div>
                                <p className="product-description">{productData.description || 'No description provided'}</p>
                            </div>
                            <div className="info-box">
                                <div className="info-label">
                                    <i className="fas fa-barcode"></i> SKU:
                                </div>
                                <p className="product-sku">{productData.sku || 'N/A'}</p>
                            </div>
                            <div className="info-box">
                                <div className="info-label">
                                    <i className="fas fa-box"></i> Status:
                                </div>
                                <p className="product-status">{productData.sold_out ? 'Sold Out' : 'In Stock'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-details">
                        <div className="info-box">
                            <div className="info-label">
                                <i className="fas fa-list"></i> Type:
                            </div>
                            <p className="product-type">{productData.type || 'N/A'}</p>
                        </div>
                        <div className="info-box">
                            <div className="info-label">
                                <i className="fas fa-tags"></i> Tags:
                            </div>
                            <p className="product-subtype">
                                {productData.sub_type.length > 0 ? (
                                    <span className="tag-container">
                                        {productData.sub_type.map((subType) => (
                                            <span key={subType} className="tag selected">{subType}</span>
                                        ))}
                                    </span>
                                ) : 'None'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItemComp;