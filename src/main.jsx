import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {Usercontext} from "./Components/Axios"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Usercontext>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Usercontext>
  </React.StrictMode>,
)
