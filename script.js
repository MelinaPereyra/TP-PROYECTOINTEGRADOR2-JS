document.addEventListener("DOMContentLoaded", () => {
  const detalleVideojuego = document.getElementById("detalle-videojuego");

  // Obtener el ID del videojuego desde la URL
  const urlParams = new URLSearchParams(window.location.search);
  const idVideojuego = urlParams.get("id");

  // Obtener los datos de los videojuegos desde el localStorage
  const datosVideojuegos = JSON.parse(localStorage.getItem("videojuegos"));

  // Buscar el videojuego por ID
  const videojuegoSeleccionado = datosVideojuegos.videojuegos.find(
    (videojuego) => videojuego.id == idVideojuego
  );

  if (videojuegoSeleccionado) {
    // Crear un elemento div para mostrar los detalles del videojuego y agregarlo al DOM
    const contenedorDetallesVideojuego = document.createElement("div");
    contenedorDetallesVideojuego.classList.add("detalles-videojuego");
    contenedorDetallesVideojuego.innerHTML = `<div class="container">
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 mx-auto">
      <div id="detalle-videojuego">
        <!-- Tu código existente aquí -->
        <h2 class="nombre">${videojuegoSeleccionado.nombre}</h2>
        <p>${videojuegoSeleccionado.descripcion}</p>
        <img class="logo fade-in img-fluid" src="${videojuegoSeleccionado.logo}" alt="logo-ff">
        <p class="lead">${videojuegoSeleccionado.fulldescripcion}</p>
        <div class="card mb-3" style="max-width: 1540px; contenedor">
        <div class="row g-0 contenedor">
          <div class="col-md-6">
          <img class="batalla img-fluid img-fluid rounded-start" src="${videojuegoSeleccionado.battle}" alt="batalla-ff">
          </div>
          <div class="col-md-6 ">
            <div class="card-body">	
             
                <p class="detalle card-text">Desarrollador: ${videojuegoSeleccionado.desarrollador}</p>
                <p class="card-text">Plataforma: ${videojuegoSeleccionado.plataforma}</p>
                <p class="card-text">Género: ${videojuegoSeleccionado.genero}</p>
                <p class="card-text">Clasificación: ${videojuegoSeleccionado.clasificacion}</p>
                <button type="button" class="btn btn-danger btn-compra"><b>OBTENER AHORA</b></button>
            </div>
          </div>
        </div>
      </div>
          <div class="embed-responsive embed-responsive-16by9">
            <iframe class="trailer embed-responsive-item" src="${videojuegoSeleccionado.trailer}" frameborder="0"></iframe>
          </div>
        </div>
        <!-- Fin de tu código existente -->
      </div>
    </div>
  </div>
</div>
`;
    // Agregar al página principal
    detalleVideojuego.appendChild(contenedorDetallesVideojuego);
  }
});
