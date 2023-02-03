import React, { lazy, Suspense ,useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Contact from "./components/Contact";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import Instamart from "./components/Instamart";
// import AboutClass from "./components/About";


const About = lazy(()=>import('./components/About'));

const App = () => {
  // console.log("render app");
  // useEffect(()=>{
  //   console.log("useEffect app")
  // })
  // console.log("useState:",useState())


  return (
    <>
      <Header />
      {/* Outlet - to fill in different pages */}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element:<Suspense fallback={<Shimmer/>}><About /></Suspense>,
        // element: <AboutClass/>,
        children: [
          {
            path: 'profile',
            element: <Profile/>
          },
          // {
          //   path:'footer',
          //   element:<Footer/>
          // }
        ]
      },
      {
        path: "/instamart",
        element:<Instamart />
      },
      {
        path:"/restaurant/:id",
        element: <RestaurantMenu/>
      },
      {
        path:"/login",
        element:<Login/>
      }

    ]
  },
  {
    path: "/footer",
    element: <Footer/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}></RouterProvider>);
