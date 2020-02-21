import React, { Component } from "react";
import CartContainer from "../cart/CartContainer";
import EmptyCart from "../cart/EmptyCart";
import { ProductConsumer } from "../../context";
import CartList from "../cart/CartList";
import CartTotals from "../cart/CartTotals";

import "../navbar/navbar.style.css";

export class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <h1 className="main-title">Your Cart</h1>
                  <CartContainer />
                  <CartList value={value} />
                  <CartTotals value={value} history={this.props.history} />
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
