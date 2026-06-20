import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { RouterProvider } from '@tanstack/react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { router } from './router/root.tsx'
import queryClient from '@/lib/queryClient.ts'

// 创建实例配置
export default function App() {
  return (
    <>
      {/*使用tanstack query*/}
      <QueryClientProvider client={queryClient}>
        {/*使用tanstack route*/}
        <RouterProvider router={router} />
        {/*这样 Devtools 能直接和当前 Router 实例关联*/}
        <TanStackRouterDevtools router={router} />
      </QueryClientProvider>
    </>
  )
}
