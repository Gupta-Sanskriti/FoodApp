import React from "react";

const Search = (props) => {
    console.log(props)
    const { searchText, restaurant, setSearchText, setRestaurant } = props;
    console.log(restaurant)
    return (
        <>
            <input
                type="text"
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }}
                placeholder="Please search here"
            ></input>
            <button
                type="submit"
                onClick={() => {
                    const filteredRestaurants = restaurant.filter((rest) =>{
                        if(searchText){
                            return rest.data.name.toLowerCase().includes(searchText)
                        }
                    }
                    );
                    setRestaurant(filteredRestaurants);
                }}
            >
                Search
            </button>
        </>
    );
};

export default Search;
