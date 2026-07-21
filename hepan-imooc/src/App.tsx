import {RouterProvider} from "react-router";
import GlobalLoading from "./components/GlobalLoading/GlobalLoading.tsx";
import LoadingBridge from "./components/GlobalLoading/LoadingBridge.tsx";
import {router} from "./router/router2.tsx";
import "./App.css"

console.log(import.meta.env, "import.meta.env.BASE_URL")

function App() {
  return (
    <>
      <LoadingBridge/>
      <GlobalLoading/>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
