import React from "react";
import images from "./react-logo-app.jpg";

function Header() {
  return (
    <div>
      <header>
        <nav className="nav">
          <img src={images} alt="react-logo-app" className="nav-logo" />
          <h3>ReactFacts</h3>
          <h4>React Course - Project 1</h4>
        </nav>
      </header>
    </div>
  );
}

export default Header;
