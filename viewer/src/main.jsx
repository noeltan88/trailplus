import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TrailPlusApp from './trailplus-v2-clean.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TrailPlusApp />
  </StrictMode>,
)
