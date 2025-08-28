import { footer } from "../components/footer/footercomponents.js";
import { header } from "../components/header/headercomponents.js";
import { tareas } from "../components/tareas/tareasComponents.js";
import { InfoTareas } from "../components/informacion/informacionComponents.js"; 

export async function dashboardd() {
  try {
    const resultado = await fetch("http://127.0.0.1:3000/api/tareas");
    const datos = await resultado.json();

    const dashboard = document.createElement('section');
    dashboard.className = "dashboard";
    dashboard.appendChild(header());

    const seccion1 = document.createElement('section');
    seccion1.className = "seccion-1";

    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    const todasLasTareas = [...datos, ...tareasGuardadas];

    // 👉 obtenemos div y función de detalle
    const { div: infoCard, mostrarDetalle } = InfoTareas();

    // 👉 pasamos la función mostrarDetalle como callback
    seccion1.appendChild(tareas(todasLasTareas, mostrarDetalle));
    seccion1.appendChild(infoCard);

    dashboard.appendChild(seccion1);
    dashboard.appendChild(footer());

    return dashboard;

  } catch (error) {
    console.log("Error:", error);
  }
}

dashboardd().then(dashboard => {
  if (dashboard) document.body.appendChild(dashboard);
});
