import React, { Component } from "react"
import ReactDOM from "react-dom/client"

// React.createElement =>ReactElement -JS Object => HTMLElement(render)

const heading = React.createElement("h1",{id:"heading"},"Namaste React");

const root = ReactDOM.createRoot(document.getElementById("root"))



const jsxHeading= <h1 id="heading1">Namaste React using JSX</h1>


// Component Composition -->
const HeadingComponent = () => <div id="container">
    {heading}
    {jsxHeading}
    <TitileComponents/>
    <h1 id="heading">Namaste React Functional Components</h1>
    
</div>

const TitileComponents=()=> <div>
    <h1 id="heading1"> Hii I'm Title Component</h1>
</div>


root.render(<>
<TitileComponents/>
<HeadingComponent/>
</>)