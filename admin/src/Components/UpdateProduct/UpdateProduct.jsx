import React, { useState } from 'react';
import './UpdateProduct.css';

const UpdateProduct = () => {
  const [productId, setProductId] = useState('');
  const [productDetails, setProductDetails] = useState({
    name: '',
    new_price: '',
    old_price: '',
  });

  // Fetch product details to update
  const fetchProductDetails = async (id) => {
    try {
      const response = await fetch("http://localhost:4000/allproducts");
      const data = await response.json();
      const product = data.find((p) => p.id === parseInt(id)); 
      if (product) setProductDetails(product);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value,
    });
  };

  const updateProductHandler = async () => {
    try {
      const response = await fetch('http://localhost:4000/updateproduct', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: parseInt(productId),
          ...productDetails,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Product Updated');
      } else {
        alert('Failed to Update Product: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error updating product');
    }
  };

  return (
    <div className="update-product">
     
      <div className="updateproduct-itemfield">
        <p>Product ID</p>
        <input
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          type="text"
          placeholder="Enter Product ID"
        />
        <button className="fetch-product-btn" onClick={() => fetchProductDetails(productId)}>Fetch Product</button>
      </div>
      <div className="updateproduct-itemfield">
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="updateproduct-itemfield">
        <p>New Price</p>
        <input
          value={productDetails.new_price}
          onChange={changeHandler}
          type="number"
          name="new_price"
          placeholder="New Price"
        />
      </div>
      <div className="updateproduct-itemfield">
        <p>Old Price</p>
        <input
          value={productDetails.old_price}
          onChange={changeHandler}
          type="number"
          name="old_price"
          placeholder="Old Price"
        />
      </div>
      <button onClick={updateProductHandler} className="updateproduct-btn">
        Update
      </button>
    </div>
  );
};

export default UpdateProduct;