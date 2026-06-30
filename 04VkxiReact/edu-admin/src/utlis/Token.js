const tokenKeys="token"

export const setToken=token=>sessionStorage.setItem(tokenKeys,token)
export const getToken=()=>sessionStorage.getItem(tokenKeys)
export const removeToken=()=>sessionStorage.removeItem(tokenKeys)