// 创建一个Loading的context
import {createContext, type ReactNode, useCallback, useContext, useMemo, useState} from "react";

interface LoadingContextValue {
  loading: boolean
  showLoading: () => void
  hideLoading: () => void
}

// 创建一个loading context
const LoadingContext = createContext<LoadingContextValue | null>(null)


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

export function useLoading() {
  const context = useContext(LoadingContext)

  if (!context) {
    throw new Error('useLoading 必须在 LoadingProvider 内部使用')
  }

  return context
}
