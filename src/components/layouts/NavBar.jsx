import React from "react";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        Crypto Currency
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};


export default NavBar;
