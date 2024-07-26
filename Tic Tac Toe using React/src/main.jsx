import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Darkmode from './darkmode.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Darkmode></Darkmode>
  </React.StrictMode>,
)
