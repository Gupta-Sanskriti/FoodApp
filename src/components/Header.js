import React, { useState } from "react";

// Header Component
const Header = () => {
    return (
      <div className="header">
        <h1 className="logo">FoodApp</h1>
        <nav className="nav-bar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">ContactUs</a>
            </li>
            <li>
              <a href="/">Cart</a>
            </li>
          </ul>
        </nav>
      </div>
    );
};
export default Header;
  