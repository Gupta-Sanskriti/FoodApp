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
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux"
import store from "./utils/store"
import Cart from "./components/Cart";

const About = lazy(()=>import('./components/About'));

const App = () => {
  const [user, setUser] = useState({
    name:"Sanskriti",
    email: "sanskriti@gmail.com"
  })
  // console.log("render app");
  // useEffect(()=>{
  //   console.log("useEffect app")
  // })
  // console.log("useState:",useState())


  return (
    // Redux proider
    <Provider store={store}>
      {/* Context provider */}
    <UserContext.Provider value={{user:user, setUser:setUser}}>
      
      <Header />
      {/* Outlet - to fill in different pages */}
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <Error/>,
    // loader: <Shimmer/>,
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
        path:"/cart",
        element:<Cart/>
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
