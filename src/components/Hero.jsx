import React from "react";
import heroimg from "../assets/restauranfood.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-description">
          <p className="title">Little Lemon</p>
          <p className="sub-title">Chicago</p>
          <p className="description">
            We are a family owned mediteranian restaurant focused on traditional
            receipe served with a modern twist
          </p>
          <button>Reserve a table</button>
        </div>
        <div className="hero-image-container">
          <img className="hero-img" src={heroimg} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
