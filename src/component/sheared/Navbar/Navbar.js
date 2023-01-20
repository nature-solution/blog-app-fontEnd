import React from "react";
import "../Navbar/Navbar.css";

export default function Navbar() {
  return (
    <div className=" navbar">
      <div className="nav-left">
        <a href="">Nav Left</a>
      </div>
      <div className="nav-center">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/login">Login</a>
      </div>
      <div className="nav-right">
        <a href="">Nav Right</a>
      </div>
    </div>
  );
}
