import { NavBar } from '@/components/navBar'
import { Outlet } from '@tanstack/react-router'

// interface FrontLayoutProps {
//   children: ReactNode
// }

// export const FrontLayout: FC<FrontLayoutProps> = ({ children }) => {
//   return (
//     <>
//       <NavBar />
//       {children}
//     </>
//   )
// }
export const FrontLayout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
