import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

// Header Component
const Header = () => {
  // let new_title = "hello foods"
  const [new_title, setNew_title] = useState("hello world");
  // each time the dom refreshesh component will re-render
  // console.log("Headerrender")
  // console.log("render Header");
  // useEffect(()=>{
  //   console.log("useEffect header")
  // })
  const {dname, email} = useContext(UserContext)
  const isOnline = useOnline();

  return (
    <div className="flex  justify-between p-2 shadow-lg bg-darker-green-sap ">
      <h1 className="w-20% p-2 m-2 text-2xl text-white">FoodApp</h1>
      <h2>{dname} and {email}</h2>
      {/* <button onClick={()=>{setNew_title("food world") }}>{new_title}</button> */}
      <nav className="w-60% p-2 ">
        <ul className="flex justify-evenly p-2 px-10 text-white">
          <li className="p-2 hover:border-b-2 border-solid border-dark-green-sap">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 hover:border-b-2 border-solid border-dark-green-sap">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 hover:border-b-2 border-solid border-dark-green-sap">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="p-2 hover:border-b-2 border-solid border-dark-green-sap">
            <Link to="/">Cart</Link>
          </li>
          <li className="p-2 hover:border-b-2 border-solid border-dark-green-sap">
            <Link to="/Login">Login</Link>
          </li>
          <li className="p-2 hover:border-b-2 border-solid border-dark-green-sap">{isOnline ? "🟢" : "🔴"}</li>
        </ul>
      </nav>
    </div>
  );
};
export default Header;
