# Namaste React

# Parcel
-Dev Build
-Local Server
-HMR -Hot Module Replacement
-File Watching Algorithm - written in cpp
-Caching - Faster Builds
-Image Optimization
-Minification
-Bundling
-Compress
-Consistent Hashing
-code splitting
-Differential Bundling - support older browser
-Diagnostic 
-Error handling
- HTTPS
-Tree Shaking - remove unused code
-Different dev and prod bundlers

# Food Odering App

ader{
 - Logo
 -Nav items

}
Body{
 - Search bar
 - RestraurantContainer
     -RestraurantCard
             -Img
             -Name of Res, Star Rating, Cusine, Address
}
Footer{
 -Copyright
 -Links
 -Address
 -Contact
}

#  Two types of Exprt/Import 

    -Default Export/Import
        export default Component
        import deefault LOGO_URL

    -Named Export/Import
        export const Component;
        import {Component} from "path"


# React Hooks
(Normal JS function)
  -useState() => Superpowerfull State variable in React -> Whenever stateVariable Changes react trigers the reconciliation cycle (rerender the component)
  -useEffect()


# 2 Type of Routing in web app
  -Client side Routing
  -Server side Routing

# Redux ToolKit
    -Install @reduxjs/toolkit and react-redux
  -Build our store 
  -connect our store to our app
  -Slice (cartSlice)
  -dispatch(action)
  -selector


  # Types of testing (developer)
    - Unit Testing
    - Integration Testing
    - End to End Testing - e2e testing

  # setting up Testing in our app
  -Install React Testing Library
  -Installed jest
  -Installed Babel dependencies
  -Configure Bable
  -configure Parcel Config file to disable default bable transpilation
  - Jest -npx jest --init
  -Install JS-Dom library
  