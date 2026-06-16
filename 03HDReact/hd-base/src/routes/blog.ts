// 创建博客页面路由
import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/routes/_root.tsx'
import { BlogLayout } from '@/pages/blog/blogLayout.tsx'
import { Feature } from '@/pages/blog/feature.tsx'
import { Front } from '@/pages/blog/front.tsx'
import { Live } from '@/pages/blog/live.tsx'

const blogRootRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogLayout,
})

const featureRoute = createRoute({
  getParentRoute: () => blogRootRoute,
  path: 'feature',
  component: Feature,
})
const frontRoute = createRoute({
  getParentRoute: () => blogRootRoute,
  path: 'front',
  component: Front,
})
const liveRoute = createRoute({
  getParentRoute: () => blogRootRoute,
  path: 'live',
  component: Live,
})

const blogRoute = blogRootRoute.addChildren([featureRoute, frontRoute, liveRoute])
export default blogRoute
