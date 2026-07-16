import {message} from "antd";
import axios from "axios"
import {tokenApi} from "../utils/token.ts";

const request = axios.create({
  baseURL: "/api",
  timeout: 5000,
  timeoutErrorMessage: "request timeout",
  withCredentials: true
})

// Add a request interceptor
request.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // 获取token
    const token = tokenApi.getToken();
    if (typeof token === 'string' && token.trim()) {
      config.headers.set(
        'Authorization',
        `Bearer ${token.trim()}`,
      )
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    const data = response.data;
    if (data.code == 50001) {
      message.error(data.msg, 1000)
      tokenApi.removeToken()
      location.href = "/login";
    } else if (data.code != 0) {
      message.error(data.msg, 1000)
      return Promise.reject(data.msg)
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);


export default request;
