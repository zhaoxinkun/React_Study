import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import Home from '@/pages/home.tsx'
import About from '@/pages/about.tsx'
import App from '@/App.tsx'

// 1. 创建root根路由
export const rootRoute = createRootRoute({
  component: App,
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
