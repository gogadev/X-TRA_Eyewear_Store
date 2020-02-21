import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/img1.jpeg";

const HomeImage = () => {
  return (
    <React.Fragment>
      <div className="home">
        <Link to="/products">
          <img className="cover" src={image} alt="" />
          <img className="cover" src={image} alt="" />
          <img className="cover" src={image} alt="" />
          <img className="cover" src={image} alt="" />
        </Link>
        <Link to="/products">
          <ul className="list-title">
            <li>e</li>
            <li>y</li>
            <li>e</li>
            <li>w</li>
            <li>e</li>
            <li>a</li>
            <li>r</li>
          </ul>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default HomeImage;
