import {useEffect} from "react";
import {useNavigate} from "react-router";
import {login} from "../api/api.ts";

export default function Home() {
  console.log("Home render")
  useEffect(() => {
    login({
      id: 1234
    }).then(res => console.log(res))
  }, [])
  const navigate = useNavigate()
  const handleClick = () => {
    // 编程式导航
    navigate("/profile")
  }
  return (
    <>
      <h2> this is home page</h2>
      <button onClick={handleClick}> 点击跳转去profile页面</button>
    </>
  );
}
