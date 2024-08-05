import {  useState,useContext } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header =()=>{
    const[btnName,setbtnName]=useState("Login");
    // console.log("header render");

    const onlineStatus=useOnlineStatus()

    const {loggedINUser} =useContext(UserContext); 
    console.log(loggedINUser);
    

    return(
        <div className="flex justify-between aling-middle rounded-lg py-0 px-5 bg-orange-200 shadow-lg mb-3">
            <div className="logo-container">
                <img  className="w-16 rounded-lg m-2" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <div>
                    <ul className="flex p-4 m-4 text-2xl font-semibold gap-x-5 ">
                        <li > Online Status:{onlineStatus ? "✅":"🔴" }</li>
                        <li className="hover:'w-30' hover:min-h-ful hover:bg-orange-300 rounded-sm active:text-orange-600">
                        <NavLink to="/">Home</NavLink>
                        </li>
                        <li className="hover:'w-30' hover:min-h-ful hover:bg-orange-300 rounded-sm active:text-orange-600">
                        <NavLink to="/about">About US</NavLink>
                        </li>
                        <li className="hover:'w-30' hover:min-h-ful hover:bg-orange-300 rounded-sm active:text-orange-600">
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                        <li className="hover:'w-30' hover:min-h-ful hover:bg-orange-300 rounded-sm active:text-orange-600">
                            <NavLink to="/grocery">Grocery</NavLink>
                        </li>
                        <li className="hover:'w-30' hover:min-h-ful hover:bg-orange-300 rounded-sm active:text-orange-600">{loggedINUser}</li>
                        <button
                        className="login"
                        onClick={()=>{
                            btnName==="Login"?setbtnName("Logout"):setbtnName("Login")
                            
                        }}
                        >
                            {btnName}
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header