// 所有的接口地址
import http from "./http.ts"
import type {Login} from "../types/api.ts";

export const login = (params: Login.params) => http.post("/users/login", params);

