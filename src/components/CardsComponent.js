import React, { useState } from "react";
import { IMG_CDN_URL } from "../../constants";

// Cards Component
const CardsComponent = (props) => {
  const [num, setNum] = useState(0);

  // destructuring the required data from restaurantList Api
  const { cloudinaryImageId, name, cuisines, avgRating, minDeliveryTime } =
    props.restaurant.data;

  return (
    <div className="sm:w-60 h-96 p-5 shadow-xl sm:m-5  rounded-md hover:bg-slate-100 ">
      {/* One way of creating  
          <div className="card-item">
              <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + restaurantList[0].data.cloudinaryImageId} alt="restaurant-image"></img>
              <h1>{restaurantList[0].data.name}</h1>
              <p>{restaurantList[0].data.cuisines.join(", ")}</p>
              <h4>{restaurantList[0].data.avgRating} stars</h4>
              <p>Delivery Time: {restaurantList[0].data.minDeliveryTime} minutes</p>
          </div>
          */}

      {/* Another way of rendering dom with ease of code */}
      
        <img
          className="rounded-md shadow-sm mb-2"
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
          alt="restaurant-image"
        ></img>
        <h1 className="font-bold text-lg">{name}</h1>
        <p className="text-pink-500">{cuisines.join(", ")}</p>
        <h4 className="bg-pink-500 text-white w-20 p-2 py-1 rounded-md">{avgRating} stars</h4>
        <p>Delivery Time: {minDeliveryTime} minutes</p>
        <div className="flex w-16">
        <button
            className="bg-pink-500 rounded-lg p-2 py-1 text-white"
            onClick={() => {
              if(num<=0){
                setNum(0)
              }else{
                setNum(num - 2);
              }
            }}
          >
            -
          </button>
          <p className="p-2 py-1">{num}</p>
          <button
            className="bg-pink-500 rounded-lg p-2 py-1 text-white"
            onClick={() => {
              setNum(num + 2);
            }}
          >
            +
          </button>
        </div>
    
    </div>
  );
};

export default CardsComponent;
