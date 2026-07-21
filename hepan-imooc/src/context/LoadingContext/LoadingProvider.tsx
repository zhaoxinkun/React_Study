import {type ReactNode, useCallback, useMemo, useState} from "react";
import {LoadingContext} from "./LoadingContext";

interface LoadingProviderProps {
  children: ReactNode
}

// 创建一个loading Provider
export function LoadingProvider({children}: LoadingProviderProps) {

  const [loading, setLoading] = useState(false)

  // 控制显示
  const showLoading = useCallback(() => setLoading(true), [])
  // 控制隐藏
  const hideLoading = useCallback(() => setLoading(false), [])

  const value = useMemo(() => ({
    loading,
    showLoading,
    hideLoading,
  }), [loading, hideLoading, showLoading])


  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  )
}
