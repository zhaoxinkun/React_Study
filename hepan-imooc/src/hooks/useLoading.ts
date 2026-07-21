import {useContext} from "react";
import {LoadingContext} from "../context/LoadingContext/LoadingContext.ts";

export function useLoading() {
  const context = useContext(LoadingContext)

  if (!context) {
    throw new Error('useLoading 必须在 LoadingProvider 内部使用')
  }

  return context
}
