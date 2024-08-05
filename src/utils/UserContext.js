import { createContext } from "react";

const UserContext =createContext({
    loggedINUser: "Default User"
})

export default UserContext;