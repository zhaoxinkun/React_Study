// 运行时环境配置
type ENV = "development" | "production" | "staging"

// eslint-disable-next-line no-useless-assignment
let env: ENV = "development";
console.log("localhost is ", location.host)
// 动态获取你的环境
if (location.host === "localhost:5173") {
  env = "development"
} else if (location.host === "http://api-driver.marsview.cc") {
  env = "production"
} else {
  env = "staging"
}

// 依据你的环境配置不同的内容
const config = {
  development: {
    baseApi: "",
    uploadApi: "",
    cdn: "",
    mock: "",
    mockApi: ""
  },
  production: {
    baseApi: "",
    uploadApi: "",
    cdn: "",
    mock: "",
    mockApi: ""
  },
  staging: {
    baseApi: "",
    uploadApi: "",
    cdn: "",
    mock: "",
    mockApi: ""
  }
}

export default {
  env,
  ...config[env],
}
