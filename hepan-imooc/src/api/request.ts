import {message} from "antd";
import axios from "axios"
import {hideGlobalLoading, showGlobalLoading} from "../services/loadingService.ts";
import {tokenApi} from "../utils/token.ts";

const isMock = import.meta.env.VITE_MOCK === 'true'

const request = axios.create({
  baseURL: isMock?import.meta.env.VITE_MOCK_API:import.meta.env.VITE_BASE_API,
  timeout: 5000,
  timeoutErrorMessage: "request timeout",
  withCredentials: true
})


let pendingRequestCount = 0

function startLoading() {
  pendingRequestCount += 1

  if (pendingRequestCount === 1) {
    showGlobalLoading()
  }
}

function stopLoading() {
  pendingRequestCount = Math.max(pendingRequestCount - 1, 0)

  if (pendingRequestCount === 0) {
    hideGlobalLoading()
  }
}

// Add a request interceptor
request.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // 获取token
    const token = tokenApi.getToken('token');
    startLoading()
    if (typeof token === 'string' && token.trim()) {
      config.headers.set(
        'Authorization',
        `Bearer ${token.trim()}`,
      )
    }

    // if (isMock) {
    //   config.baseURL = ;
    // } else {
    //   config.baseURL = ;
    // }
    return config
  },
  function (error) {
    // Do something with request error
    stopLoading()
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
      tokenApi.removeToken('token')
      location.href = "/Login";
    } else if (data.code != 0) {
      message.error(data.msg, 1000)
      return Promise.reject(data.msg)
    }
    stopLoading()
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    stopLoading()
    return Promise.reject(error);
  }
);


export default request;
