import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import restaurantList from "../restaurant-list";
import { IMG_CDN_URL } from "../../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const [num, setNum] = useState(0);

  const { id } = useParams();
  // const [resInfo, setRestaurantInfo] = useState(null);

  const resInfo = useRestaurant(id);

  console.log(resInfo);

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <div className="rest flex">
      <div className="rest-details border-2 border-solid border-light-green-sap rounded-md m-5 p-5 h-[30rem]">
        <h1 className="bg-light-green-sap w-44 px-2 rounded-md mb-3 ">
          Restaurant id : {resInfo?.id}
        </h1>
        <h2 className="text-4xl mb-3">{resInfo?.name}</h2>
        <img
          className=" w-80 rounded-md mb-3 shadow-xl"
          src={IMG_CDN_URL + resInfo?.cloudinaryImageId}
        />
        <h3 className="text-2xl">{resInfo?.area}</h3>
        <h3 className="my-2">{resInfo?.city}</h3>
        <h3 className="bg-darker-green-sap w-20 p-2 mb-2 rounded-md text-white">
          {resInfo?.avgRating} stars
        </h3>
        <h3>{resInfo?.costForTwoMsg}</h3>
      </div>
      <div className="rest-menu w-92 ">
        <h1 className="my-5 mt-0 p-5 text-5xl">Menu</h1>
        <ul className="rest-details ml-4">
          {Object.values(resInfo?.menu?.items).map((item) => {
            // console.log(item.name);
            return (
              <div className="flex justify-between m-2">
                <li className="" key={item.id}>
                  {item.name}
                </li>
                <div className="flex w-16">
                  <button
                    className="bg-teal-600 rounded-lg p-2  text-white bg-darker-green-sap"
                    onClick={() => {
                      if (num <= 0) {
                        setNum(0);
                      } else {
                        setNum(num - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <p className="p-2 ">{num}</p>
                  <button
                    className="bg-teal-600 rounded-lg p-2  text-white bg-darker-green-sap"
                    onClick={() => {
                      setNum(num + 1);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
