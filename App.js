import React from "react"
import ReactDOM from "react-dom/client"

// React.createElement =>ReactElement -JS Object => HTMLElement(render)

const heading = React.createElement("h1",{id:"heading"},"Namaste React");

const root = ReactDOM.createRoot(document.getElementById("root"))
const root1 = ReactDOM.createRoot(document.getElementById("root1"))

root.render(heading)

console.log(heading);

// JSX (transpiled before it reaches the JS Engine) =>Converted , by Parcel  - Babel helps Parcel... it converted the code quickly to a code that reactt will understand

// JSX => React.createElement =>ReactElement -JS Object => HTMLElement(render)

const jsxHeading= <h1 id="heading1">Namaste React using JSX</h1>

root1.render(jsxHeading)

console.log(jsxHeading);