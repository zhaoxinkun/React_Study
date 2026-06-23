/**
 * @desc 对于axios的封装处理
 * */

import axios, { type AxiosError } from 'axios'
import { HttpError } from '@/config/HttpError.ts'
import { message } from 'antd'

const request = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000,
})

// Add a request interceptor
request.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
request.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error: AxiosError) {
    const errorMessage = HttpError[error.status as keyof typeof HttpError]
    message.info(errorMessage)
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  },
)

export default request
