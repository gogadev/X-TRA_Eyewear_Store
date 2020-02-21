import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { ProductConsumer } from "../../context";

import "./product.style.css";

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <React.Fragment>
        <div className="product-container">
          <div className="product-card">
            <ProductConsumer>
              {value => (
                <div
                  className="img-container"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="info">
                    <img src={img} alt="Product" className="card-img" />
                  </Link>
                  <button
                    className="card-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? (
                      <h4 className="product-text extra" disabled>
                        In Cart
                      </h4>
                    ) : (
                      <i className="fas fa-cart-plus fa-2x product-text" />
                    )}
                  </button>
                </div>
              )}
            </ProductConsumer>
            <div className="card-footer">
              <h3 className="product-title">{title}</h3>
              <h5>${price}</h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

export default Product;
