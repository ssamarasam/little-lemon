import React from "react";
import restaurant from "../assets/restaurant chef B.jpg";

const RestaurantDescription = () => {
  return (
    <>
      <div className="restaurant-desc-parent">
        <div className="restaurant-desc restaurant-description">
          <p className="title">Little Lemon</p>
          <p className="sub-title desc-subtitle">Chicago</p>
          <p className="rest-description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>

        <img className="desc-img" src={restaurant} alt="Restaurant" />
      </div>
    </>
  );
};

export default RestaurantDescription;
