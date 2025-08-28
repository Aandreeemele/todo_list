import { formulario } from "../formulario/formularioComponents.js";

export function InfoTareas() {
    // contenedor principal
    let div = document.createElement('div');
    div.className = "div-info";

    // --- Botones superiores ---
    let divBotones = document.createElement('div');
    divBotones.className = "info-botones";

    let btnTarea = document.createElement('button');
    btnTarea.textContent = "+ Tarea";
    btnTarea.className = "btn-tarea";
    btnTarea.addEventListener("click", formulario);

    let btnArchivados = document.createElement('button');
    btnArchivados.textContent = "Archivados";
    btnArchivados.className = "btn-archivados";

    divBotones.appendChild(btnTarea);
    divBotones.appendChild(btnArchivados);
    div.appendChild(divBotones);

    // --- Contenedor del detalle ---
    let divDetalle = document.createElement('div');
    divDetalle.className = "info-detalle";
    divDetalle.textContent = "Selecciona una tarea para ver su información";
    div.appendChild(divDetalle);

    // --- Función para actualizar detalle ---
    function mostrarDetalle(tarea) {
        divDetalle.innerHTML = "";

        let detalleTitulo = document.createElement('h2');
        detalleTitulo.className = "detalle-titulo";
        detalleTitulo.textContent = tarea.nombre;

        let detalleEstado = document.createElement('p');
        detalleEstado.className = "detalle-estado";
        detalleEstado.textContent = "Estado: " + tarea.estado_tarea;

        let detalleDesc = document.createElement('p');
        detalleDesc.className = "detalle-desc";
        detalleDesc.textContent = tarea.descripcion || "Sin descripción";

        let detalleSub = document.createElement('h4');
        detalleSub.className = "detalle-sub";
        detalleSub.textContent = "Integrantes";

        let detalleEmojis = document.createElement('div');
        detalleEmojis.className = "detalle-emojis";
        if (tarea.integrantes) {
            tarea.integrantes.forEach(emoji => {
                let span = document.createElement('span');
                span.textContent = emoji;
                span.className = "emoji";
                detalleEmojis.appendChild(span);
            });
        }

        if (tarea.horaCreacion && tarea.fechaCreacion) {
            let detalleHora = document.createElement('p');
            detalleHora.className = "detalle-hora";
            detalleHora.textContent = `Subido el ${tarea.fechaCreacion} a las ${tarea.horaCreacion}`;
            divDetalle.appendChild(detalleHora);
        }

        divDetalle.appendChild(detalleTitulo);
        divDetalle.appendChild(detalleEstado);
        divDetalle.appendChild(detalleDesc);
        divDetalle.appendChild(detalleSub);
        divDetalle.appendChild(detalleEmojis);
    }

    // --- Devolvemos el div y la función ---
    return { div, mostrarDetalle };
}
