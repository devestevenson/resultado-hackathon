import React from 'react'
import { Link } from "react-router-dom";
import '../css/Nav.css'

const Nav = () => {
  return (
    <div>
        <nav className="navbar">
        <Link to='/Inicio' className="logo">INPA</Link>
        <ul className="navbar-box">
            <li><Link to='/Formulario'>Registro</Link></li>
            <li><Link>Ingresar</Link></li>
            <li><Link>Hablamos</Link></li>
            <li><Link>Planes</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
