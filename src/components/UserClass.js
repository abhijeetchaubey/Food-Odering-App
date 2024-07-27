// Class based Component used in Older React 
import React from "react"
import { GITHUB_URL_USER } from "../utils/constants";


class UserClass extends React.Component {
    constructor(props){
        super(props); // Call the parent class constructor with props

        this.state={
        userInfo:{
            name:"Dummy",
            location:"Default"
        }
        }
    }

    async componentDidMount(){
        // call Api here
        const data = await fetch(GITHUB_URL_USER)
        const json = await data.json()

        console.log(json);
        this.setState({
            userInfo:json,

        })
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }

    componentWillUnmount(){
        
    }
    render(){
        const {name,location,avatar_url}=this.state.userInfo
        return( 
            <div className="user-card">
                <img src={avatar_url} />
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                <h4>Contact:@abhijeet15</h4>
            </div>
        )
    }
}

export default UserClass;

//***Component Life Cycle***
// Constructor(dummy)
// Render (dummy)
//      <HTML Dummy>
// Component Did Mount
//      <API Call>
//      <this.states> ->State variable is updated

// ------UPDATE

//   render(API data)
//   <HTML (new API data)>
//      componentDid Update