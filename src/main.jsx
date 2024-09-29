import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//import react router dom
import { BrowserRouter } from 'react-router-dom'

//import react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//import my css
import './css/style.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
