import { useState } from "react";
import "./SideBar.css";
import home_icon from "../assets/home_icon.png";
import bell_icon from "../assets/bell_icon.png";
import edit_icon from "../assets/edit_icon.png";
import Buttons from "./Buttons";

function SideBar() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ul className="channel-list">
          <li className="active-channel">
            <a
              aria-current="page"
              href="/explore"
              className="active router-link-exact-active link-wrapper"
              target="_self"
            >
              <img src={home_icon} />
              <span className="channel">Discovery</span>
            </a>
          </li>
          <li className="active-channel">
            <a
              aria-current="page"
              href="/explore"
              className="active router-link-exact-active link-wrapper"
              target="_self"
            >
              <img src={bell_icon} />
              <span className="channel">Post</span>
            </a>
          </li>
          <li className="active-channel">
            <a
              aria-current="page"
              href="/explore"
              className="active router-link-exact-active link-wrapper"
              target="_self"
            >
              <img src={edit_icon} />
              <span className="channel">Notifications</span>
            </a>
          </li>
        </ul>
        <Buttons />
      </div>
    </>
  );
}

export default SideBar;
