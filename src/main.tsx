import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Ensure the root element exists
const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element')

// Clear any loading content
rootElement.innerHTML = ''

// Create root and render app
const root = createRoot(rootElement)
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
