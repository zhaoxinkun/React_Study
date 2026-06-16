import { Link, Outlet } from '@tanstack/react-router'

export function UserLayout() {
  return (
    <>
      <h2>优先加载User Layout</h2>
      <nav>
        <Link to="/user/profile">个人中心</Link>
        {' | '}
        <Link to="/user/settings">设置中心</Link>
      </nav>
      <Outlet />
    </>
  )
}
