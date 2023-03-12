import React from 'react'
import Portada from "../../imagenes/portada.png"
import { Link } from "react-router-dom";

export const inicio = () => {
  return (
    <div className="inicio">


      
        <Link to="/">  
        <h1 className="tittle"> INICIO </h1>
        
        </Link>

        <Link to="/productos"> 
        <h1 className="tittle"> PRODUCTOS </h1>
         </Link>
         <img src={Portada} alt="inicio" />


        </div>
  )
}
