import { tarea } from "../../modules/tareas/itemTarea.js";

export function tareasComponents(tareas, infoCard) {
  const contenedor = document.createElement('div');
  contenedor.className = "div-tareas";

  function actualizarContadorPendientes() {
    const pendientes = tareas.filter(t => t.estado?.toLowerCase() === "pendiente");
    const contador = document.getElementById("contador-pendientes");
    if (contador) {
      contador.textContent = pendientes.length;
    }
  }

  function eliminarTarea(indiceAEliminar) {
    let tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareasGuardadas = tareasGuardadas.filter(t => t.indice !== indiceAEliminar);

    // Reasignar índices (evita duplicados y problemas con los fijos)
    tareasGuardadas = tareasGuardadas.map((t, i) => {
      t.indice = i + 3;
      return t;
    });

    localStorage.setItem("tareas", JSON.stringify(tareasGuardadas));

    // Reconstruir la lista desde cero
    contenedor.innerHTML = "";
    const tareasActualizadas = [
      { indice: 1, titulo: "Tarea fija 1", estado: "pendiente", fechaAs: "", fechaEn: "", integrantes: [], horaCreacion: "", fechaCreacion: "" },
      { indice: 2, titulo: "Tarea fija 2", estado: "completado", fechaAs: "", fechaEn: "", integrantes: [], horaCreacion: "", fechaCreacion: "" },
      ...tareasGuardadas
    ];

    tareasActualizadas.forEach((t) => {
      const filaTarea = tarea(
        t.indice,
        t.titulo,
        t.estado,
        t.fechaAs,
        t.fechaEn,
        t.integrantes,
        t.horaCreacion,
        t.fechaCreacion,
        eliminarTarea
      );

      filaTarea.addEventListener("click", () => {
        actualizarInformacion(infoCard, t);
      });

      contenedor.appendChild(filaTarea);
    });

    // Actualiza el contador después de reconstruir
    tareas = tareasActualizadas;
    actualizarContadorPendientes();
  }

  // Renderizar las tareas iniciales
  tareas.forEach((t) => {
    const filaTarea = tarea(
      t.indice,
      t.titulo,
      t.estado,
      t.fechaAs,
      t.fechaEn,
      t.integrantes,
      t.horaCreacion,
      t.fechaCreacion,
      eliminarTarea
    );

    filaTarea.addEventListener("click", () => {
      actualizarInformacion(infoCard, t);
    });

    contenedor.appendChild(filaTarea);
  });

  // Mostrar contador inicial
  actualizarContadorPendientes();

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
