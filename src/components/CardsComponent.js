import React, { useState } from "react";

// Cards Component
const CardsComponent = (props) => {
  const [num, setNum] = useState(0);

  // destructuring the required data from restaurantList Api
  const { cloudinaryImageId, name, cuisines, avgRating, minDeliveryTime } =
    props.restaurant.data;

  return (
    <>
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
      <div className="card-item">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          alt="restaurant-image"
        ></img>
        <h1>{name}</h1>
        <p>{cuisines.join(", ")}</p>
        <h4>{avgRating} stars</h4>
        <p>Delivery Time: {minDeliveryTime} minutes</p>
        <div className="incdec">
        <button
            className="dec btn-di"
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
          <p className="incdec_val">{num}</p>
          <button
            className="inc btn-di"
            onClick={() => {
              setNum(num + 2);
            }}
          >
            +
          </button>
        </div>
      </div>
    </>
  );
};

export default CardsComponent;
