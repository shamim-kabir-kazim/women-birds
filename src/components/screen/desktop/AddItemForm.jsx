import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AddItemForm.css'; // Import the CSS file

const AddItemForm = () => {
    const [item, setItem] = useState({
        sku: 'DEMO123',
        product_name: 'Demo Product',
        description: 'This is a demo description for the product.',
        price: '100',
        sale_price: '80',
        is_on_sale: true,
        category_type: 'Dresses',
        brand: 'Demo Brand',
        stock_quantity: '10',
        is_sold_out: false,
        stock_status: 'In Stock',
        slug: 'demo-product',
        is_active: true,
        is_featured: false,
        size: 'M',
        color: 'Red',
        fabric: 'Cotton'
    });

    useEffect(() => {
        // Log the token to the console to ensure it is being set
        const token = localStorage.getItem('token');
        console.log('Retrieved token:', token);
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setItem({
            ...item,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token'); // Retrieve the token from localStorage
            if (!token) {
                throw new Error('No token found');
            }
            console.log('Using token:', token); // Log the token to the console
            const response = await axios.post('/api/admin-dashboard.php', item, {
                headers: {
                    Authorization: `Bearer ${token}` // Include the token in the request headers
                }
            });
            console.log('Response data:', response.data); // Log the entire response data to the console
            // Clear form after submission
            setItem({
                sku: '',
                product_name: '',
                description: '',
                price: '',
                sale_price: '',
                is_on_sale: false,
                category_type: '',
                brand: '',
                stock_quantity: '',
                is_sold_out: false,
                stock_status: 'In Stock',
                slug: '',
                is_active: true,
                is_featured: false,
                size: '',
                color: '',
                fabric: ''
            });
        } catch (error) {
            console.error('Failed to add item:', error); // Log the error to the console
        }
    };

    return (
        <div className="op-add-item-form-container">
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit} className="op-add-item-form">
                <label>
                    SKU:
                    <input type="text" name="sku" value={item.sku} onChange={handleChange} required />
                </label>
                <label>
                    Product Name:
                    <input type="text" name="product_name" value={item.product_name} onChange={handleChange} required />
                </label>
                <label>
                    Description:
                    <textarea name="description" value={item.description} onChange={handleChange} />
                </label>
                <label>
                    Price:
                    <input type="number" name="price" value={item.price} onChange={handleChange} required />
                </label>
                <label>
                    Sale Price:
                    <input type="number" name="sale_price" value={item.sale_price} onChange={handleChange} />
                </label>
                <label>
                    Is On Sale:
                    <input type="checkbox" name="is_on_sale" checked={item.is_on_sale} onChange={handleChange} />
                </label>
                <label>
                    Category Type:
                    <select name="category_type" value={item.category_type} onChange={handleChange} required>
                        <option value="">Select Category</option>
                        <option value="Dresses">Dresses</option>
                        <option value="Lehenga">Lehenga</option>
                        <option value="Jewellery">Jewellery</option>
                        <option value="Sale">Sale</option>
                    </select>
                </label>
                <label>
                    Brand:
                    <input type="text" name="brand" value={item.brand} onChange={handleChange} />
                </label>
                <label>
                    Stock Quantity:
                    <input type="number" name="stock_quantity" value={item.stock_quantity} onChange={handleChange} required />
                </label>
                <label>
                    Is Sold Out:
                    <input type="checkbox" name="is_sold_out" checked={item.is_sold_out} onChange={handleChange} />
                </label>
                <label>
                    Stock Status:
                    <input type="text" name="stock_status" value={item.stock_status} onChange={handleChange} />
                </label>
                <label>
                    Slug:
                    <input type="text" name="slug" value={item.slug} onChange={handleChange} required />
                </label>
                <label>
                    Is Active:
                    <input type="checkbox" name="is_active" checked={item.is_active} onChange={handleChange} />
                </label>
                <label>
                    Is Featured:
                    <input type="checkbox" name="is_featured" checked={item.is_featured} onChange={handleChange} />
                </label>
                {(item.category_type === 'Dresses' || item.category_type === 'Lehenga') && (
                    <>
                        <label>
                            Size:
                            <input type="text" name="size" value={item.size} onChange={handleChange} />
                        </label>
                        <label>
                            Color:
                            <input type="text" name="color" value={item.color} onChange={handleChange} />
                        </label>
                        <label>
                            Fabric:
                            <input type="text" name="fabric" value={item.fabric} onChange={handleChange} />
                        </label>
                    </>
                )}
                <button type="submit">Add Item</button>
            </form>
        </div>
    );
};

export default AddItemForm;
