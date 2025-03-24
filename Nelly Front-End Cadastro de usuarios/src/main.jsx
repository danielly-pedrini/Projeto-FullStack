// default não precisa do {} pois é apenas um item e não precisa ter o mesmo nome 
// //import {App, app2 } from './App.jsx' export sem default precisa do {} pois é mais de 1 item, e os nomes devem ser os mesmos

import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles.js'
import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'  // Note que é "router" com r minúsculo

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>,
)