export function formulario() {
    const integrantesClase = ["🙂", "😐", "😀", "👩‍💻", "🧑‍🎓"];

    const fondo = document.createElement("div");
    fondo.className = "modal-fondo";

    const contenedor = document.createElement("div");
    contenedor.className = "modal-contenedor";

    // Crear inputs de integrantes con checkboxes
    const integrantesHTML = integrantesClase.map((emoji, i) => `
        <label style="display:flex; align-items:center; gap: 5px;">
            <input type="checkbox" name="integrantes" value="${emoji}">
            <span>${emoji}</span>
        </label>
    `).join('');

    contenedor.innerHTML = `
        <h2>Crear nueva tarea</h2>
        <form id="form-tarea" class="form-grid">
            <label>Título:<input type="text" name="titulo" required></label>
            <label>Descripción:<textarea name="descripcion" required></textarea></label>
            <label>Fecha de asignación:<input type="date" name="fechaAs" required></label>
            <label>Fecha de entrega:<input type="date" name="fechaEn" required></label>
            <fieldset>
                <legend>Integrantes (selecciona)</legend>
                <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(40px, 1fr)); gap: 5px;">
                    ${integrantesHTML}
                </div>
            </fieldset>
            <div class="acciones">
                <button type="submit">Guardar</button>
                <button type="button" id="cerrar-modal">Cancelar</button>
            </div>
        </form>
    `;

    fondo.appendChild(contenedor);
    document.body.appendChild(fondo);

    document.getElementById("cerrar-modal").onclick = () => {
        document.body.removeChild(fondo);
    };

    document.getElementById("form-tarea").onsubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        // Obtener título, descripción, fechas
        const datos = {
            titulo: formData.get('titulo'),
            descripcion: formData.get('descripcion'),
            fechaAs: formData.get('fechaAs'),
            fechaEn: formData.get('fechaEn'),
            estado: "pendiente"
        };

        // Obtener integrantes seleccionados (array)
        datos.integrantes = formData.getAll('integrantes');

        // Fecha y hora actual
        const ahora = new Date();
        datos.horaCreacion = ahora.toLocaleTimeString();
        datos.fechaCreacion = ahora.toLocaleDateString();

        // Guardar tareas
        const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
        datos.indice = tareas.length + 3; // Ajustar según tus tareas fijas
        tareas.push(datos);
        localStorage.setItem("tareas", JSON.stringify(tareas));

        // En tu función informacion(tarea)
let fechaHoraCreacion = document.createElement('p');
fechaHoraCreacion.className = "info-fecha-hora";
fechaHoraCreacion.textContent = `Creada: ${tarea.fechaCreacion || ''} ${tarea.horaCreacion || ''}`;
card.appendChild(fechaHoraCreacion);


        alert(`¡Tarea guardada! Hora: ${datos.horaCreacion}`);
        document.body.removeChild(fondo);
        location.reload();
    };
}
