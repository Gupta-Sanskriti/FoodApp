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
      <div className="flex p-2 shadow-lg bg-darker-green-sap ">
        <h1 className="w-20% p-2 m-2 text-2xl text-white">FoodApp</h1>
        {/* <button onClick={()=>{setNew_title("food world") }}>{new_title}</button> */}
        <nav className="w-60% flex p-2 m-auto ">
          <ul className="flex justify-between px-10 text-white">
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
  