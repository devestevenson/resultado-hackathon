import axios from 'axios';
import React, { useState, useEffect } from 'react'
import '../css/Productos.css'

const Productos = () => {

    const [productos, setProductos] = useState([]);

    const traerProductos = async () => {
        const response = await axios.get("URLAPI");
        setProductos(response.data)
    }
    useEffect(() => {
        traerProductos();
    }, []);


  return (
    <div className='producto'>
        {
            productos.map((producto) => (
                <div key={productos.id}>
                    <article className='tajeta'>
                        <h2>{producto.nombre}</h2>
                        <p>{producto.description}</p>
                        <div className='precio'>
                            <h4>{producto.price}</h4>
                            <span>+</span>
                        </div>
                    </article>
                </div>
            ))
        }

        <div className='planes'>
        <h3>Planes en oferta</h3>
        <section className='tarjetaContent'>
        <article className='tarjeta'>
            <h2>nombre</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam illo. Deserunt.</p>
            <div className='precio'>
                <h4>20000</h4>
                <span>+</span>
            </div>
        </article>

        <article className='tarjeta'>
            <h2>nombre</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam illo. Deserunt.</p>
            <div className='precio'>
                <h4>20000</h4>
                <span>+</span>
            </div>
        </article>

        <article className='tarjeta'>
            <h2>nombre</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magnam illo. Deserunt.</p>
            <div className='precio'>
                <h4>20000</h4>
                <span>+</span>
            </div>
        </article>
        </section>

        <div className='adquiere'>
        <a href=".#">Adquiere un producto</a>
        <a href=".#">→</a>
      </div>
        </div>
    </div>
  )
}

export default Productos
