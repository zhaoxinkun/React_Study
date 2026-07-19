// 关于token

export const tokenApi = {
  setToken: (key: string, value: object) => localStorage.setItem(key, JSON.stringify(value)),
  getToken: (key: string) => {
    const value = localStorage.getItem(key)
    if (!value) return ""
    try {
      return JSON.parse(value)
    } catch (error) {
      console.error(error)
      return value
    }
  },
  removeToken: (key: string) => localStorage.removeItem(key),
  clearAllTokens: () => localStorage.clearAll(),
}
