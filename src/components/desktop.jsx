import React, { Fragment } from "react";

export function Desktop() {
  return (
    <Fragment>
      <img className="logo" src="https://ww1.cuevana3.me/wp-content/themes/cuevana3/public/img/cnt/cuevana3.png" />
      <ul>
        <li>inicio</li>
        <li>Géneros</li>
        <li>Películas</li>
        <li>Series</li>
      </ul>
      <nav>
        <input type="text" placeholder="  Buscar"/>
        <button>Entrar</button>
        <button className="button-blue" >Registro</button>
      </nav>
    </Fragment>
  );
}
