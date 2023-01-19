import React, { useState, useEffect } from "react";
import CardsComponent from "./CardsComponent";
import Search from "./Search";
import Shimmer from "./Shimmer";
const restaurantList = require("../restaurant-list");

// Body Component
const Body = () => {
  // let searchText = "hello"
  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurant] = useState([]);

  // everytime restaurant will render this use effect will render -- no matter whether it is rendered though initial render or search text change
  // useEffect(()=>{
  //   console.log("render Effect");
  // },[restaurants])

  useEffect(()=>{
    getRestaurants()
  },[])

  async function getRestaurants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9161991&lng=80.9442732&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setRestaurant(json?.data?.cards[2]?.data?.data?.cards)
  }

  return (
    <Shimmer/>
    // <div className="body-container">
    //   <div className="search-field">
    //     <Search searchText={searchText} restaurant={restaurants} setSearchText={setSearchText} setRestaurant={setRestaurant}/>
    //   </div>
    //   <div className="restaurant">
    //     <h1 className="card-head">Restaurants</h1>
    //     <div className="cards">
    //       {restaurants.map((restaurant) => (
    //         <CardsComponent restaurant={restaurant} key={restaurant.data.id} />
    //       ))}
    //       {/* <CardsComponent resturant={restaurantList[0]} /> */}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Body;
