import axios from "axios"
import process from "node:process";
import {getToken} from "@/utlis/Token.js";

const request = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})


// Add a request interceptor
request.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        config.header.token = getToken();
        return config;
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
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default request
