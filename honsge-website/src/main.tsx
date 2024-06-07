import React from 'react'
import ReactDOM from 'react-dom/client'
// import Login from "./login";
// import SignUp from "./signup";
// import MainPage from "./mainpage";
// import Points from "./points";
import Lobby from "./lobby";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Lobby />
  </React.StrictMode>,
)
