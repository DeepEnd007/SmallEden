import "./Header.css";
import logo from "../assets/logo.png";
import SearchBox from "./SearchBox";

function Header() {
  return (
    <>
      <div className="header-container">
        <header>
          <a>
            <img className="logo" src={logo} />
          </a>
          <SearchBox />
          {/* logo */}
          {/* research */}
          {/* links */}
        </header>
      </div>
    </>
  );
}

export default Header;
