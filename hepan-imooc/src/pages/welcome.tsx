import {Button} from "antd";
import {useLoading} from "../hooks/useLoading.ts";

export default function Welcome() {

  const {showLoading, hideLoading} = useLoading();

  const handleTestLoading = () => {
    showLoading();
    setTimeout(() => {
      hideLoading();
    }, 2000);
  }
  return (
    <>
      this is Welcom
      <Button onClick={handleTestLoading}>测试loading</Button>
    </>
  );
}
