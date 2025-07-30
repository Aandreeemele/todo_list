import { footer } from "../components/footer/footercomponents.js";
import { header } from "../components/header/headercomponents.js";
export function dashboardd(){
    let seccion = document.createElement('seccion');

    //header
    seccion.appendChild(header());

    //footer
    seccion.appendChild(footer());
    return seccion;
}

document.body.appendChild(dashboardd());