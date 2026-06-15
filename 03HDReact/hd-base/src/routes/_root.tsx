import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Home from '@/pages/home.tsx'
import About from '@/pages/about.tsx'

// 1. 创建root根路由
export const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})

// 2. 创建home路由
const homeRoute = createRoute({
  // 描述父级路由
  getParentRoute: () => rootRoute,
  // 描述路径
  path: '/',
  // 描述组件
  component: Home,
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

// 3. 组装路由树
const routeTree = rootRoute.addChildren([homeRoute, aboutRoute])

// 4. 创建路由
export const router = createRouter({
  routeTree,
})
