import {createContext} from "react";

interface LoadingContextValue {
  loading: boolean
  showLoading: () => void
  hideLoading: () => void
}

// 创建一个loading context
export const LoadingContext = createContext<LoadingContextValue | null>(null)
