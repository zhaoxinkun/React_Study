import {useLoaderData, useParams} from "react-router";

export default function OrderId() {
  // 获取loader数据
  const loaderData = useLoaderData();
  console.log("🚀 ~ OrderId ~ loaderData: ", loaderData);
  // 获取params数据
  const params = useParams();
  console.log("🚀 ~ OrderId ~ params: ", params);
  return (
    <>
      this is OrderId page `${params.id}`
    </>
  );
}
