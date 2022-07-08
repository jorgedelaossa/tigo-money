

import React, { FunctionComponent } from 'react'
import { BrowserRouter as Router, Routes, Route,   RouteProps  } from 'react-router-dom'


import App from './App'
import Home from './components/pages/home/home'
import InternaService from './components/pages/internaServices/internaService'
import InternaInformation from './components/pages/internaInformation/internaInformation'
import InternaPackages from './components/pages/internaPackages/internaPackages'




const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route exact path="/honduras/home" element={<Home/>} />
        <Route exact path="/guatemala/home" element={<Home/>} />
        <Route exact path="/honduras/interna-servicios" element={<InternaService/>} />
        <Route exact path="/honduras/interna-informacion" element={<InternaInformation/>} />
        <Route exact path="/honduras/interna-paquetes" element={<InternaPackages/>} />
        <Route exact path="/elsalvador/home" element={<Home/>} />
        <Route exact path="/elsalvador/interna-servicios" element={<InternaService/>} />
        
        {/* nuevos routes    */}

        {/* Honduras */}
        {/* <Route exact path="/hn/home" element={<Home/>} />
        <Route exact path="/hn/enviar-recibir-dinero" element={<InternaInformation/>} /> */}
        {/* Bolivia */}
        <Route exact path="/bo/home" element={<Home/>} />
        <Route exact path="/bo/enviar-recibir-dinero" element={<InternaInformation/>} />
        {/* El Salvador */}
        <Route exact path="/sv/home" element={<Home/>} />
        <Route exact path="/sv/pago-servicios" element={<InternaService/>} />
        {/* Guatemala */}
        <Route exact path="/gt/home" element={<Home/>} />
        <Route exact path="/gt/pagar-servicios" element={<InternaService/>} />
      </Routes>
    </Router>
  )
}

 

export default AppRouter
