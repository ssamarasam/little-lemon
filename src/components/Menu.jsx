import React from "react";
import greekSalad from "../assets/greek salad.jpg";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu-header">
        <p>This week specials</p>
        <button>Online Menu</button>
      </div>
      <div className="menu-cards">
        <div className="menu-card">
          <img className="menu-image" src={greekSalad} alt="greek salad" />
          <div className="menu-name-price">
            <p className="item-name">Greek Sald</p>
            <p className="item-proce">$12.99</p>
          </div>
          <div className="menu-delivery">
            <p>Order a deliver</p>
          </div>
        </div>
        <div className="menu-card">
          <img className="menu-image" src={greekSalad} alt="greek salad" />
          <div className="menu-name-price">
            <p className="item-name">Greek Sald</p>
            <p className="item-proce">$12.99</p>
          </div>
          <div className="menu-delivery">
            <p>Order a deliver</p>
          </div>
        </div>
        <div className="menu-card">
          <img className="menu-image" src={greekSalad} alt="greek salad" />
          <div className="menu-name-price">
            <p className="item-name">Greek Sald</p>
            <p className="item-proce">$12.99</p>
          </div>
          <div className="menu-delivery">
            <p>Order a deliver</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
