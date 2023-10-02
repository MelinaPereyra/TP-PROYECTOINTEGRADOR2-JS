document.addEventListener("DOMContentLoaded", () => {
  const gridVideojuegos = document.getElementById("grid-videojuegos");

  function mostrarVideojuegos(videojuegos) {
    gridVideojuegos.innerHTML = ""; // Limpiamos el contenido actual
    videojuegos.forEach((videojuego) => {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.style.backgroundImage = `url(${videojuego.imagen})`;
      gridItem.style.backgroundPosition = "center center";
      gridItem.style.backgroundSize = "cover";

      gridItem.innerHTML = `<div class="container text-center">
        <div class="row row-cols-1">
          <div class="col"><b>${videojuego.nombre}</b> <br> <p>${videojuego.descripcion}</p></div>
        </div>
      </div>`;

      gridItem.addEventListener("click", () => {
        mostrarDetallesVideojuego(videojuego);
      });

      gridVideojuegos.appendChild(gridItem);
    });
  }

  // Usar fetch para obtener datos de videojuegos desde un archivo JSON
  fetch("./videojuegos.json")
    .then((response) => response.json())
    .then((datosVideojuegos) => {
      if (datosVideojuegos) {
        mostrarVideojuegos(datosVideojuegos.videojuegos);
      }

      // Agregar un evento de escucha al campo de búsqueda
      const inputBusqueda = document.querySelector('input[type="search"]');
      inputBusqueda.addEventListener("input", () => {
        const terminoBusqueda = inputBusqueda.value.toLowerCase();
        const videojuegosFiltrados = datosVideojuegos.videojuegos.filter((videojuego) =>
          videojuego.nombre.toLowerCase().includes(terminoBusqueda)
        );
        mostrarVideojuegos(videojuegosFiltrados);
      });
    });

  function mostrarDetallesVideojuego(videojuego) {
    window.location.href = `./videojuegos.html?id=${videojuego.id}`;
  }
});
