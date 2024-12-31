import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/Css/Change.css'
// import App from './App.jsx'
import Change from './Components/Change.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Change />
  </StrictMode>,
)
