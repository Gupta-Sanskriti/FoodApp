import React from "react";
import ReactDOM from "react-dom";
const restaurantList = require("./restaurant-list");

// Header Component
const Header = () => {
  console.log(restaurantList[0].data.name);

  return (
    <div className="header">
      <h1 className="logo">FoodApp</h1>
      <nav className="nav-bar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">ContactUs</a>
          </li>
          <li>
            <a href="/">Cart</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// Cards Component
const CardsComponent = (props) => {
  console.log(props.restaurant.data)
  // destructuring the required data from restaurantList Api
  const { cloudinaryImageId, name, cuisines, avgRating, minDeliveryTime } = props.restaurant.data;

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
      </div>
    </>
  );
};

// Body Component
const Body = () => {
  return (
    <div className="body-container">
      <div className="search-field">
        <input type="search" placeholder="Please search here"></input>
        <button type="submit">Search</button>
      </div>
      <div className="restaurant">
        <h1 className="card-head">Restaurants</h1>
        <div className="cards">{
            restaurantList.map((restaurant) => (
                <CardsComponent restaurant={restaurant} />
            ))
        }
        {/* <CardsComponent resturant={restaurantList[0]} /> */}
        </div>
      </div>
    </div>
  );
};

// Footer components
const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">FoodApp copyrights &copy; 2022-2023</p>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
