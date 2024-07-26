
import RestraurantCard from "./RestraurantCard"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body =()=>{

    // Local State Variable -Super Powefull Variable
    const [listofRestaurant,setlistofRestaurant]=useState([]);
    const [filteredRestraurant,setfilteredRestaurant]=useState([])
    const [searchText,setsearchText]=useState("")

    // console.log("Body Rendered"); 

    useEffect(()=>{
        fetchData();

    },[])

    // swiggy api for restaurant
    const fetchData=async()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);
        setlistofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };


    const onlineStatus = useOnlineStatus()

    if(!onlineStatus) return <h1>Looks like you are offline!! check your internet connection</h1>

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
                        e.preventDefault()
                        let filteredRestraurant=listofRestaurant.filter((res)=>
                            res?.info?.name.toLowerCase().includes(searchText.toLowerCase()) 
                        );
                        setfilteredRestaurant(filteredRestraurant)
                    }}
                    >Search</button>
                </div>
                <button
                className="filter-btn"
                title="Top rated Restraurant"
                // .data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.avgRating
                onClick={()=>{
                    let filteredList=listofRestaurant.filter(
                        (res)=> res?.info?.avgRating >=4
                    );
                    console.log(filteredList);
                    setfilteredRestaurant(filteredList)
                }}
                >Top Rated Restaurant</button> 
            </div>
            
            <div className="restraunt-container">
                {filteredRestraurant.map((restraunt)=>(
                    <Link
                    to={"/restraurants/"+restraunt.info.id}
                    key={restraunt.info.id}
                    style={{ textDecoration: 'none', color: 'inherit'}}

                    >
                        <RestraurantCard resList={restraunt} />
                    </Link>
                ))}
            </div>
        </div>
        
    )
}

export default Body