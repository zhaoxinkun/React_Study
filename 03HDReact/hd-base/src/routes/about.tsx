import About from '@/pages/about.tsx'
import { createRoute } from '@tanstack/react-router'
import rootRoute from '@/routes/_root.tsx'

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})
export default aboutRoute
