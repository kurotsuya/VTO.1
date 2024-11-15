import React, { useState, useEffect } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/cross_icon2.png';

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]); 

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data); 
      });
  };

  useEffect(() => {
   
    fetchInfo(); 
  }, []);

  const remove_product = async (id) => {
    await fetch('http://localhost:4000/removeproduct', {
      method: 'POST', 
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }), 
    });
    await fetchInfo(); 
  };

  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <table className="listproduct-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Old Price</th>
            <th>New Price</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {allproducts.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  className="listproduct-product-icon"
                />
                {product.name}
              </td>
              <td>Tk { product.old_price}</td>
              <td>Tk { product.new_price}</td>
              <td>{product.category}</td>
              <td>
                <img
                  onClick={() => remove_product(product.id)}
                  className="listproduct-remove-icon"
                  src={cross_icon}
                  alt="Remove Product"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;
