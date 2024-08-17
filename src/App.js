import React, { lazy,Suspense, useEffect,useState } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom"
import About from "./components/About"
// import Contact from "./components/Contact"
import Error from "./components/Error"
import RestraurantMenu from "./components/RestraurantMenu"
// import Grocery from "./components/Grocery"
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Cart from "./components/Cart"
import Footer from "./components/Footer"


// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// on demand loading

const Grocery =lazy(()=>import("./components/Grocery"))
// console.log(Grocery);
const Contact = lazy(()=>import("./components/Contact"))

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
            <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer/>
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
                element:<
                Suspense fallback ={<h1>Loading...</h1>}>
                <Contact/>
                </Suspense>
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
    },
    {
        path:"/footer",
        element:<Footer/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)