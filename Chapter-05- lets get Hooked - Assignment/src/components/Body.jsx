import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";


function filterData(searchText, restaurantSearch) {
    //we need to filter data on basis on what we typing
    //and the value is searchText
   const filterDataSearch =  restaurantSearch.filter((res) => 
    res.data.name.includes(searchText)
    

    );
    return filterDataSearch;
}

const Body = () =>{

    const [listOfRestaurantsByUseState , setlistOfRestaurantsByUseState] = useState(resObj)
    const [searchText, setsearchText] = useState();

    //Creating the state varialbe so that on click the list updates and shows that res-card in UI
    const [restaurantSearch, setrestaurantSearch] = useState(resObj)

    return(
        <>
        <div className="body">
        <div className="filter">
        <div className="search">
            <input type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}

            onChange={(e) => {
                setsearchText(e.target.value);
                console.log(searchText);
            }}
            />
                <button className="search-btn"
                onClick={()=>{
                const dataSearched = filterData(searchText, restaurantSearch);
                setrestaurantSearch(dataSearched);
                // console.log(dataSearched);
                }}
                >
                Search
                </button>
                {/* Here search is working only on refresh if we search again it will not search as the state is been updated  */}
        </div>

{/* Button for Top Rated Restaurants discussed in class 5 in React webseries */}
            <button className="filter-btn"onClick={() => {

                const filteredList = listOfRestaurantsByUseState.filter(
                    (res) => res.data.avgRating > 4
                );
                setlistOfRestaurantsByUseState(filteredList);
                console.log(filteredList);
                console.log(listOfRestaurantsByUseState);

            }}>Top Rated Restaurants</button>

        </div>
        
        {/* Display of Cards  done in class 5 of react webseries using listOfRestaurantsByUseState */}
        {/* <div className="res-container">
        {
        listOfRestaurantsByUseState.map(restaurant => 
            <RestaurantCard key={restaurant.data.id} resDataList={restaurant}/>
          )
        }
        </div> */}

{/* ------------------------------------------------------------ */}

        <div className="res-container">
        {
        restaurantSearch.map(restaurant => 
            <RestaurantCard key={restaurant.data.id} resDataList={restaurant}/>
          )
        }
        </div>
        </div>
        </>
    );
};


export default Body;

// Body search was made in chapter 5 live teaching

//Important interview question -> Why do we need the state variable ?
//Because  react has no idea about creating the each variable in JS style 
// and if it got change react will not know
// therefore React introduce the state variable which keeps the data layer and UI layer in sync whenever there is change in variable react re-renders it and keep in sync.

//behind the scenes Reconcilation is happening -> Diff Algorithm -> Virtual DOM
//React re-render on changes found by diff algorithm after seeing virtual DOM(representation of actual DOM) and makes changes fast and automatically -> that why React is fast 

// -------------------------------------------------------------------

/* Search only works on default page , where all restaurants are shown , it doesn't show because the state is beign changes -> we will make it in another lecture , how to search again  */

//NOW HOW TO KEEP TWO BUTTON ONE FILTER BUTTON AND OTHER SEARCH BUTTON BOTH FILTER THE RESTAUTANT LIST => How to use both in same component
//And How to search again without refreshing 
//Also check can we use original res List -> resObj as above 

// FIX THE SEARCH BAR