// import User from "./User"
import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log("Parent Component Did Mount");
    }

    render(){

        console.log("Parent render");
        return (
            <div>
                <h1>About</h1>
                
                <h3>This is Food Odering Website</h3>

                <UserClass name={"Abhijeet Chaubey"} location={"Dehradun"}/>
            </div>
        )
    }
}

// const About=()=>{
//     return (
//         <div>
//             <h1>About</h1>
//             <h3>This is Food Odering Website</h3>
//             {/* <User name={"Abhijeet Chaubey"}/>
//  */}

//             <UserClass name={"Abhijeet Chaubey (class"} location={"Dehradun"}/>
//         </div>
//     )
// };

export default About; 