import { useState } from "react";
import "./Buttons.css";

function Buttons() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className="greens-button-new login-btn large primary login-btn">
        <span className="greens-button-new-box">
          <span className="greens-button-new-text">
            <span className="login-btn">Log in</span>
          </span>
        </span>
      </button>
    </>
  );
}

export default Buttons;
