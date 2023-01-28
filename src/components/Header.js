import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

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

  const isOnline = useOnline();



    return (
      <div className="flex p-2 bg-pink-50 shadow-lg">
        <h1 className="logo">FoodApp</h1>
        {/* <button onClick={()=>{setNew_title("food world") }}>{new_title}</button> */}
        <nav className="flex justify-between">
          <ul className="flex justify-between p-2 ">
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
            <li>
              {isOnline? "🟢" : "🔴"}
            </li>
          </ul>
        </nav>
      </div>
    );
};
export default Header;
  