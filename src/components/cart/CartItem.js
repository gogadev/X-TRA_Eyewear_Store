import React from "react";
import "./cart-item.style.css";

const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="item-row">
      <div className="item">
        <img className="item-img" src={img} alt="Product" />
      </div>
      <div className="item title">
         <span>{title}</span>
      </div>
      <div className="item price">
        <span> ${price}</span>
      </div>
      <div className="quantity">
        <div className="quantity item">
          <div>
            <button onClick={() => decrement(id)}> - </button>
            <span>{count}</span>
            <button onClick={() => increment(id)}> + </button>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="remove-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
      <div className="item total">
        <span> ${total}</span>
      </div>
    </div>
  );
};

export default CartItem;
