import React from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          {/* <a href="#">Home</a> */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* <a href="#">About</a> */}
          <Link to="#">About</Link>
        </li>
        <li>
          {/* <a href="#">Menu</a> */}
          <Link to="#">Menu</Link>
        </li>
        <li>
          {/* <a href="#">Reservations</a> */}
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          {/* <a href="#">Order Online</a> */}
          <Link to="#">Order Online</Link>
        </li>
        <li>
          {/* <a href="#">Login</a> */}
          <Link to="#">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
