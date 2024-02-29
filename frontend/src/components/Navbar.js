import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="nav__logo">
        <h2><span className="h2">P</span>ixel<span className="h2">V</span>ista</h2>
      </span>
      <div className="nav__logo">
        <a href="/">
          <AiOutlineHome />&nbsp;Home
        </a>
      </div>
      <div className="nav__logo">
        <a href="https://imaman.netlify.app/">

          <IoPersonOutline />&nbsp;About
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
