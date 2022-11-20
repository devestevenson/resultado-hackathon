import React from "react";
import { Link } from "react-router-dom";
import '../css/Inicio.css'
import imgHeader from '../imagenes/pngegg.png'
import Productos from "./Productos";
const Inicio = () => {
  return (
    <div>
      <header className="header">
        <article className="header-text">
            <h1>Internet + Parabolica</h1>
            <p>Conecta tu hogar con altas velocidades en la red</p>
            <li><Link>Ver planes</Link></li>
        </article>

        <figure>
            <img src={imgHeader} alt="" />
        </figure>
      </header>

      <section>
        <Productos/>
      </section>
    </div>
  );
};

export default Inicio;
