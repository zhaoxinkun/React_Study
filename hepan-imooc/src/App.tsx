import {Button} from "antd";
import {RouterProvider} from "react-router";
import GlobalLoading from "./components/GlobalLoading/GlobalLoading.tsx";
import LoadingBridge from "./components/GlobalLoading/LoadingBridge.tsx";
import {useLoading} from "./context/LoadingContext.tsx";
import {router} from "./router/router2.tsx";


console.log(import.meta.env, "import.meta.env.BASE_URL")

function App() {

  const {showLoading, hideLoading} = useLoading();

  const handleTestLoading = () => {
    showLoading();
    setTimeout(() => {
      hideLoading();
    }, 2000);
  }

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <LoadingBridge/>
      <GlobalLoading/>
      <Button onClick={handleTestLoading}>测试loading</Button>
    </>
  );
}

export default App;
