document.addEventListener("DOMContentLoaded", () => {
    const productoForm = document.getElementById("ProductoForm");
    const productosSection = document.querySelector(".productos");

    productoForm.addEventListener("submit", (event) => {
        event.preventDefault(); 

        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre").value;
        const precio = document.getElementById("precio").value;
        const imagenUrl = document.getElementById("imagenUrl").value;

        // Crear un nuevo elemento para el producto
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");

        const imagen = document.createElement("img");
        imagen.src = imagenUrl;
        imagen.alt = nombre;

        const nombreElem = document.createElement("p");
        nombreElem.textContent = `Nombre: ${nombre}`;

        const precioElem = document.createElement("p");
        precioElem.textContent = `Precio: $${precio}`;
        // Añadir la imagen, nombre y precio al div del producto
        productoDiv.appendChild(imagen);
        productoDiv.appendChild(nombreElem);
        productoDiv.appendChild(precioElem);
        // Añadir el nuevo producto a la sección de productos
        productosSection.appendChild(productoDiv);
        // Limpiar el formulario
        productoForm.reset();
    });
    // Evento para el botón de borrar 
    const borrarCamposBtn = document.getElementById("borrarCampos");
    borrarCamposBtn.addEventListener("click", () => {
        productoForm.reset();
    });
});
