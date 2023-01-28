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
      <div className="flex p-2 bg-pink-50 shadow-lg bg-darker-green-sap ">
        <h1 className="w-20% p-2 text-2xl">FoodApp</h1>
        {/* <button onClick={()=>{setNew_title("food world") }}>{new_title}</button> */}
        <nav className="w-60% flex p-2 m-auto ">
          <ul className="flex justify-items-end">
            <li className="p-2">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2">
              <Link to="/about">About</Link>
            </li>
            <li className="p-2">
              <Link to="/contact">ContactUs</Link>
            </li>
            <li className="p-2">
              <Link to="/">Cart</Link>
            </li>
            <li className="p-2">
              <Link to="/Login">Login</Link>
            </li>
            <li className="p-2">
              {isOnline? "🟢" : "🔴"}
            </li>
          </ul>
        </nav>
      </div>
    );
};
export default Header;
  