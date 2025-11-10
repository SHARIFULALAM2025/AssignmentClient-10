import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import AuthProvider from './Components/Authentication/AuthProvider/AuthProvider.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Components/RoutePage/Route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
)
