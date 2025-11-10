import { useEffect, useState } from "react";
import { MENU_URL } from "./constants.js";
import { fetchWithRetry } from "./api";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const json = await fetchWithRetry(MENU_URL + resId);
            setResInfo(json?.data);
            setError(null);
        } catch (err) {
            console.error("Error fetching menu:", err);
            setError("Unable to load restaurant menu. Please try again later.");
        }
    };

    return { resInfo, error };
}

export default useRestaurantMenu;