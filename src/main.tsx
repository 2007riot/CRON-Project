import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import GlobalState from './context/Context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalState>
    <App />
    </GlobalState>
  </React.StrictMode>
)
