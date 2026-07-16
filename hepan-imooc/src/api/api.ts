import http from "./http.ts"

export const login = (data: unknown) => http.post("/users/login", data);
