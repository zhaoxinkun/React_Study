/***
 *  @desc this is root instance
 *
 *  @desc rootRout is root Route
 *  @desc XXXRoute is part Route
 *  @desc routeTree is Route tree
 *  @desc router is Route instance
 *  */

import { createRouter } from '@tanstack/react-router'

import userRoute from '@/routes/user/user.tsx'
import blogRoute from '@/routes/blog/blog.tsx'
import queryClient from '@/lib/queryClient.ts'
import homeRoute from '@/routes/home.tsx'
import aboutRoute from '@/routes/about.tsx'
import rootRoute from '@/routes/_root.tsx'

// 2. 组装路由树
const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, blogRoute, userRoute])

// 3. 创建路由实例
export const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
