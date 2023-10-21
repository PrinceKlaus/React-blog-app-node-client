import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import NewsDataa from './Components/Assets/NewsData.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <NewsDataa>
  <App />
  </NewsDataa>
  </BrowserRouter>
)
