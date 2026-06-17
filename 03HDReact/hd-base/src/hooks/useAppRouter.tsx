import { RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { router } from '@/routes/_root.tsx'

export const useAppRouter = () => {
  // 定义的组件
  const AppRouterProvider = () => {
    return (
      <>
        <RouterProvider router={router} />
        <TanStackRouterDevtools />
      </>
    )
  }

  return { AppRouterProvider }
}
