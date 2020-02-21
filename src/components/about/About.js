import React from "react";
import { Link } from "react-router-dom";

import aboutImage from "../../assets/about.jpeg";

import "./about.style.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-row">
        <h1 className="main-title">X-TRA story</h1>
        <img src={aboutImage} alt="" />
        <div className="about">
          <p align="justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            maiores possimus molestiae quibusdam, ex, dolorum voluptates rem
            eius minus sunt officia obcaecati error ratione enim harum cum.
            Veritatis labore at dolore iusto perferendis sequi nulla
            consectetur? Nihil, maxime aliquam. Deserunt tempore odit nisi
            ducimus provident a maiores distinctio repellendus vel praesentium
            sapiente cum explicabo quidem odio omnis, nihil expedita culpa
            voluptatum nobis iure magni ab ipsa delectus at? Ut, tempore?
            Reiciendis, recusandae mollitia. Obcaecati debitis error impedit
            minima mollitia ratione consequatur velit, quis pariatur ipsa
            reprehenderit repellat dolorem ex ipsam excepturi laboriosam vel
            expedita beatae iusto eligendi esse aliquam fuga?
            <span>
              <i className="fab fa-facebook icon"></i>
              <i className="fab fa-instagram icon"></i>
              <i className="fab fa-twitter icon"></i>
              <i className="fas fa-envelope-open-text icon"></i>
            </span>
          </p>
          <Link to="/products">
            <button className="product-text">SHOP</button>
          </Link>
        </div>
        <div className="about-mail">
          <p>join our mail list</p>
          <input
            type="email"
            name="email"
            placeholder="enter your email address..."
            required
          />
          <button>sign up</button>
        </div>
      </div>
    </div>
  );
};

export default About;
