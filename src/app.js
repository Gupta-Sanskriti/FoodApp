import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";

const App = () => {
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
        element:<About />
      },
      {
        path: "/contact",
        element:<Contact />
      },
      {
        path:"/restaurant/:id",
        element: <RestaurantMenu/>
      }

    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}></RouterProvider>);
