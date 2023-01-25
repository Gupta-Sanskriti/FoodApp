import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Header Component
const Header = () => {
  // let new_title = "hello foods"
  const [new_title, setNew_title ] = useState("hello world")
  // each time the dom refreshesh component will re-render
  // console.log("Headerrender")
  // console.log("render Header");
  // useEffect(()=>{
  //   console.log("useEffect header")
  // })

    return (
      <div className="header">
        <h1 className="logo">FoodApp</h1>
        {/* <button onClick={()=>{setNew_title("food world") }}>{new_title}</button> */}
        <nav className="nav-bar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">ContactUs</Link>
            </li>
            <li>
              <Link to="/">Cart</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
};
export default Header;
  