import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthProvider from './context/AuthProvider.jsx'


{/* localStorage.clear();   this clears the data which might be present on the browser due to another application running on the same port */}
createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* we have wrapped the App inside the AuthProvider*/}
    
      <AuthProvider >
      <App />
      </AuthProvider>
      
  </StrictMode>,
)
