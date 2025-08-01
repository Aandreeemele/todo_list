import { footer } from "../components/footer/footercomponents.js";
import { header } from "../components/header/headercomponents.js";
import { tareasComponents } from "../components/tareas/tareasComponents.js";
import { informacion } from "../components/informacion/informacionComponents.js"; 

// ✅ Datos 
export const tareasAS = [
  {
    indice: 1,
    titulo: "Tarea Medio ambiente",
    descripcion: "Investigar sobre la contaminación del aire y sus efectos.",
    estado: "pendiente",
    fechaAs: "30/07/2025",
    fechaEn: "01/08/2025",
    integrantes: ["🙂", "😐"]
  },
  {
    indice: 2,
    titulo: "Tarea Ecosistemas",
    descripcion: "Realizar un mapa de los ecosistemas locales.",
    estado: "completado",
    fechaAs: "28/07/2025",
    fechaEn: "31/07/2025",
    integrantes: ["🙂", "😐"]
  }
];

export function dashboardd() {
    const dashboard = document.createElement('section');
    dashboard.className = "dashboard";
    dashboard.appendChild(header());
  
    const seccion1 = document.createElement('section');
    seccion1.className = "seccion-1";
    const infoCard = informacion(tareasAS[0]);
    seccion1.appendChild(tareasComponents(tareasAS, infoCard)); 
    seccion1.appendChild(infoCard); 
  
    dashboard.appendChild(seccion1);
    dashboard.appendChild(footer());
  
    return dashboard;
  }
  
  document.body.appendChild(dashboardd());
  
document.body.appendChild(dashboardd());
