import React from "react";
import { Link } from "react-router-dom";

import HomeImage from "../home/HomeImage";

import image from "../../assets/img1.jpeg";
import imageb from "../../assets/img2.jpeg";

import "./home.style.css";

const Home = () => {
  return (
    <React.Fragment>
      <div className="home-container">
        <div className="home">
          <Link to="/about">
            <img className="cover" src={imageb} alt="" />
            <img className="cover" src={imageb} alt="" />
            <img className="cover" src={imageb} alt="" />
            <img className="cover" src={imageb} alt="" />
          </Link>
          <Link to="/about">
            <ul className="list-title">
              <li>a</li>
              <li>b</li>
              <li>o</li>
              <li>u</li>
              <li>t</li>
            </ul>
          </Link>
        </div>
        <HomeImage>
          <img src={image} alt="" />
        </HomeImage>
      </div>
    </React.Fragment>
  );
};

export default Home;
