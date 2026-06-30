// src/router/index.tsx

import { createBrowserRouter } from 'react-router'

import Login from '@/pages/Login'
import AdminLayout from "@/layout/AdminLayout.jsx"
import Dashboard from "@/pages/Dashboard/index.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    Component: AdminLayout,
    children:[
      {
        path:"/dashboard",
        Component:Dashboard
      }
    ]
  },
  {
    path: '/login',
    Component: Login,
  },
])

export default router
