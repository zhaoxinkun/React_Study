import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import Home from '@/pages/home.tsx'
import About from '@/pages/about.tsx'
import App from '@/App.tsx'
import userRoute from '@/routes/user.ts'
import blogRoute from '@/routes/blog.ts'
import { FrontLayout } from '@/layout/frontLayout.tsx'

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
  component: () => (
    <FrontLayout>
      <Home />
    </FrontLayout>
  ),
})

// 创建about的路由
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: () => (
    <FrontLayout>
      <About />
    </FrontLayout>
  ),
})

// 3. 组装路由树
const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, blogRoute, userRoute])

// 4. 创建路由
export const router = createRouter({
  routeTree,
})
