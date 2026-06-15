import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/tailwind.css'
import { RouterProvider } from '@tanstack/react-router'
import { router } from '@/routes/_root.tsx'
import App from '@/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />,
  </StrictMode>,
)
