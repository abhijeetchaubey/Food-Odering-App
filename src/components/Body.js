import RestraurantCard, { withIsOpenLabel } from "./RestraurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { SWIGGY_URL_RESTRO } from "../utils/constants";
import Heading from "./Heading";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listofRestaurant, setlistofRestaurant] = useState([]);
    const [filteredRestraurant, setfilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");

    const RestraurantCardOpen = withIsOpenLabel(RestraurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_URL_RESTRO);
        const json = await data.json();
        setlistofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus) return <h1 className="text-center mt-5">Looks like you are offline! Check your internet connection.</h1>;

    const { loggedINUser, setUserName } = useContext(UserContext);

    return listofRestaurant?.length === 0 ? <Shimmer /> : (
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row md:justify-between mb-6">
            <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0 relative w-full md:w-auto lg:ml-[200px] " >
                <input  
                    type="search"
                    className="px-4 py-2 border-2 border-gray-300 rounded-full mb-2 md:mb-0 w-full md:w-auto pl-10 "
                    placeholder="Search for restaurants"
                    value={searchText}
                    onChange={(e) => setsearchText(e.target.value)}
                />
                <div className="absolute left-3 md:top-1/2 top-[30%]  transform -translate-y-1/2 text-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35m1.2-5.4a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                        />
                    </svg>
                </div>
                
            <button
                        className="px-4 py-1 bg-gray-100 rounded-lg outline-none hover:scale-[0.9] hover:delay-[300ms]"
                        onClick={(e) => {
                            e.preventDefault();
                            let filteredRestraurant = listofRestaurant.filter((res) =>
                                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setfilteredRestaurant(filteredRestraurant);
                        }}
                    >
                        search
            </button>
            </div>

        
                <button
                    className="px-4 py-2 bg-orange-500 rounded-xl mb-2 md:mb-0 md:mr-[200px] text-white hover:scale-[0.9] hover:delay-500  "
                    title="Top rated Restaurant"
                    onClick={() => {
                        let filteredList = listofRestaurant.filter((res) => res?.info?.avgRating >= 4);
                        setfilteredRestaurant(filteredList);
                    }}
                >
                    Top Rated Restaurant
                </button>
                
            </div>
            <Heading />
            <div className=" ml-5 lg:mx-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 ">
                {filteredRestraurant?.map((restraunt) => (
                    <Link
                        to={"/restraurants/" + restraunt.info.id}
                        key={restraunt.info.id}
                        className="text-decoration-none"
                    >
                        {restraunt.info.isOpen ? (
                            <RestraurantCardOpen resList={restraunt} />
                        ) : (
                            <RestraurantCard resList={restraunt} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
