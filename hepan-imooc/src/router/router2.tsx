import {createBrowserRouter, Navigate} from "react-router";
import Error404 from "../pages/404.tsx";
import Login from "../pages/Login/login.tsx";
import OrderLoader from "../pages/Order/orederLoader.tsx";
import Home from "../pages/home.tsx";
import Order from "../pages/Order/order.tsx";
import OrderId from "../pages/Order/orderId.tsx";
import Profile from "../pages/profile.tsx";
import ProfileId from "../pages/profileId.tsx";
import Welcome from "../pages/welcome.tsx";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "*",
    element: <Navigate to='/404'/>
  },
  {
    path: "/404",
    element: <Error404/>
  },
  {
    path: "/profile",
    element: <Profile/>,
    children: [
      {
        path: ':id',
        element: <ProfileId/>
      }
    ]
  },
  {
    path: "/order",
    element: <Order/>,
    children: [
      {
        path: ":id",
        element: <OrderId/>,
        loader: OrderLoader,
      }
    ]
  }

]);
