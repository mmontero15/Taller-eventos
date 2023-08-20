document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.body;
    const div = document.getElementById("Div");
    const boton = document.getElementById("btn-saludar");

    contenedor.addEventListener('click', function(event) {
        if (event.target === boton) {
            alert("Hola!");
        } else if (event.target === div) {
            alert("Hola! Soy el div");
        }
    });
});