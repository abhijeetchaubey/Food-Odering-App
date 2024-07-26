import { useState } from "react"


const User=(props)=>{
    const[count,setcount]=useState(0)
    const[count2,setcoun2t]=useState(1)


    return( 
        <div className="user-card">
            <h1>Count1={count}</h1>
            <h2>Count2={count2}</h2>
            <button
            onClick={()=>{
                setcount(count+1)
            }}
            >increment</button>
            <h2>Name:{props.name}</h2>
            <h3>Location:Dehradun</h3>
            <h4>Contact:@abhijeet15</h4>
        </div>
    )
}

export default User