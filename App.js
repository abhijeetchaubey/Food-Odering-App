import React from "react"
import ReactDOM from "react-dom/client"
// creating element using react
const heading1=React.createElement("h1",{
    id:"heading"
},"Hello World from React!")
const root1 = ReactDOM.createRoot(document.getElementById('first1'));
root1.render(heading1)

// Testing 
console.log(heading1);

const paragraph =React.createElement("p",{},"I'm very excited to learn React from namaste React series")
const first =ReactDOM.createRoot(document.getElementById('first'));
first.render(paragraph)


// creating nested element in React
{/* 
<div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
<div/>

ReactElement => object => HTML (Browser understand)
 */}

const parent =React.createElement("div",
    {id:"parent"},[
        React.createElement("div",{id:"child1"},
            [
            React.createElement("h1",{},"I'm h1 tag"),
            React.createElement("h2",{},"I'm h2 tag")
        ]
        ),
        React.createElement("div",{id:"child2"},
            [
            React.createElement("h3",{},"I'm h3 tag"),
            React.createElement("h4",{},"I'm h4 tag")
        ]
        )
    ]
    
);
const nested = ReactDOM.createRoot(document.getElementById("nested"))
nested.render(parent)
console.log(parent);

// The above code is giving the structure same as the commented one but it is difficult to read and understand the above code 
// that is why JSX is neede where we can write html and react simultanously on a single page
