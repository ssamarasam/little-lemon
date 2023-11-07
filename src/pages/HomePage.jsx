import React from "react";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Testimonials from "../components/Testimonials";
import RestaurantDescription from "../components/RestaurantDescription";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Menu />
      <Testimonials />
      <RestaurantDescription />
    </main>
  );
};

export default HomePage;
