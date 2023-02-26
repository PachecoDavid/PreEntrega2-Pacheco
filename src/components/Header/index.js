import React from 'react';
import { Link } from 'react-router-dom';
import Evangel  from "../../imagenes/Evangel.png";

export const Header = () => {
  return (
    
  <header>
<a href="#">
<div className="logo">
<img src={Evangel} alt="logo" width="150"/>
</div>
</a>

<ul>
<li>
    <a href="#"> INICIO </a>
</li>

<li>
<a href="#">PRODUCTOS</a>
</li>
</ul>

<div className="cart">
    <box-icon name="cart" color="white"></box-icon>
    <span className="item-list">0</span>
</div>

  </header>
    
  )
}
