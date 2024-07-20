import RestraurantCard from "./RestraurantCard"
import resList from "../utils/mockData"

import { useState } from "react";


const Body =()=>{

    // Local State Variable -Super Powefull Variable

    const [listofRestaurant,setlistofRestaurant]=useState(resList);

    return(
        <div className="body">
            <div className="filter">
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
                >
                    Top Rated Restaurant</button>
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