document.addEventListener("DOMContentLoaded", function() {
    const selectorBusqueda = document.getElementById('inputBusqueda');
    const tarjetas = document.querySelectorAll('.tarjeta');

    selectorBusqueda.addEventListener('keyup', function() {
        const textoUser = selectorBusqueda.value.toLowerCase();

        tarjetas.forEach(tarjeta => {
            // Obtenemos el nombre (h3) y el cargo (p) de la tarjeta
            const nombre = tarjeta.querySelector('h3').textContent.toLowerCase();
            const cargo = tarjeta.querySelector('p').textContent.toLowerCase();

            // Si el texto está en el nombre o en el cargo, la mostramos
            if (nombre.includes(textoUser) || cargo.includes(textoUser)) {
                tarjeta.style.display = "block";
                // Añadimos una pequeña animación de entrada
                tarjeta.style.opacity = "1";
            } else {
                tarjeta.style.display = "none";
            }
        });
    });
});