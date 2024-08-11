import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestraurantCard = (props) => {
    const { resList } = props;
    const { loggedINUser } = useContext(UserContext);

    const {
        cloudinaryImageId = '',
        name = '',
        cuisines = [],
        avgRating = 0,
        costForTwo = '',
        sla = {},
    } = resList?.info || {};

    return (
        <div className="m-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-8transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-[0.9] duration-300 ... ">
            <div className="w-[250px] h-[300px] bg-gray-50 rounded-lg shadow-xl hover:bg-gray-200 ">
                <div className="relative">
                    <img
                        className="w-full h-36 object-cover rounded-t-lg"
                        alt={name || 'Restaurant Image'}
                        src={CDN_URL + cloudinaryImageId}
                    />
                    {resList.info.isOpen && (
                        <label className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-full">
                            Open
                        </label>
                    )}
                </div>
                <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{name.length >20 ?name.substring(0,25)+'...' :name || 'Name not available'}</h3>
                    <p className="text-sm text-gray-600 mb-1 ">
                        {avgRating ? (
  <>
    <span className={avgRating<4 ? "text-yellow-600" :"text-green-900"}>★</span> {avgRating}
  </>
) : 'Rating not available'} - {sla?.slaString}</p>
                    <p className="text-sm text-gray-500 mb-1 font-semibold">
                        {cuisines.length ? cuisines.join(", ").length >20 ?cuisines.join(", ").substring(0,25) +'...' : cuisines.join(", "):'Cuisines not available'}
                    </p>
                    <p className="text-sm text-gray-700">
                        {costForTwo || 'Cost for two not available'}
                    </p>
                </div>
            </div>
        </div>
    );
};

// Higher Order Component

export const withIsOpenLabel = (RestraurantCard) => {
    return (props) => {
        return (
            <div className="relative">
                <RestraurantCard {...props} />
            </div>
        );
    };
};

export default RestraurantCard;
