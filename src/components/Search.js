import React,{useEffect} from "react";

const Search = (props) => {
    // console.log(props)
    const { searchText, allRestaurant, setSearchText, setFilteredRestaurant } = props;
    // console.log(restaurant)
    // console.log("rendering search");
    return (
        <>
            <input
                className="rounded-xl"
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
        </>
    );
};

export default Search;
