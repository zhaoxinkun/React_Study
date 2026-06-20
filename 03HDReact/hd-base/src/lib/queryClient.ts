// 使用tanstack query客户端,不在App里写避免循环依赖
import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
  },
})

export default queryClient
