import { formulario } from "../formulario/formularioComponents.js";
export function informacion(tarea) {
    let div = document.createElement('div');
    div.className = "div-info";

    // Botones
    let divBotones = document.createElement('div');
    divBotones.className = "info-botones";

    let btnTarea = document.createElement('button');
    btnTarea.textContent = "+ tarea";
    btnTarea.className = "btn-tarea";
    
    btnTarea.addEventListener("click", formulario);

    let btnArchivados = document.createElement('button');
    btnArchivados.textContent = "Archivados";
    btnArchivados.className = "btn-archivados";

    divBotones.appendChild(btnTarea);
    divBotones.appendChild(btnArchivados);
    div.appendChild(divBotones);

    // Card
    let card = document.createElement('div');
    card.className = "info-card";

    // Estado
    let estado = document.createElement('span');
    estado.className = "info-estado";
    estado.textContent = tarea.estado;

    // Título
    let titulo = document.createElement('h3');
    titulo.className = "info-titulo";
    titulo.textContent = tarea.titulo;

    // Descripción
    let descripcion = document.createElement('p');
    descripcion.className = "info-desc";
    descripcion.textContent = tarea.descripcion;

    // Subtítulo de integrantes
    let subtitulo = document.createElement('h4');
    subtitulo.className = "info-subtitulo";
    subtitulo.textContent = "Integrantes";

    // Emojis de integrantes
    let emojis = document.createElement('div');
    emojis.className = "info-emojis";
    tarea.integrantes.forEach(emoji => {
    let span = document.createElement('span');
    span.textContent = emoji;
    emojis.appendChild(span);
    });
    // Hora de creación (si existe)
    if (tarea.horaCreacion && tarea.fechaCreacion) {
    let hora = document.createElement('p');
    hora.className = "info-hora";
    hora.textContent = `Subido el ${tarea.fechaCreacion} a las ${tarea.horaCreacion}`;
    card.appendChild(hora);
    }


    
    card.appendChild(estado);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(subtitulo);
    card.appendChild(emojis);
    

    div.appendChild(card);

    return div;
}
