import ItemList from "./ItemList";
import { useState } from "react";

const RestraurantCategory =({rescategory,showItems,setShowIndex})=>{
    // console.log(rescategory);

    // const [showItems,setShowItems]=useState(false)

    const handleClick=()=>{
        console.log("clicked");
        setShowIndex()
        // showItems===true ? false :true
    }
    return(
        <div>
            {/** Header */}
            <div className="w-7/12  shadow-lg p-4 mx-[150px] my-4">
                <div className=" flex justify-between cursor-pointer"onClick={handleClick}>
                <span className="font-bold text-lg">{rescategory.title}({rescategory.itemCards.length})</span>
                <span>{showItems ? '⬆' : '⬇'}</span>
                </div>
                <div>
                                {/**Acordian Body */}
                    {showItems && <ItemList items={rescategory?.itemCards}/>
                    }
                </div>
            </div>
            
        </div>
    )
}

export default RestraurantCategory;


