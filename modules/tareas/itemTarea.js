export function tarea(indice, titulo, estado, fechaAs, fechaEn, listaIntegrantes, horaCreacion, fechaCreacion, onEliminar) {
    const div = document.createElement('div');
    div.className = 'fila-tarea';

    // Índice
    const spanIndice = document.createElement('span');
    spanIndice.className = 'circulo-indice';
    spanIndice.textContent = indice;

    // Título
    const spanTitulo = document.createElement('span');
    spanTitulo.className = 'titulo-tarea';
    spanTitulo.textContent = titulo;

    // Estado con estilos
    const spanEstado = document.createElement('span');
    spanEstado.className = 'estado-tarea';

    const estadoSeguro = (estado || '').toLowerCase();
    spanEstado.textContent = estadoSeguro || 'desconocido';

    switch (estadoSeguro) {
        case 'completado':
            spanEstado.classList.add('estado-verde');
            break;
        case 'pendiente':
            spanEstado.classList.add('estado-rojo');
            break;
        case 'en progreso':
            spanEstado.classList.add('estado-amarillo');
            break;
        default:
            spanEstado.classList.add('estado-default');
    }

    // Fechas
    const spanFechaAs = document.createElement('span');
    spanFechaAs.className = 'fecha-tarea';
    spanFechaAs.textContent = fechaAs;

    const spanFechaEn = document.createElement('span');
    spanFechaEn.className = 'fecha-tarea';
    spanFechaEn.textContent = fechaEn;

    // Hora y fecha de creación
    const spanHoraCreacion = document.createElement('span');
    spanHoraCreacion.className = 'hora-creacion';
    spanHoraCreacion.textContent = horaCreacion && fechaCreacion ? `🕒 ${fechaCreacion} ${horaCreacion}` : '';

    // Integrantes
    const divIntegrantes = document.createElement('div');
    divIntegrantes.className = 'integrantes';

    if (Array.isArray(listaIntegrantes)) {
        listaIntegrantes.forEach((emoji) => {
            const span = document.createElement('span');
            span.className = 'emoji-integrante';
            span.textContent = emoji;
            divIntegrantes.appendChild(span);
        });
    }

    // Botón eliminar
    const botonEliminar = document.createElement('button');
    botonEliminar.className = 'boton-eliminar';
    botonEliminar.textContent = '❌';

    // Evento eliminar
    botonEliminar.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que dispare otros eventos
        if (confirm(`¿Eliminar la tarea "${titulo}"?`)) {
            onEliminar(indice);
            div.remove();
        }
    });

    // Ensamblar fila
    div.appendChild(spanIndice);
    div.appendChild(spanTitulo);
    div.appendChild(spanEstado);
    div.appendChild(spanFechaAs);
    div.appendChild(spanFechaEn);
    div.appendChild(spanHoraCreacion);  // <-- Aquí la hora
    div.appendChild(divIntegrantes);
    div.appendChild(botonEliminar);

    return div;
}
