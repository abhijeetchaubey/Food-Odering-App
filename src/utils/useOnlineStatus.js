import { useEffect,useState } from "react";

const useOnlineStatus =()=>{

    const [onlineStatus,setOnlineStatus] =useState(true)
    // chack if online

    useEffect(()=>{

        window.addEventListener("offline",(event)=>{
            setOnlineStatus(false)
        })
        window.addEventListener("online",(event)=>{
            setOnlineStatus(true)
        })


    },[])



    // boolean value
    return onlineStatus;
}

export default useOnlineStatus;