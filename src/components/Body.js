import React, { useState } from "react";
import CardsComponent from "./CardsComponent";
import Search from "./Search";
const restaurantList = require("../restaurant-list");

// Body Component
const Body = () => {
  // let searchText = "hello"
  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurant] = useState(restaurantList);

  return (
    <div className="body-container">
      <div className="search-field">
        <Search searchText={searchText} restaurant={restaurants} setSearchText={setSearchText} setRestaurant={setRestaurant}/>
      </div>
      <div className="restaurant">
        <h1 className="card-head">Restaurants</h1>
        <div className="cards">
          {restaurants.map((restaurant) => (
            <CardsComponent restaurant={restaurant} key={restaurant.data.id} />
          ))}
          {/* <CardsComponent resturant={restaurantList[0]} /> */}
        </div>
      </div>
    </div>
  );
};

export default Body;
