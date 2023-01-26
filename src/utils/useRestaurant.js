import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_MENU } from "../../constants";



const useRestaurant = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    // get data from api
    useEffect(()=>{
        getRestaurantInfo()
    }, [])
    
    async function getRestaurantInfo(){
        const data = await fetch(FETCH_RESTAURANT_MENU+resId);
        const json = await data.json();
        // this state is updated whenever data is fetched from the api.
        setRestaurantInfo(json.data);  

    }

    // return restaurant data
    return restaurantInfo

}

export default useRestaurant;