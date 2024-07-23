
import RestraurantCard from "./RestraurantCard"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"

const Body =()=>{

    // Local State Variable -Super Powefull Variable
    const [listofRestaurant,setlistofRestaurant]=useState([]);
    const [filteredRestraurant,setfilteredRestaurant]=useState([])

    const [searchText,setsearchText]=useState("")

    // console.log("Body Rendered"); 

    useEffect(()=>{
        fetchData();
        // fetchUpdate()

    },[])

    const fetchData=async()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);
        setlistofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    const fetchUpdate=async()=>{
        const url = "https://www.swiggy.com/dapi/restaurants/list/update"
        
        const headers={
            "Content-Type": "application/json"
        };
        const data={
            "lat":"30.3164945",
            "lang":"78.03219179999999"
        };
        try {
             // Make the POST request
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        });
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse the JSON response
        const json = await response.json();
        console.log("Response JSON:", json);
        
        // Handle the JSON response here
        return json;
        } catch (error) {
            console.error("Error fetching data:",error)
        }
    }


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
                    filteredRestraurant.map(restraunt=>(
                    <RestraurantCard key={restraunt.info.id} resList={restraunt} />))
                }
                


            </div>
        </div>
    )
}

export default Body