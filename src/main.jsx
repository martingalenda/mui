import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { ThemeConfig } from './config/theme.config.jsx';
import { BrowserRouter as Router} from "react-router-dom"; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeConfig>
        <Router basename="/mui">
         <App />
        </Router>
     </ThemeConfig>
  </React.StrictMode>,
)
