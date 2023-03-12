import React from 'react'
import { Switch, Route } from "react-router-dom";
import { inicio } from "./Inicio";
import { Productoslista } from "./Productos/index";

export const Paginas = () => {
  return (
    <section>
<Switch>
<Route path="/" exact component={inicio} />
<Route path="/productos" exact component={Productoslista} />
</Switch>

    </section>
  )
}
