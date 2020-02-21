import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./default.style.css";

class Default extends Component {
  render() {
    return (
      <div className="default-container">
        <div className="default-row">
          <img
            src="https://bariyah25.files.wordpress.com/2015/02/broken-n-cracked-ice-hearts.jpg"
            alt="Default"
          />
          <div className="default">
            <h1>404</h1>
            <h1>Error</h1>
            <h2>Page Not Found</h2>
            <Link to="/">
              <button>Go Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Default;
