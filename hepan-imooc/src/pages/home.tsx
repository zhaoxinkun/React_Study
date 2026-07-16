import {useNavigate} from "react-router";

export default function Home() {
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
