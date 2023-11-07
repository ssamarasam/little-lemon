import React from "react";
import { Link } from "react-router-dom";
import restaurant from "../assets/restaurant.jpg";

const Footer = () => {
  return (
    <footer>
      <img
        className="footer-img"
        src={restaurant}
        alt="little lemon restaurant"
      />
      <div className="footer-content">
        <div className="footer-nav">
          <p className="footer-head">Website Navigation</p>
          <Link to="/" className="footer-item">
            Home
          </Link>
          <a href="#" className="footer-item">
            About
          </a>
          <a href="#" className="footer-item">
            Menu
          </a>
          <Link to="/booking" className="footer-item">
            Reservations
          </Link>
          <a href="#" className="footer-item">
            Order Online
          </a>
          <a href="#" className="footer-item">
            Login
          </a>
        </div>
        <div className="footer-contact">
          <p className="footer-head">Contact</p>
          <a href="#" className="footer-item">
            Address
          </a>
          <a href="#" className="footer-item">
            Phone Number
          </a>
          <a href="#" className="footer-item">
            Email
          </a>
        </div>
        <div className="footer-social">
          <p className="footer-head">Social Media</p>
          <a href="#" className="footer-item">
            Facebook
          </a>
          <a href="#" className="footer-item">
            Instagram
          </a>
          <a href="#" className="footer-item">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
