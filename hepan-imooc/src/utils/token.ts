// 关于token

export const tokenApi = {
  setToken: (token: string) => localStorage.setItem("token", token),
  getToken: () => localStorage.getItem("token"),
  removeToken: () => localStorage.removeItem("token")
}
