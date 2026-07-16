import {useRoutes} from "react-router";
import App from "../App.tsx";
import Home from "../pages/home.tsx";
import Profile from "../pages/profile.tsx";

// 方式一,声明模式路由
export default function BaseRouter() {
  return useRoutes([
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
    }
  ]);
}
