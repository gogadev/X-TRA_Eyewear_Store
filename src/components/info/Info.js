import React, { Component } from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

import "./info.style.css";
import "../home/home.style.css";

class Info extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, img, info, price, title } = value.detailProduct;
          return (
            <div className="info-container">
              <div className="info">
                <h1 className="info-title">{title}</h1>
                <h3>${price}</h3>
              </div>
              <div className="product-info">
                <img src={img} alt="" />
                <h4 className="subtitle">Features</h4>
                <p align="justify"> {info}</p>
              </div>
              <Link to="/products">
                <i className="fab fa-ethereum"></i>
                <button className="info-btn">BACK TO STORE</button>
              </Link>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Info;
