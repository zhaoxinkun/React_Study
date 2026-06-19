// 创建博客页面路由
import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/routes/_root.tsx'
import { BlogLayout } from '@/pages/blog/blogLayout.tsx'
import { Feature } from '@/pages/blog/feature.tsx'
import { Front } from '@/pages/blog/front.tsx'
import { Live } from '@/pages/blog/live.tsx'

// 创建blog路由
const blogRootRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogLayout,
})

// 配置front为blog的首页
const IndexRoute = createRoute({
  getParentRoute: () => blogRootRoute,
  path: '/',
  component: Front,
})

const featureRoute = createRoute({
  getParentRoute: () => blogRootRoute,
  path: 'feature',
  component: Feature,
})
// const frontRoute = createRoute({
//   getParentRoute: () => blogRootRoute,
//   path: 'front',
//   component: Front,
// })
const liveRoute = createRoute({
  getParentRoute: () => blogRootRoute,
  path: 'live',
  component: Live,
})

const blogRoute = blogRootRoute.addChildren([featureRoute, IndexRoute, liveRoute])
export default blogRoute
