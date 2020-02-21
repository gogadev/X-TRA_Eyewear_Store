import React from "react";
import CartItem from "../cart/CartItem";
import "./cart-list.style.css";

const CartList = ({ value }) => {
  const { cart } = value;
  return (
    <div className="item-container">
      {cart.map(item => {
        return <CartItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
};

export default CartList;
