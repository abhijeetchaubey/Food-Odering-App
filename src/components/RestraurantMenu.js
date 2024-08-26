import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestraurantMenu.js";
import RestraurantCategory from "./RestraurantCategory.js";

const RestraurantMenu = () => {
    const { resId } = useParams();
    console.log(resId);

    // Custom Hooks for API fetching
    const resInfo = useRestaurantMenu(resId);

    const {
        name = '',
        city = '',
        areaName = '',
        costForTwoMessage = '',
        id = '',
        avgRating = '',
        cloudinaryImageId = '',
        cuisines = [],
        sla = '',
        expectationNotifiers = []
    } = resInfo?.cards[2]?.card?.card?.info || {};

    const { itemCards = [] } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card || '';

    const { offers = [] } = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle || '';

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        category => category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    const [showIndex, setShowIndex] = useState(null);

    return resInfo === null ? (
        <Shimmer />
    ) : (
        <div className="menu p-4 md:p-6 lg:p-8">
            <div className="restraurant-menu-container">
                <div>
                    <h1 className="font-bold my-4 text-xl md:text-2xl">{name}</h1>
                </div>
                <div className="restraurant-menu-detail text-sm md:text-base">
                    <div>
                        <h4>{avgRating} - {costForTwoMessage}</h4>
                        <p><span>{cuisines.join(", ")}</span></p>
                    </div>
                    <div className="restraurant-discription">
                        <p><strong>Outlet:</strong> <span>{areaName}</span></p>
                        <p><strong>{sla.slaString}</strong></p>
                        <p><span>{expectationNotifiers[0]?.text}</span></p>
                    </div>
                </div>
            </div>
            <div className="offer-detail mt-4 md:mt-6">
                <h2 className="my-4 text-lg md:text-xl">Deals for You</h2>
            </div>
            <div className="offer-detail grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {offers.map((discount) => (
                    <div
                        className="offer-box p-4 border rounded-lg shadow-md"
                        key={discount.info.offerIds}
                    >
                        
                        <span>
                            <strong>{discount.info.header}</strong>
                            <p>{discount.info ? discount.info.couponCode : discount.info.expiryTime}</p>
                        </span>
                    </div>
                ))}
            </div>

            <div className="mt-6">
                <div className="ml-[50%] font-bold text-gray-400 ">
                    <h1>MENU</h1>
                </div>
                {/** Categories Accordions */}
                {categories?.map((category, index) => (
                    <RestraurantCategory
                        key={category?.card?.card?.title}
                        rescategory={category?.card?.card}
                        showItems={index === showIndex}
                        setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RestraurantMenu;
