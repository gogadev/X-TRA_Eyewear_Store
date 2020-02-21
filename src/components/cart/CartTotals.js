import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";

import "./cart-totals.style.css";

const CartTotals = ({ value, history }) => {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="totals-container">
        <div className="totals-row">
          <div className="totals">
            <Link to="/">
              <button className="btn-clear" onClick={() => clearCart()}>
                Clear Cart
              </button>
            </Link>
            <h5> Item : ${cartSubTotal}</h5>
            <h5> Tax : ${cartTax}</h5>
            <h5> Total : ${cartTotal}</h5>
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartTotals;
