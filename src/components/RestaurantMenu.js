import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import restaurantList from '../restaurant-list';
import { IMG_CDN_URL } from '../../constants';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

const RestaurantMenu = () =>{
    const {id} = useParams();
    // const [resInfo, setRestaurantInfo] = useState(null);

    const resInfo  = useRestaurant(id);

    

    console.log(resInfo)

    return (resInfo == null)? <Shimmer/> : (
        <div className='rest'>
            <div className='rest-details'>
                <h1>Restaurant id : {resInfo?.id}</h1>
                <h2>{resInfo?.name}</h2>
                <img src={IMG_CDN_URL+resInfo?.cloudinaryImageId}/>
                <h3>{resInfo?.area}</h3>
                <h3>{resInfo?.city}</h3>
                <h3>{resInfo?.avgRating}</h3>
                <h3>{resInfo?.costForTwoMsg}</h3>
            </div>
            <div className='rest-menu'>
                <ul>
                    <h1>Menu</h1>
                    {Object.values(resInfo?.menu?.items).map((item)=>{
                        // console.log(item.name);
                        return <li key={item.id}>{item.name}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;