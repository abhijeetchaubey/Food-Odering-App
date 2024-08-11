import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const [menuOpen, setMenuOpen] = useState(false);
    const onlineStatus = useOnlineStatus();
    // const { loggedINUser } = useContext(UserContext); 
    const cartItems = useSelector((store) => store.cart.items);

    const { loggedINUser, setUserName } = useContext(UserContext);

    return (
        <div className="flex justify-between items-center rounded-lg py-2 px-4 bg-orange-200 shadow-lg mb-3 sticky z-50 top-0">
            <div className="logo-container flex-shrink-0">
                <img className="w-16 h-auto rounded-lg" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
                </button>
            </div>
            <div className={`nav-items w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:flex`}>
                <ul className="flex flex-col md:flex-row items-center md:space-x-4 text-sm md:text-lg font-semibold">
                    <li className="flex items-center space-x-1">
                        <span>Online Status:</span>
                        <span>{onlineStatus ? "✅" : "🔴"}</span>
                    </li>
                    <li>
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => 
                                `px-4 py-2 rounded-lg ${isActive ? " text-orange-600" : "hover:bg-orange-300 text-gray-700"} transition duration-300`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/grocery" 
                            className={({ isActive }) => 
                                `px-4 py-2 rounded-lg ${isActive ? " text-orange-600" : "hover:bg-orange-300 text-gray-700"} transition duration-300`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            Grocery
                        </NavLink>
                    </li>
                    <li className="relative">
                        <NavLink 
                            to="/cart" 
                            className={({ isActive }) => 
                                `flex items-center px-4 py-2 rounded-lg ${isActive ? "text-orange-600" : "hover:bg-orange-300 text-gray-700"} transition duration-300`
                            }
                            aria-label="View cart"
                            onClick={() => setMenuOpen(false)}
                        >
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                            {cartItems?.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs font-bold px-2 py-0.5">
                                    {cartItems.length}
                                </span>
                            )}
                        </NavLink>
                    </li>
                    <li>
                    <button
    className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
    onClick={() => {
        // Toggle button name between 'Login' and 'Logout'
        setBtnName(btnName === "Login" ? "Logout" : "Login");
        // Perform other actions such as setting the menu to close
        setMenuOpen(false);
    }}
>
    {btnName}
</button>

{btnName === "Logout" && (
    <div className="flex flex-col md:flex-row items-center mt-2">
        <label className="mr-2">UserName:</label>
        <input
            className="border border-gray-300 p-1 rounded"
            value={loggedINUser}
            onChange={(e) => setUserName(e.target.value)}
        />
    </div>
)}
                    </li>
                    <li className="text-gray-700 hidden md:block">{loggedINUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
