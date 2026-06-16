import { createRoute } from '@tanstack/react-router'
import { rootRoute } from '@/routes/_root.tsx'
import { UserLayout } from '@/pages/user/userLayout.tsx'
import { Profile } from '@/pages/user/profile.tsx'
import { Settings } from '@/pages/user/settings'

// 创建user根路由
const userRootRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/user',
  component: UserLayout,
})

const profileRoute = createRoute({
  getParentRoute: () => userRootRoute,
  path: 'profile',
  component: Profile,
})

const settingsRoute = createRoute({
  getParentRoute: () => userRootRoute,
  path: 'settings',
  component: Settings,
})

const userRoute = userRootRoute.addChildren([profileRoute, settingsRoute])
export default userRoute
