

import React, { FunctionComponent } from 'react'
import { BrowserRouter as Router, Routes, Route,   RouteProps  } from 'react-router-dom'


import App from './App'
import Home from './components/pages/home/home'
import InternaService from './components/pages/internaServices/internaService'
import InternaInformation from './components/pages/internaInformation/internaInformation'
import InternaInformation2 from './components/pages/internaInformation2/internaInformation2'
import InternaPackages from './components/pages/internaPackages/internaPackages'





const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        {/* <Route exact path="/honduras/home" element={<Home/>} />
        <Route exact path="/guatemala/home" element={<Home/>} />
        <Route exact path="/honduras/interna-servicios" element={<InternaService/>} />
        <Route exact path="/honduras/interna-informacion" element={<InternaInformation/>} />
        <Route exact path="/honduras/interna-paquetes" element={<InternaPackages/>} />
        <Route exact path="/elsalvador/home" element={<Home/>} />
        <Route exact path="/elsalvador/interna-servicios" element={<InternaService/>} />
         */}


        {/* nuevos routes    */}

        {/* Honduras */}
        <Route exact path="/hn/home-hn" element={<Home/>} />
        <Route exact path="/hn/enviar-recibir-dinero-hn" element={<InternaService/>} />
        <Route exact path="/hn/pagar-servicios-hn" element={<InternaService/>} />
        <Route exact path="/hn/pagar-comercios-hn" element={<InternaInformation/>} />
        <Route exact path="/hn/recargas-hn" element={<InternaInformation2/>} />
        <Route exact path="/hn/remesas-hn" element={<InternaService/>} />
        {/* Bolivia */}
        <Route exact path="/bo/home-bo" element={<Home/>} />
        <Route exact path="/bo/pagar-servicios-bo" element={<InternaService/>} />
        <Route exact path="/bo/enviar-recibir-dinero-bo" element={<InternaService/>} />
        <Route exact path="/bo/pagar-comercios-bo" element={<InternaService/>} />
        <Route exact path="/bo/recargas-bo" element={<InternaInformation/>} />
        {/* El Salvador */}
        <Route exact path="/sv/home-sv" element={<Home/>} />
        <Route exact path="/sv/remesas-sv" element={<InternaService/>} />
        <Route exact path="/sv/pagar-servicios-sv" element={<InternaService/>} />
        <Route exact path="/sv/enviar-recibir-dinero-sv" element={<InternaInformation2/>} />
        <Route exact path="/sv/paquetes-recargas-sv" element={<InternaPackages/>} />
        {/* Guatemala */}
        <Route exact path="/gt/home-gt" element={<Home/>} />
        <Route exact path="/gt/enviar-recibir-dinero-gt" element={<InternaInformation2 />} />
        <Route exact path="/gt/pagar-servicios-gt" element={<InternaService />} />
        <Route exact path="/gt/remesas-gt" element={<InternaService />} />
        <Route exact path="/gt/paquetigos-recargas-gt" element={<InternaPackages />} />
        {/* Paraguay */}
        <Route exact path="/py/home-py" element={<Home/>} />
        <Route exact path="/py/pagar-servicios-py" element={<InternaService/>} />
        <Route exact path="/py/enviar-recibir-dinero-py" element={<InternaService/>} />
        <Route exact path="/py/pagar-comercios-py" element={<InternaService/>} />
        <Route exact path="/py/recargas-py" element={<InternaInformation2/>} />
        


        

      </Routes>
    </Router>
  )
}

 

export default AppRouter
