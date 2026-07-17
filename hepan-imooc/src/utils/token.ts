// 关于token

export const tokenApi = {
  setToken: (key: string, value: object) => localStorage.setItem(key, JSON.stringify(value)),
  getToken: (key: string) => localStorage.getItem(key),
  removeToken: (key: string) => localStorage.removeItem(key)
}
