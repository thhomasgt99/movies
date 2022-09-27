import React, { Fragment } from "react";
import { Buscador } from "./buscador";

export function Desktop() {
  return (
    <Fragment>
      <img className="logo" src="https://ww1.cuevana3.me/wp-content/themes/cuevana3/public/img/cnt/cuevana3.png" />
      <ul>
        {/* <li>inicio</li> */}
        <li><a href="/">Tendencias</a></li>
        {/* <li><a href="/">Géneros</a></li> */}
        {/* <li>series</li> */}
      </ul>
      <nav>
        <Buscador />
      </nav>
    </Fragment>
  );
}
