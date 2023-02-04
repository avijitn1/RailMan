import React from "react"
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import Home from '../Components/Home';
import Login from '../Components/Login';
import Logout from '../Components/Logout';
import About from '../Components/About';
import Services from '../Components/Services';
import Menu from '../Components/Menu';
import Contact from '../Components/Contact';
import Order from '../Components/Order';
import Signup from "../Components/Signup";
import VendorSignup from "../Components/VendorSignup";
import UserDashboard from "../Components/Dashboard/UserDashboard";
import RestaurantDashboard from "../Components/Dashboard/RestaurantDashBoard";
import Restaurants from "../Components/Restaurants/Restaurants";
import FoodMenu from "../Components/Orders/FoodMenu";
import MenuItem from "../Components/Orders/MenuItem";
import Payment from "../Components/Orders/Payment";


const MyRoutes = () => {
    const location = useLocation();
    return (
      <div>      
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Logout" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        /*<Route path="/VendorSignup" element={<VendorSignup/>} />*/
        <Route path="/About" element={<About/>} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Menu" element={<Menu/>} />
        <Route path="/Order" element={<Order/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/UserDashboard" element={<UserDashboard/>} />
        <Route path="/RestaurantDashboard" element={<RestaurantDashboard/>} />
        <Route path="/ExploreRestaurants" element={<Restaurants/>} />
        <Route path="/FoodMenu" element={<FoodMenu/>} />
        <Route path="/MenuItem" element={<MenuItem/>} />
        <Route path="/Payment" element={<Payment/>} />
      </Routes>
  
      </div>
    )
  }
  
  export default MyRoutes;