import {RouterProvider} from "react-router";
import router from "@/router/index.jsx";

function App() {
    return (
        <>
            {/*注册路由即可*/}
            <RouterProvider router={router}></RouterProvider>
        </>
    )
}

export default App
