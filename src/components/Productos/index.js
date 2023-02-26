import React from 'react'
import IMG from "../../imagenes/img01.JPG";
export const Productoslista = () => {
  return (
<>
<h1 className="tittle"> PRODUCTOS </h1>
<div className="productos">
    <div className="producto">
    <a href="#">
    <div className="producto__img">
<img src={IMG} alt="" />
    </div>
    </a>
<div className="producto__footer">
    <h1> tittle </h1>
    <p> --- </p>
    <p className="price">$$$</p>
</div>
<div className="buttom">
<button>
    Añadir al carrito
</button>
<div>
<a href="#" className="btn"> Vista </a>
</div>

</div>
</div>

<div className="producto">
    <a href="#">
    <div className="producto__img">
<img src={IMG} alt="" />
    </div>
    </a>
<div className="producto__footer">
    <h1> tittle </h1>
    <p> --- </p>
    <p className="price">$$$</p>
</div>
<div className="buttom">
<button>
    Añadir al carrito
</button>
<div>
<a href="#" className="btn"> Vista </a>
</div>

</div>
</div>

<div className="producto">
    <a href="#">
    <div className="producto__img">
<img src={IMG} alt="" />
    </div>
    </a>
<div className="producto__footer">
    <h1> tittle </h1>
    <p> --- </p>
    <p className="price">$$$</p>
</div>
<div className="buttom">
<button>
    Añadir al carrito
</button>
<div>
<a href="#" className="btn"> Vista </a>
</div>

</div>
</div>

<div className="producto">
    <a href="#">
    <div className="producto__img">
<img src={IMG} alt="" />
    </div>
    </a>
<div className="producto__footer">
    <h1> tittle </h1>
    <p> --- </p>
    <p className="price">$$$</p>
</div>
<div className="buttom">
<button>
    Añadir al carrito
</button>
<div>
<a href="#" className="btn"> Vista </a>
</div>

</div>
</div>


    </div>

</>
  )
}
