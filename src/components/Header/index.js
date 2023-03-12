import React from 'react';
import { Link } from "react-router-dom";
import Evangel  from "../../imagenes/Evangel.png";

export const Header = () => {
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

<div className="cart">
    <box-icon name="cart" color="white"></box-icon>
    <span className="item-list">0</span>
</div>

  </header>
    
  )
}
