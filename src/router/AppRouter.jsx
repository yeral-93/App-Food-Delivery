import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Slide from "../pages/Slide";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import DetailsRestaurant from "../pages/DetailsRestaurant";
import DetailsProduct from "../pages/DetailsProduct";
import Order from "../pages/Order";
import PaymentOrder from "../pages/PaymentOrder";
import ConfirmationOrder from "../pages/ConfirmationOrder";
import User from "../pages/User";
import PlateSearch from "../pages/PlateSearch";
import OrderDetail from "../pages/OrderDetail";
import SplashScreen from "../pages/splashScreen/SplashScreen";
import { MobileView } from "../styles/GlobalStyle";

const AppRouter = () => {
  return (
    <MobileView>
    <BrowserRouter>
      <Routes>
        <Route path="splashscreen" element={<SplashScreen />} />
        <Route path="slide" element={<Slide />} />
        <Route path="login" index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="user" element={<User />} />
        <Route path="home" element={<Home />} />
        <Route path="platesearch" element={<PlateSearch/>} />
        <Route path="detailsrestaurant" element={<DetailsRestaurant />} />
        <Route path="detailsproduct" element={<DetailsProduct/>} />
        <Route path="order" element={<Order/>} />
        <Route path="orderdetail" element={<OrderDetail/>} />
        <Route path="paymentorder" element={<PaymentOrder/>} />
        <Route path="confirmationorder" element={<ConfirmationOrder/>} />
      </Routes>
    </BrowserRouter>
    </MobileView>
  );
};

export default AppRouter;
