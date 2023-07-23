import { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <>
      <div className="header-container">
        <a>
          <img className="logo" src={logo} />
        </a>
        {/* logo */}
        {/* research */}
        {/* links */}
      </div>
    </>
  );
}

export default Header;
