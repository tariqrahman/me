import React from 'react'
import { TerminalContextProvider } from "react-terminal";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <TerminalContextProvider>
    <App/>
  </TerminalContextProvider>
  </React.StrictMode>,
)
