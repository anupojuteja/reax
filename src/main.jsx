import { StrictMode } from 'react'
import App1 from './app1.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <App />
    <App1 />
    
    </BrowserRouter>
   
  </StrictMode>,
)
