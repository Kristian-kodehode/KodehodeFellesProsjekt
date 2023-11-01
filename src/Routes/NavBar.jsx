import React from "react";
import { Link } from "react-router-dom";
import KristianRoute from "./Kristian/KristianRoute";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/KristianRoute">Kristian</Link>
      <Link to="">Ny bruker</Link>
      <Link to="">Ny bruker</Link>
      <Link to="">Ny bruker</Link>
    </nav>
  );
};

export default NavBar;
