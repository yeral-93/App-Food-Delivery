import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Slide from "../pages/Slide/Slide";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import DetailsRestaurant from "../pages/detailRestaurant/DetailsRestaurant";
import DetailsProduct from "../pages/detailsProducts/DetailsProduct";
import Order from "../pages/Order";
import PaymentOrder from "../pages/PaymentOrder";
import ConfirmationOrder from "../pages/ConfirmationOrder";
import User from "../pages/user/User";
import PlateSearch from "../pages/PlateSearch";
import OrderDetail from "../pages/OrderDetail";
import SplashScreen from "../pages/splashScreen/SplashScreen";
import { MobileView } from "../styles/GlobalStyle";
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "../pages/register/Register";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { loginActionSync } from "../redux/actions/userAction";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const { user } = useSelector((store) => store.user);
  console.log(user);
  
  useEffect(() => {
    onAuthStateChanged(auth, (userLogged) => {
      if (userLogged?.uid) {
        setIsLoggedIn(true);

        if (!Object.entries(user).length) {
          console.log("No hay info");
          const logged = {
            email: userLogged.auth.currentUser.email,
            name: userLogged.auth.currentUser.displayName,
            avatar: userLogged.auth.currentUser.photoURL,
            accessToken: userLogged.auth.currentUser.accessToken,
          };
          dispatch(loginActionSync(logged));
        }
        console.log(userLogged);
      } else {
        setIsLoggedIn(false);
      }

      setLoading(false);
    });
  }, [user, dispatch]);

  if (loading) {
    return <h1>Cargando...</h1>;
  }
  return (
    <MobileView>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRouter isAutentication={isLoggedIn} />}>
            <Route path="splashscreen" element={<SplashScreen />} />
            <Route path="slide" element={<Slide />} />
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route element={<PrivateRouter isAutentication={isLoggedIn} />}>
            <Route path="user" element={<User />} />
            <Route path="home" element={<Home />} />
            <Route path="platesearch" element={<PlateSearch />} />
            <Route path="/detailsrestaurant/:restaurantId" element={<DetailsRestaurant />} />
            <Route path="detailsproduct/:id" element={<DetailsProduct />} />
            <Route path="order" element={<Order />} />
            <Route path="orderdetail" element={<OrderDetail />} />
            <Route path="paymentorder" element={<PaymentOrder />} />
            <Route path="confirmationorder" element={<ConfirmationOrder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MobileView>
  );
};

export default AppRouter;
