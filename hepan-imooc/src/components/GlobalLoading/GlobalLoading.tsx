import {Spin} from "antd";
import "./global-loading.scss"
import {useLoading} from "../../hooks/useLoading.ts";

// 这里是loading的组件

export default function GlobalLoading() {
  const {loading} = useLoading()
  if (!loading) {
    return null
  }
  return (
    <>
      <div className="global-loading">
        <Spin size="large" description={"loading"}/>
      </div>
    </>
  );
}
