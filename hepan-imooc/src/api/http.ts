import request from "./request.ts";

const http = {
  get: (url: string, params?: unknown) => {
    return request.get(url, {params});
  },
  post: (url: string, data: unknown) => {
    return request.post(url, data);
  },

  put: (url: string, data: unknown) => {
    return request.put(url, data);
  },
  delete: (url: string) => {
    return request.delete(url);
  },
  patch: (url: string, data: unknown) => {
    return request.patch(url, data);
  },
}
export default http;
