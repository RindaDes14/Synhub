import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// my css
import '../src/css/style.css'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// react router
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
