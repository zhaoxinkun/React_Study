import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {RouterProvider} from "react-router";
import {router} from "./route/router2.tsx";

// 使用路由方式一:声明模式
// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <BrowserRouter>
//       <BaseRouter/>
//     </BrowserRouter>
//   </StrictMode>,
// );

// 使用路由方式二:数据模式
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
