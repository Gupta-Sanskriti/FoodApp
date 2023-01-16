import React, { useState } from "react";

// Header Component
const Header = () => {
  // let new_title = "hello foods"
  const [new_title, setNew_title ] = useState("hello world")

  // each time the dom refreshesh component will re-render
  console.log("render")

    return (
      <div className="header">
        <h1 className="logo">FoodApp</h1>
        <button onClick={()=>{setNew_title("food world") }}>{new_title}</button>
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
  