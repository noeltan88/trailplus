import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import TrailPlusApp from './trailplus-v2-clean.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <TrailPlusApp />
    </BrowserRouter>
  </StrictMode>,
)
