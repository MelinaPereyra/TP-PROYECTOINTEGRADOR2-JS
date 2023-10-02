// Fetch para obtener y almacenar los datos en localStorage
fetch("./videojuegos.json")
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    localStorage.setItem("videojuegos", JSON.stringify(datos));
  });

// Evento que se ejecuta cuando el DOM está cargado
document.addEventListener("DOMContentLoaded", () => {
  const gridVideojuegos = document.getElementById("grid-videojuegos");
  const inputBusqueda = document.querySelector('input[type="search"]');
  let datosVideojuegos = JSON.parse(localStorage.getItem("videojuegos"));

  // Función para mostrar videojuegos
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

  // Función para mostrar detalles de un videojuego
  function mostrarDetallesVideojuego(videojuego) {
    window.location.href = `videojuegos.html?id=${videojuego.id}`;
  }

  // Evento de escucha para el campo de búsqueda
  inputBusqueda.addEventListener("input", () => {
    const terminoBusqueda = inputBusqueda.value.toLowerCase();
    if (datosVideojuegos) {
      const videojuegosFiltrados = datosVideojuegos.videojuegos.filter((videojuego) =>
        videojuego.nombre.toLowerCase().includes(terminoBusqueda)
      );
      mostrarVideojuegos(videojuegosFiltrados);
    }
  });

  // Mostrar videojuegos iniciales si ya se han cargado
  if (datosVideojuegos) {
    mostrarVideojuegos(datosVideojuegos.videojuegos);
  }
  
});
