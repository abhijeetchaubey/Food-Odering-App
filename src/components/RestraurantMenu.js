import { useEffect,useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestraurantMenu";
import RestraurantCategory from "./RestraurantCategory";


const RestraurantMenu =()=>{

    const {resId} = useParams();
    console.log(resId);


// ********** custom Hooks for Api fetching and displaying functionality in useRestraurantMenu**********
    const resInfo = useRestaurantMenu(resId)
//*****Fetching API for rendering menuCard using normal Hooks */ 
    
    // const [resInfo,setResInfo]=useState(null);

    // useEffect(()=>{
    //     fetchMenu()
    // },[])

    // const fetchMenu = async()=>{
    //     const menu = await fetch(MENU_URL+resId);
        
    //     const json = await menu.json();

    //     console.log(json);
    //     setResInfo(json?.data)
    // };

    // **************/

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

    
    } = resInfo?.cards[2]?.card?.card?.info || {};

    const{itemCards=[]}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || '';

    const {offers=[]}=resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle || '';
    
    // console.log(itemCards);
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    // console.log({expectationNotifiers});

    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category=>category?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(categories,"hii");

    const [showIndex,setShowIndex]= useState(null )

    return resInfo===null? (
        <Shimmer/>
    ):(
        <div className="menu">
            
            <div className="restraurant-menu-container">
                <div>
                    <h1 className="font-bold my-6 text-2xl">{name}</h1>
                </div>
                <div className="restraurant-menu-detail">
                    <div>
                        <h4>{avgRating} - {costForTwoMessage}</h4>
                        <p><span>{cuisines.join(",")}</span></p>
                    </div>
                    <div className="restraurant-discription">
                        <p> <strong>Outlet</strong> <span>{areaName}</span> </p>
                        <p><strong>{sla.slaString}</strong></p>
                        <p > <span>{expectationNotifiers[0]?.text}</span></p>
                    </div>
                </div >
            </div>
            <div className="offer-detail">
            <h2 className="my-5">Deals for You</h2>
            </div>
            <div className="offer-detail">
                {offers.map((discount)=>(
                    <div 
                    className="offer-box"
                    key={discount.info.offerIds}
                    >   
                    {discount.info.offerIds.offerLogo}
                        <span>
                            <strong>{discount.info.header} </strong>

                            <p>{discount.info ? discount.info.couponCode : discount.info.expiryTime}</p>
                        </span>
                    </div>
                ))}
            </div>
            
            <div className="ml-[100px] mt-6" >
                {/** Categories Accordions */}
                {categories.map((category,index)=> (<RestraurantCategory 
                key={category?.card?.card?.title}
                rescategory={category?.card?.card}
                showItems={index===showIndex}
                setShowIndex={()=>(
                    setShowIndex(index === showIndex ? null : index)
                )}
                />
                ))}
            </div>
        </div>
    )
}

export default RestraurantMenu;