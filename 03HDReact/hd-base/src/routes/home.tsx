import Home from '@/pages/home.tsx'
import { createRoute } from '@tanstack/react-router'
import rootRoute from '@/routes/_root.tsx'

// 创建home路由
const homeRoute = createRoute({
  // 描述父级路由
  getParentRoute: () => rootRoute,
  // 描述路径
  path: '/',
  // 描述组件
  component: Home,
})
export default homeRoute
