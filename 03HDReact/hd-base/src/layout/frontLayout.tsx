import { NavBar } from '@/components/navBar'
import type { FC, ReactNode } from 'react'

interface FrontLayoutProps {
  children: ReactNode
}

export const FrontLayout: FC<FrontLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}
