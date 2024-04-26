import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from "./login";
import SignUp from "./signup";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>,
)
