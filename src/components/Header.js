import { useEffect, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link, NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header =()=>{
    const[btnName,setbtnName]=useState("Login");
    console.log("header render");

    const onlineStatus=useOnlineStatus()
    // if no depencency array => useEffect is called on every render
    // if dependency array is empty=[]=> useEffect is called on initial render (just once) 
    // if dependency array is [btnName] => called every time btnName is updated
    // useEffect(()=>{
    //     console.log("useEffect called");
    // },[btnName]);

    return(
        <div className="header">
            <div className="logo-container">
                <img  className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <div>
                    <ul>
                        <li>Online Status:{onlineStatus ? "✅":"🔴" }</li>
                        <li>
                        <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                        <NavLink to="/about">About US</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/grocery">Grocery</NavLink>
                        </li>
                        <li>Cart</li>
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