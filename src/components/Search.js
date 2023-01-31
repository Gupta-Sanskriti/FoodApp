import React,{useEffect} from "react";

const Search = (props) => {
    // console.log(props)
    const { searchText, allRestaurant, setSearchText, setFilteredRestaurant } = props;
    // console.log(restaurant)
    // console.log("rendering search");
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
        </>
    );
};

export default Search;
