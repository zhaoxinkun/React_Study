import {createBrowserRouter} from "react-router";
import App from "../App.tsx";
import OrderLoader from "../pages/Order/orederLoader.tsx";
import Home from "../pages/home.tsx";
import Order from "../pages/Order/order.tsx";
import OrderId from "../pages/Order/orderId.tsx";
import Profile from "../pages/profile.tsx";
import ProfileId from "../pages/profileId.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/home",
    element: <Home/>,
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
