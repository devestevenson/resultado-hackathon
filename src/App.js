import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './pages/Footer'
import Formulario from './pages/Formulario'
import Inicio from './pages/Inicio'
import Nav from './pages/Nav'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/Inicio' element={<Inicio/>}/>
        <Route path='/Formulario' element={<Formulario/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App

