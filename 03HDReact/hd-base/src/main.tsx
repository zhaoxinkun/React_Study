import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/tailwind.css'
import { RouterProvider } from '@tanstack/react-router'
import { router } from '@/routes/_root.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
