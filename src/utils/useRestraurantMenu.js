import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";

// Custom Hook

const useRestaurantMenu=(resId)=>{

    const [resInfo,setResInfo] = useState(null)
    //fetchdata
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu= async()=>{
        const menu = await fetch(MENU_URL+resId)
        const json = await menu.json()
        setResInfo(json?.data)
    }

    return resInfo;
}

export default useRestaurantMenu;