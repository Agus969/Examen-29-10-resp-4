document.addEventListener("DOMContentLoaded", () => {
    cargarNumeros();

    document.getElementById("agregar").addEventListener("click", () => {
        const nuevoNumero = document.getElementById("nuevoNumero").value;
        if (nuevoNumero) {
            agregarNumero(nuevoNumero);
            document.getElementById("nuevoNumero").value = ""; // Limpiar el campo
        }
    });

    document.getElementById("resetear").addEventListener("click", () => {
        resetearRegistro();
        cargarNumeros();
    });
});

function agregarNumero(numero) {
    fetch('agregar.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `numero=${numero}`
    }).then(cargarNumeros);
}

function cargarNumeros() {
    fetch('cargar.php')
        .then(response => response.json())
        .then(data => {
            const listaNumeros = document.getElementById("listaNumeros");
            listaNumeros.innerHTML = ""; // Limpiar lista antes de añadir
            data.forEach(numero => {
                const li = document.createElement("li");
                li.textContent = numero;
                li.className = "list-group-item";
                listaNumeros.appendChild(li);
            });
        });
}
