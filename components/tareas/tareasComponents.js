import { tarea } from "../../modules/tareas/itemTarea.js";
export function tareasComponents(tareas, infoCard) {
  const contenedor = document.createElement('div');
  contenedor.className = "div-tareas";

  tareas.forEach((t) => {
    const filaTarea = tarea(t.indice, t.titulo, t.estado, t.fechaAs, t.fechaEn, t.integrantes);
    filaTarea.addEventListener("click", () => {
      actualizarInformacion(infoCard, t);
    });

    contenedor.appendChild(filaTarea);
  });

  return contenedor;
}

function actualizarInformacion(infoCard, tarea) {
  infoCard.querySelector(".info-estado").textContent = tarea.estado;
  infoCard.querySelector(".info-titulo").textContent = tarea.titulo;
  infoCard.querySelector(".info-desc").textContent = tarea.descripcion;

  const contenedorEmojis = infoCard.querySelector(".info-emojis");
  contenedorEmojis.innerHTML = "";
  tarea.integrantes.forEach(emoji => {
    const span = document.createElement("span");
    span.textContent = emoji;
    contenedorEmojis.appendChild(span);
  });
}
