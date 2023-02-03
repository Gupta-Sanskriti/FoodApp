import React,{useContext, useEffect, useState} from "react";
import UserContext from "../utils/UserContext";

const Search = (props) => {
    // console.log(props)
    const { searchText, allRestaurant, setSearchText, setFilteredRestaurant } = props;
    // console.log(restaurant)
    // console.log("rendering search");
    const {user, setUser} = useContext(UserContext)
    const arr ="sanskriti"
    console.log(...arr)
    
    
    return (
        <>
            <input
                className="rounded-2xl p-3 m-2 w-96 border-solid border-2 border-light-green-sap"
                type="text"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
                onKeyUp={()=>{const fRestaurants = allRestaurant.filter((rest) =>{
                    if(searchText){
                        return rest.data.name.toLowerCase().includes(searchText)
                    }
                }
                );
                setFilteredRestaurant(fRestaurants);}}

                placeholder="Please search here"
            ></input>
            <button
                className="rounded-2xl p-3 m-2 w-56 text-white bg-dark-green-sap hover:bg-darker-green-sap"
                type="submit"
                onClick={() => {
                    const fRestaurants = allRestaurant.filter((rest) =>{
                        if(searchText){
                            return rest.data.name.toLowerCase().includes(searchText)
                        }
                    }
                    );
                    setFilteredRestaurant(fRestaurants);
                }}
            >
                Search
            </button>
            <input type="text" id="dname" value={user.name} onChange={(e)=>{
                setUser({dname: e.target.value, email :'ads'});
            }}></input>
            <input type="text" id="email" value={user.email} onChange={(e)=>{
                setUser({...user,  email : e.target.value})
            }}></input>
        </>
    );
};

export default Search;
