import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./ConfirmOrder.css";
import { ShopContext } from "../../Context/ShopContext";

const ConfirmOrder = () => {
  const { all_product, cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext); // Import clearCart
  const [orderDetails, setOrderDetails] = useState({
    fullName: "",
    city: "",
    address: "",
    paymentMethod: "cash",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails({ ...orderDetails, [name]: value });
  };

  const handlePaymentMethodChange = (method) => {
    setOrderDetails({ ...orderDetails, paymentMethod: method });
  };

  const handleConfirmOrder = async () => {
    if (!orderDetails.fullName || !orderDetails.city || !orderDetails.address) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Prepare the cart items with product details for the order
    const orderItems = Object.keys(cartItems)
      .filter((itemId) => cartItems[itemId] > 0)
      .map((itemId) => {
        const product = all_product.find((product) => product.id === parseInt(itemId));
        return {
          productId: product.id,
          name: product.name,
          quantity: cartItems[itemId],
          total: product.new_price * cartItems[itemId],
        };
      });
  
    const response = await fetch("http://localhost:4000/confirmorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...orderDetails,
        items: orderItems, // Send cart items with product details
      }),
    });
  
    const result = await response.json();
    if (result.success) {
      alert("Order placed successfully!");
      clearCart(); // Clear the cart after confirmation
      navigate("/"); // Navigate to another page (e.g., homepage)
    } else {
      alert("Error placing order. Please try again.");
    }
  };
  
  return (
    <div className="confirm-order">
      <div className="order-details">
        <h2>Confirm Your Order</h2>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={orderDetails.fullName}
            onChange={handleChange}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={orderDetails.city}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <textarea
            name="address"
            value={orderDetails.address}
            onChange={handleChange}
          />
        </label>
        <div className="payment-method">
          <p>Payment Method:</p>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              checked={orderDetails.paymentMethod === "cash"}
              onChange={() => handlePaymentMethodChange("cash")}
            />
            Cash
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              checked={orderDetails.paymentMethod === "card"}
              onChange={() => handlePaymentMethodChange("card")}
            />
            Card
          </label>
        </div>
        <button onClick={handleConfirmOrder}>Confirm Order</button>
      </div>
      <div className="cart-summary">
        <h3>Your Cart</h3>
        {all_product
          .filter((product) => cartItems[product.id] > 0)
          .map((product) => (
            <div key={product.id} className="cart-item">
               <img src={product.image} alt={product.name} className="cart-item-image" />
              <p>{product.name}</p>
              <p>Quantity: {cartItems[product.id]}</p>
              <p>Total: TK {product.new_price * cartItems[product.id]}</p>
            </div>
          ))}
        <h4>Total Amount: TK {getTotalCartAmount()}</h4>
      </div>
    </div>
  );
};

export default ConfirmOrder;
