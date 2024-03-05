import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navabar from './components/navbar/Navabar.jsx'
import Tabs from './components/tabs/Tabs.jsx'
import About_bitcoin from './components/about_bitcoin/About_bitcoin.jsx'
import Side_banner from './components/sidebanner/Side_banner.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('header')).render(
  <React.StrictMode>
    <Navabar />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('left')).render(
  <React.StrictMode>
    <Tabs/>
    <About_bitcoin />
  </React.StrictMode>,
)
ReactDOM.createRoot(document.getElementById('right')).render(
  <React.StrictMode>
    <Side_banner />
  </React.StrictMode>,
)
