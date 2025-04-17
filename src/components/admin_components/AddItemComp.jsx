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
    
    // Add more subtypes as needed
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