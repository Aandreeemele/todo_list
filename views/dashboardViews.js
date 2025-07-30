import { footer } from "../components/footer/footercomponents.js";
import { header } from "../components/header/headercomponents.js";
import { tareasComponents } from "../components/tareas/tareasComponents.js";
import { informacionComponents } from "../components/informacion/informacionComponents.js";
export function dashboardd(){
    let dashboardd = document.createElement('seccion');
    dashboardd.className = "dashboard";

    //header
    dashboardd.appendChild(header());

    //seccion1
    let seccion1 = document.createElement('seccion');
    seccion1.className = "seccion-1";
    seccion1.appendChild(tareasComponents());
    seccion1.appendChild(informacionComponents());
    dashboardd.appendChild(seccion1);

    //footer
    dashboardd.appendChild(footer());
    return dashboardd;
}

document.body.appendChild(dashboardd());