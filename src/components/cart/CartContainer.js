import React from "react";

import "./cart-container.style.css";

const CartContainer = () => {
  return (
    <div className="cart-container">
      <div className="cart-row">
        <div className="cart-subtitle">
          <p>Product</p>
        </div>
        <div className="cart-name">
          <p>Name</p>
        </div>
        <div className="cart-price">
          <p>Price</p>
        </div>
        <div className="cart-quantity">
          <p>Quantity</p>
        </div>
        <div className="cart-remove">
          <p>Remove</p>
        </div>
        <div className="cart-total">
          <p>Total</p>
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
