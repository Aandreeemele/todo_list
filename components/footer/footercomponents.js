export function footer() {
    // Crear el elemento <footer>
    const footer = document.createElement('footer');

    // Línea separadora
    const hr = document.createElement('hr');
    footer.appendChild(hr);

    // Contenedor principal del contenido
    const divContenido = document.createElement('div');
    divContenido.className = 'footer-contenido';

    // Texto vacío (puede usarse para espaciar o alinear)
    const spanVacio = document.createElement('span');
    divContenido.appendChild(spanVacio);

    // Enlace a GitHub
    const enlace = document.createElement('a');
    enlace.className = 'footer-github';
    enlace.href = 'https://github.com/Aandreeemele/todo_list'; // Cambia esta URL por la tuya
    enlace.innerText = '@github';
    enlace.target = '_blank'; // Abre en nueva pestaña
    divContenido.appendChild(enlace);

    // Agrega el div al footer
    footer.appendChild(divContenido);

    return footer;
}
