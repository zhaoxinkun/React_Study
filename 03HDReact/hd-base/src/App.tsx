import { Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export default function App() {
  return (
    <>
      <header>
        <Link to="/">首页</Link>

        <Link to="/about"> 关于页</Link>
      </header>

      <main>
        <Outlet />
      </main>

      <TanStackRouterDevtools />
    </>
  )
}
