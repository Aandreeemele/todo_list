// tareasComponents.js
import { tarea } from "../../modules/tareas/itemTarea.js"; // <--- Asegúrate de la ruta correcta
import { actualizarPendientes } from "../header/headercomponents.js";

export function tareas(TareasDB, onClickTarea) {
  let div = document.createElement('div');
  div.className = "div-tareas";

  TareasDB.forEach((e, index) => {
    let fila = tarea(
      index,
      e.nombre,
      e.estado_tarea,
      e.fecha_asignada,
      e.fecha_entrega,
      e.integrantes,
      e.horaCreacion,
      e.fechaCreacion,
      () => {} 
    );

    fila.addEventListener("click", () => onClickTarea(e));
    div.appendChild(fila);
  });

  actualizarPendientes(TareasDB);

  return div;
}
