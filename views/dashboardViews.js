import { header } from "../components/header/headercomponents.js";
export function dashboardd(){
    let seccion = document.createElement('seccion');

    //header
    seccion.appendChild(header());

    return seccion;
}

document.body.appendChild(dashboardd());