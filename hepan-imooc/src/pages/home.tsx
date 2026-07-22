import {useEffect} from "react";
import {Button} from "antd";
import {useNavigate} from "react-router";
import {login} from "../api";
import {tokenApi} from "../utils/token.ts";
import config from "../config";
import {formatDate} from "../utils"
import {useThemeMode} from "../context/ThemeContext";

export default function Home() {
  const {themeMode, toggleTheme} = useThemeMode();

  console.log("Home render")
  console.log("config", config)
  console.log("formatDate", formatDate())
  useEffect(() => {
    login({
      username: "akin",
      password: "123456",
    }).then(res => console.log(res))
    tokenApi.setToken("token", {
      value: 'zhaoxinkun'
    })
  }, [])
  const navigate = useNavigate()
  const handleClick = () => {
    // 编程式导航
    navigate("/profile")
  }
  return (
    <>
      <h2> this is home page</h2>
      <Button type="primary" onClick={toggleTheme}>
        切换到{themeMode === "light" ? "暗黑" : "明亮"}主题
      </Button>
      <br/>
      <br/>
      <button onClick={handleClick}> 点击跳转去profile页面</button>
    </>
  );
}
