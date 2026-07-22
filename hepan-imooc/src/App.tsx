import {ConfigProvider, theme} from "antd";
import {RouterProvider} from "react-router";
import GlobalLoading from "./components/GlobalLoading/GlobalLoading.tsx";
import LoadingBridge from "./components/GlobalLoading/LoadingBridge.tsx";
import {useThemeMode} from "./context/ThemeContext";
import {router} from "./router/router2.tsx";
import "./App.css"

console.log(import.meta.env, "import.meta.env.BASE_URL")

function App() {
  const {themeMode} = useThemeMode();
  const isDark = themeMode === "dark";

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          // Seed Token, affects wide range
          colorPrimary: 'ed6c00',
          // Derived token, affects narrow range
        },
      }}
    >
      <div className={`app-shell app-shell-${themeMode}`}>
        <LoadingBridge/>
        <GlobalLoading/>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </ConfigProvider>

  );
}

export default App;
