import { Link, Outlet } from '@tanstack/react-router'

export function BlogLayout() {
  return (
    <>
      <div className="bg-white border-primary border-t-4 shadow-sm mb-6">
        <div className="container m-auto h-16 flex items-center gap-6">
          <Link to="/" className="text-primary flex items-center gap-1">
            <span className="uppercase">houdunren.com</span>
          </Link>
          <Link to="/blog/feature">React特性</Link>
          <Link to="/blog/live">晚八点直播</Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}
