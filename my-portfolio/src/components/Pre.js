import React from "react";
import logo from "D:/GitHub/my-portfolio/my-portfolio/src/assets/logo.png";

function Preloader({ load }) {
  // Preloader only shows when load is true
  return (
    <div id={load ? "preloader" : "preloader-none"}>
      <img src={logo} alt="Loading..." className="preloader-logo" />
    </div>
  );
}

export default Preloader;
