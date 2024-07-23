import { useEffect,useState } from "react"
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";

const RestraurantMenu =()=>{
    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async()=>{
        const menu = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=608327&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await menu.json();

        console.log(json);
        setResInfo(json?.data)

    };

    const {
        name = '',
        city = '',
        costForTwoMessage = '',
        id = '',
        avgRating = '',
        cloudinaryImageId = '',
        cuisines = []
    } = resInfo?.cards?.[2]?.card?.card?.info || {};


    return resInfo===null? (
        <Shimmer/>
    ):(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h3></h3>
        </div>
    )
}

export default RestraurantMenu;