import UserContext from "../utils/UserContext";
import { useContext } from "react";

const Contact=()=>{
    const {loggedINUser}=useContext(UserContext)
    return (
        <div>
            <h1>Contact Us</h1>
            
        </div>
    );
};

export default Contact;