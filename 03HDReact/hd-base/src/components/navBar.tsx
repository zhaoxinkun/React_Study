import { Link } from '@tanstack/react-router'

export function NavBar() {
  return (
    <>
      <header className="flex gap-4">
        <Link to="/">首页</Link>
        <Link to="/about"> 关于页</Link>
        <Link to="/user">用户页面</Link>
        <Link to="/blog">文档博客</Link>
      </header>
    </>
  )
}
