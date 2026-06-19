import { Link } from '@tanstack/react-router'

export function NavBar() {
  return (
    <>
      <header className=" flex items-center gap-6 h-16 m-auto bg-white text-lg border border-b-2 ">
        <Link to="/">首页</Link>
        <Link to="/about"> 关于页</Link>
        <Link to="/user">用户页面</Link>
        <Link to="/blog">文档博客</Link>
      </header>
    </>
  )
}
