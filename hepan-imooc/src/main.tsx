import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import {LoadingProvider} from "./context/LoadingContext/LoadingProvider.tsx";

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
    <LoadingProvider>
      <App/>
    </LoadingProvider>
  </StrictMode>,
);
