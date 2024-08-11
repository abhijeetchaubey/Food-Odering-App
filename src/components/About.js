import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Parent Component Did Mount");
    }

    render() {
        console.log("Parent render");
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-4">About</h1>
                <h3 className="text-xl text-center mb-6">This is a Food Ordering Website</h3>
                <div className="flex justify-center">
                    <UserClass name={"Abhijeet Chaubey"} location={"Dehradun"} />
                </div>
            </div>
        );
    }
}

export default About;
