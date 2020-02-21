import React, { Component } from "react";

import Product from "../product/Product";
import { ProductConsumer } from "../../context";

import "./product-list.style.css";

class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="list">
          <div className="container">
            <h1 className="main-title">X-TRA Products</h1>
            <div className="products">
              <ProductConsumer>
                {value => {
                  return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
