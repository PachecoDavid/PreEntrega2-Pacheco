import React,{useContext} from 'react';
import { Link } from "react-router-dom";
import Evangel  from "../../imagenes/Evangel.png";
import {DataContext} from "../../context/Dataprovider"

export const Header = () => {
 const value = useContext(DataContext);
 const [menu, setMenu] = value.menu;
 const [carrito] = value.carrito

 console.log(menu)

 const toogleMenu = () =>{
  setMenu(!menu)
 }

  return (
    
  <header>
<Link to="/">
<div className="logo">
<img src={Evangel} alt="logo" width="150"/>
</div>
</Link>

<ul>
<li>
    <Link to="/"> INICIO </Link>
</li>

<li>
<Link to="/productos">PRODUCTOS</Link>
</li>
</ul>

<div className="cart" onClick={toogleMenu}>
    <box-icon name="cart" color="white"></box-icon>
    <span className="item-list"> {carrito.length} </span>
</div>

  </header>
    
  )
}
