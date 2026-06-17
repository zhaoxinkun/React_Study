// hooks函数
import { QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'

import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient()

export const useAppQuery = () => {
  // 返回一个组件
  const AppQueryProvider = ({ children }: { children: ReactNode }) => {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  }
  return { AppQueryProvider }
}
