import React from "react";
import greekSalad from "../assets/greek salad.jpg";
import bruchetta from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon dessert.jpg";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-header menu-desc">
        <p className="title menu-title">This week specials</p>
        <button className="btn">Online Menu</button>
      </div>
      <div className="menu-cards">
        <div className="menu-card">
          <img className="menu-image" src={greekSalad} alt="greek salad" />
          <div className="menu-content">
            <div className="menu-name-price">
              <p className="item-name">Greek Sald</p>
              <p className="item-price">$12.99</p>
            </div>
            <div className="menu-delivery">
              <p>Order a delivery</p>
            </div>
          </div>
        </div>
        <div className="menu-card">
          <img className="menu-image" src={bruchetta} alt="bruchetta" />
          <div className="menu-content">
            <div className="menu-name-price">
              <p className="item-name">Bruchetta</p>
              <p className="item-price">$5.99</p>
            </div>
            <div className="menu-delivery">
              <p>Order a delivery</p>
            </div>
          </div>
        </div>
        <div className="menu-card">
          <img className="menu-image" src={lemonDessert} alt="lemon dessert" />
          <div className="menu-content">
            <div className="menu-name-price">
              <p className="item-name">Lemon Dessert</p>
              <p className="item-price">$5.00</p>
            </div>
            <div className="menu-delivery">
              <p>Order a delivery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
