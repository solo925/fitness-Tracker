import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext'
import { FavoritesProvider } from './contexts/FavouritesContext'
import { AdminProvider } from './contexts/AdminContext'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <FavoritesProvider>
      <AdminProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </AdminProvider>
  </FavoritesProvider>
  </AuthProvider>
)
