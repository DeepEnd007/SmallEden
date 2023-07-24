import { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

function Header() {
  return (
    <>
      <div className="header-container">
        <header>
          <a>
            <img className="logo" src={logo} />
          </a>
          {/* logo */}
          {/* research */}
          {/* links */}
        </header>
      </div>
    </>
  );
}

export default Header;
