
import RestraurantCard from "./RestraurantCard"

import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"

const Body =()=>{

    // Local State Variable -Super Powefull Variable
    const [listofRestaurant,setlistofRestaurant]=useState([]);

    const [searchText,setsearchText]=useState("")

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);
        setlistofRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    

    return listofRestaurant.length=== 0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input
                    type="search"
                    className="search-box"
                    value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value)
                    }}
                    />
                    <button
                    onClick={(e)=>{
                        // Filter restaurant cards and update the UI
                        // searchText
                        e.preventDefault
                        console.log(searchText);
                    }}
                    >Search</button>
                </div>
                <button
                className="filter-btn"
                title="Top rated Restraurant"
                onClick={()=>{
                    let filteredList=listofRestaurant.filter(
                        (res)=> res?.info?.avgRating >=4
                    );
                    console.log(filteredList);
                    setlistofRestaurant(filteredList)
                }}
                >Top Rated Restaurant</button>
            </div>
            <div className="restraunt-container">
                {
                    listofRestaurant.map(restraunt=>(
                    <RestraurantCard key={restraunt.info.id} resList={restraunt} />))
                }
                


            </div>
        </div>
    )
}

export default Body