// 封装Http请求

import request from "./request.ts";

const http = {
  get<T>(url: string, params?: object): Promise<T> {
    return request.get(url, {params});
  },
  post<T>(url: string, data?: unknown): Promise<T> {
    return request.post(url, data);
  },

  put(url: string, data: unknown) {
    return request.put(url, data);
  },
  delete(url: string) {
    return request.delete(url);
  },
  patch(url: string, data: unknown) {
    return request.patch(url, data);
  },
}
export default http;
