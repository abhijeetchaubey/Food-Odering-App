import React, { lazy,Suspense, useEffect,useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Error from "./components/Error"
import RestraurantMenu from "./components/RestraurantMenu"
// import Grocery from "./components/Grocery"
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"


// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// on demand loading

const Grocery =lazy(()=>import("./components/Grocery"))
// console.log(Grocery);

const AppLayout =()=>{
    const [userName,setUserName]=useState();

    // authentication
    useEffect(()=>{
        // Make an API call and send username and password

        const data={
            name:"Abhijeet Chaubey"
        }
        setUserName(data.name)
    },[])

    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedINUser:userName,setUserName}}>
            <div className="app">
            <Header/>
            <Outlet/>
            {/* 
                Footer
            */}
        </div>
        </UserContext.Provider>

        </Provider>
            )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restraurants/:resId",
                element:<RestraurantMenu/>
            },
            {
                path:"/grocery",
                element:<
                Suspense fallback={<h1>Loading....</h1>}>
                <Grocery/>
                </Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
            
        ],
        errorElement:<Error/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>

    },

    {
        path:"/restraurants/:resId",
        element:<RestraurantMenu/>
    },
    {
        path:"/cart",
        element:<Cart/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)