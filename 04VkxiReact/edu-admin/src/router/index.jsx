// src/router/index.tsx

import { createBrowserRouter } from 'react-router'

import Login from '@/pages/Login'
import AdminLayout from "@/layout/AdminLayout.jsx"
import Dashboard from "@/pages/Dashboard/index.jsx"

const router = createBrowserRouter([
  {
    path: '/',
    Component: AdminLayout,
  },
  {
    path: '/login',
    Component: Login,
  },
  {
    path: '/dashboard',
    Component: Dashboard,
  }
])

export default router
