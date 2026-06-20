// 创建博客页面路由
import { createRoute } from '@tanstack/react-router'
import rootRoute from '@/routes/_root.tsx'
import { BlogLayout } from '@/pages/blog/blogLayout.tsx'
import { Feature } from '@/pages/blog/feature.tsx'
import { Live } from '@/pages/blog/live.tsx'
import ArticleDetail from '@/pages/blog/articleDetail.tsx'
import BlogHome from '@/pages/blog/blogHome.tsx'

// 创建blog路由
const blogRootRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/blog',
  component: BlogLayout,
})

// 配置article 为blog的首页
const IndexRoute = createRoute({
  getParentRoute: () => blogRootRoute,
  path: '/',
  component: BlogHome,
})

// 定义article的动态路由
export const articleDetailRoute = createRoute({
  getParentRoute: () => blogRootRoute,
  path: 'article/$id',
  component: ArticleDetail,
})

// 特性路由
const featureRoute = createRoute({
  getParentRoute: () => blogRootRoute,
  path: 'feature',
  component: Feature,
})

// 直播路由
const liveRoute = createRoute({
  getParentRoute: () => blogRootRoute,
  path: 'live',
  component: Live,
})

const blogRoute = blogRootRoute.addChildren([
  featureRoute,
  articleDetailRoute,
  IndexRoute,
  liveRoute,
])
export default blogRoute
