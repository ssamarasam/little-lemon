import React from "react";
import logo from "../assets/Logo.svg";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <a href="#">
        <img src={logo} alt="little lemon logo" />
      </a>
      <Navbar />
    </header>
  );
};

export default Header;
