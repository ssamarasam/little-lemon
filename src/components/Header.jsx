import React from "react";
import logo from "../assets/Logo.svg";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="little lemon logo" />
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
