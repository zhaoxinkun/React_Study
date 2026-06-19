import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/tailwind.css'
import { RouterProvider } from '@tanstack/react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { router } from '@/routes/_root.tsx'

// 使用tanstack query
import { QueryClient } from '@tanstack/react-query'
// 创建实例配置
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*使用tanstack query*/}
    <QueryClientProvider client={queryClient}>
      {/*使用tanstack route*/}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
