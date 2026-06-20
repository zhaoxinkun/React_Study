// 1. 创建root根路由
import { createRootRoute } from '@tanstack/react-router'
import { FrontLayout } from '@/layout/frontLayout.tsx'

const rootRoute = createRootRoute({
  component: FrontLayout,
})

export default rootRoute
