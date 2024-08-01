
import RestraurantCard,{ withIsOpenLabel } from "./RestraurantCard"
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useOnlineStatus  from "../utils/useOnlineStatus";
import { SWIGGY_URL_RESTRO } from "../utils/constants";
import Heading from "./Heading";
import UpdateRestaurant from "./UpdateRestraurant";

const Body =()=>{

    // Local State Variable -Super Powefull Variable
    const [listofRestaurant,setlistofRestaurant]=useState([]);
    const [filteredRestraurant,setfilteredRestaurant]=useState([])
    const [searchText,setsearchText]=useState("")

    const RestraurantCardOpen = withIsOpenLabel(RestraurantCard);


    console.log("Body Rendered",listofRestaurant); 

    useEffect(()=>{
        fetchData();

    },[])

    // swiggy api for restaurant
    const fetchData=async()=>{
        const data = await fetch(SWIGGY_URL_RESTRO);

        const json = await data.json();

        console.log(json);
        setlistofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };


    const onlineStatus = useOnlineStatus()

    if(!onlineStatus) return <h1>Looks like you are offline!! check your internet connection</h1>

    return listofRestaurant?.length=== 0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter flex justify-evenly">
                <div className="search m-4 p-4">
                    <input
                    type="search"
                    className="px-2 py-1 border-2  border-black rounded-full" 
                    value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value)
                    }}
                    
                    />
                    <button
                    className="px-4 py-1 bg-green-100  m-2 rounded-lg"
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
                <div className=" m-4 p-4 flex item-center">
                <button
                className="px-4 py-2 bg-gray-200 border-collapse rounded-xl"
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
            </div>

            <Heading/>

            <div className="flex flex-wrap  pl-[10%]">
                {filteredRestraurant?.map((restraunt)=>(
                    <Link
                    to={"/restraurants/"+restraunt.info.id}
                    key={restraunt.info.id}
                    style={{ textDecoration: 'none', color: 'inherit'}}

                    >
                        {
                        restraunt.info.isOpen  ? (
                        <RestraurantCardOpen resList={restraunt} />
                    ):(
                        <RestraurantCard resList={restraunt} />
                    )}
                    </Link>
                ))}
            </div>

        </div>
        
    )
}

export default Body