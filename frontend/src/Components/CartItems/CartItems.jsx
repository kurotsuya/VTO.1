import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import { useNavigate } from 'react-router-dom';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, addToCart } = useContext(ShopContext);
  const navigate = useNavigate(); // initialize navigate

  // Determine if cart is empty
  const isCartEmpty = all_product.every(e => cartItems[e.id] <= 0);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className='carticon-product' />
                <p>{e.name}</p>
                <p>TK {e.new_price}</p>

                <div className='cartitems-quantity-container'>
                  <button className='cartitems-quantity-btn' onClick={() => removeFromCart(e.id)}>-</button>
                  <span className='cartitems-quantity'>{cartItems[e.id]}</span>
                  <button className='cartitems-quantity-btn' onClick={() => addToCart(e.id)}>+</button>
                </div>

                <p>TK {e.new_price * cartItems[e.id]}</p>
                <img
                  className='cartitems-remove-icon'
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>TK {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>TK {getTotalCartAmount()}</h3>
            </div>
          </div>    
          <button 
            onClick={() => navigate('/confirmorder')}
            disabled={isCartEmpty}
            style={{ 
              backgroundColor: isCartEmpty ? '#ccc' : '', 
              cursor: isCartEmpty ? 'not-allowed' : 'pointer' 
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
