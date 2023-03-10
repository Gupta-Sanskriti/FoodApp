import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import useOnline from "../utils/useOnline";
import CardsComponent from "./CardsComponent";
import Search from "./Search";
import Shimmer from "./Shimmer";
const restaurantList = require("../restaurant-list");

// Body Component
const Body = () => {
  // let searchText = "hello"
  const [searchText, setSearchText] = useState();
  const [Filteredrestaurants, setFilteredRestaurant] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([])

  // everytime restaurant will render this use effect will render -- no matter whether it is rendered though initial render or search text change
  // useEffect(()=>{
  //   console.log("render Effect");
  // },[restaurants])
  // console.log("render body")
  useEffect(() => {
    getRestaurants();
    
  },[]);

  // useEffect(()=>{
  //   console.log("useEffect body")
  // })

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9161991&lng=80.9442732&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  if(!allRestaurant) return <h1>No Data found</h1>;

  

  // if (Filteredrestaurants?.length === 0) return <h1>No Restaurants Found</h1>

  return (
    <div className="">
      <div className=" p-5 my-2 w-100%">
        <Search
          searchText={searchText}
          allRestaurant={allRestaurant}
          setSearchText={setSearchText}
          setFilteredRestaurant={setFilteredRestaurant}
        />
      </div>
      {allRestaurant.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant">
          <h1 className="font-bold text-5xl p-5 px-7">Restaurants</h1>
          <div className="flex flex-wrap p-2">
            {Filteredrestaurants.map((restaurant) => (
              <Link className="card-item" to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
                <CardsComponent
                  restaurant={restaurant}
                />
              </Link>
            ))}
            {/* <CardsComponent resturant={restaurantList[0]} /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
