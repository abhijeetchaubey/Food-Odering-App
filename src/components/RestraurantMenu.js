import { useEffect,useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestraurantMenu =()=>{
    const [resInfo,setResInfo]=useState(null);

    const {resId} = useParams();
    console.log(resId);

    useEffect(()=>{
        fetchMenu()
    },[])

    const fetchMenu = async()=>{
        const menu = await fetch(MENU_URL+resId);
        
        const json = await menu.json();

        console.log(json);
        setResInfo(json?.data)

    };

    const {
        name = '',
        city = '',
        areaName='',
        costForTwoMessage = '',
        id = '',
        avgRating = '',
        cloudinaryImageId = '',
        cuisines = [],
        sla='',
        expectationNotifiers=[]

    
    } = resInfo?.cards?.[2]?.card?.card?.info || {};

    const{itemCards=[]}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || '';

    const {offers=[]}=resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle || '';
    console.log(itemCards);
    console.log({expectationNotifiers});
    // console.log({item?.info?.discription});

    return resInfo===null? (
        <Shimmer/>
    ):(
        <div className="menu">
            
            <div className="restraurant-menu-container">
                <div>
                    <h1>{name}</h1>
                </div>
                <div className="restraurant-menu-detail">
                    <div>
                        <h4>{avgRating} - {costForTwoMessage}</h4>
                        <p><span>{cuisines.join(",")}</span></p>
                    </div>
                    <div className="restraurant-discription">
                        <p> <strong>Outlet</strong> <span>{areaName}</span> </p>
                        <p><strong>{sla.slaString}</strong></p>
                        <p > <span>{expectationNotifiers[0].text}</span></p>
                    </div>
                </div >
            </div>
            <div className="offer-detail">
            <h2>Deals for You</h2>
            </div>
            <div className="offer-detail">
                {offers.map((discount)=>(
                    <div 
                    className="offer-box"
                    key={discount.info.offerIds}
                    >   
                        <span>
                            <strong>{discount.info.header} </strong>
                            <p>{discount.info.couponCode}</p>
                        </span>
                    </div>
                ))}
            </div>
            <div className="menu-items">
            <h2>Menu</h2>
                <ul>
                    {itemCards.map((item)=>(
                    <li
                    key={item.card.info.id}
                    >
                    <div className="item-name">{item.card.info.name}</div > 
                    ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100} <br></br>
                    <p>
                    {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 
                ? `★${item?.card?.info?.ratings?.aggregatedRating?.rating}(${item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})` 
                : item?.card?.info?.ratings?.aggregatedRating?.rating}
                    </p>
                    <span>{item?.card?.info?.description}</span>
                    </li>
                    
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default RestraurantMenu;