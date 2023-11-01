import React from "react";
import { Link } from "react-router-dom";
import KristianRoute from "./KristianRoute";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/KristianRoute">Kristian</Link>
      <Link>Lunks</Link>
      <Link>Lunks</Link>
      <Link>Lunks</Link>
    </nav>
  );
};

export default NavBar;
