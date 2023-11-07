import React from "react";
import personOne from "../assets/reviewer1.png";
import personTwo from "../assets/reviewer2.png";
import personThree from "../assets/reviewer3.png";

const Testimonials = () => {
  return (
    <main className="testinmonials-container testimonials-parent">
      <p className="testimonials-title">Testimonials</p>
      <div className="testimonials">
        <div className="testimonial">
          <img className="reviewer-img" src={personOne} alt="reviewer person" />
          <div className="testimonial-content">
            <div className="name-rating">
              <p className="reviewer-name">James</p>
              <p className="reviewer-rating">5/5</p>
            </div>
            <div className="review-text">
              <p>Food is nice. Happy to visit.</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <img className="reviewer-img" src={personTwo} alt="reviewer person" />
          <div className="testimonial-content">
            <div className="name-rating">
              <p className="reviewer-name">Ritu</p>
              <p className="reviewer-rating">4/5</p>
            </div>
            <div className="review-text">
              <p>Verny nice environment. Easy to book a table.</p>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <img
            className="reviewer-img"
            src={personThree}
            alt="reviewer person"
          />
          <div className="testimonial-content">
            <div className="name-rating">
              <p className="reviewer-name">Antony</p>
              <p className="reviewer-rating">5/5</p>
            </div>
            <div className="review-text">
              <p>
                Wonderful place to dine. I will recommend anyone to visit this
                restaurant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
