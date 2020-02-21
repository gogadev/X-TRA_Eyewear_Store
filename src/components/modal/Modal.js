import React, { Component } from "react";
import { productConsumer, ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

import "./modal.style.css";

class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="modal-container">
                <div className="row">
                  <h3>Item Added To The Cart</h3>
                  <img className="modal-img" src={img} alt="" />
                  <h5>{title}</h5>
                  <h5>${price}</h5>
                  <Link to="/products">
                    <button onClick={() => closeModal()}>
                      Continue Shopping
                    </button>
                  </Link>
                  <Link to="/cart">
                    <button onClick={() => closeModal()}>Go To Cart</button>
                  </Link>
                </div>
              </div>
            );
          }
          return;
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
