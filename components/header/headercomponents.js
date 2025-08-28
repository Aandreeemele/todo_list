// header.js
export function header() {
  let header = document.createElement('header');

  let h1 = document.createElement('h1');
  h1.className = "Titulo";
  h1.innerText = "✏️Todo-list";
  header.appendChild(h1);

  // Contador de pendientes
  let divTareas = document.createElement('div');
  divTareas.className = "div-ttareas";
  divTareas.id = "contador-pendientes";
  divTareas.innerText = "9";
  header.appendChild(divTareas);

  // Contenedor de nombres de tareas pendientes
  let listaPendientes = document.createElement('div');
  listaPendientes.id = "lista-pendientes";
  listaPendientes.className = "lista-pendientes";
  header.appendChild(listaPendientes);

  let divLogoUsuario = document.createElement('div');
  divLogoUsuario.className = "div-Logo-Usuario";
  let img = document.createElement('img');
  img.src = "https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png";
  img.alt = "Logo de usuario";
  img.className = "logo-usuario";
  divLogoUsuario.appendChild(img);
  header.appendChild(divLogoUsuario);

  let divTareas1 = document.createElement('div');
  divTareas1.className = "div-pendientes";
  divTareas1.innerText = "𝚃𝚊𝚛𝚎𝚊𝚜 𝙿𝚎𝚗𝚍𝚒𝚎𝚗𝚝𝚎𝚜";
  header.appendChild(divTareas1);

  let divUsuario = document.createElement('div');
  divUsuario.className = "div-Usuario";
  divUsuario.innerText = "𝚄𝚜𝚞𝚊𝚛𝚒𝚘";
  header.appendChild(divUsuario);

  return header;
}

// Función para actualizar pendientes y mostrarlos
export function actualizarPendientes(TareasDB) {
  const contador = document.getElementById("contador-pendientes");
  const lista = document.getElementById("lista-pendientes");
  if (!contador || !lista) return;

  // Filtrar pendientes
  const pendientes = TareasDB.filter(t => t.estado_tarea.toLowerCase() === "pendiente");
  contador.innerText = pendientes.length;

  // Limpiar lista anterior
  lista.innerHTML = "";

  // Agregar cada pendiente como un elemento
  pendientes.forEach(t => {
    let span = document.createElement('span');
    span.className = "pendiente-item";
    span.textContent = t.nombre;
    lista.appendChild(span);
  });
}
