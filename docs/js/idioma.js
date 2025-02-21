document.addEventListener("DOMContentLoaded", function () {
    const selector = document.getElementById("selector-idioma");
    const cambiarIdioma = (idioma) => {
        fetch(`json/${idioma}.json`)
            .then(response => response.json())
            .then(data => {
                document.querySelector("h1").innerText = data.titulo;
                document.querySelector("#publicidad-container h2").innerText = data.publicidad;
                localStorage.setItem("idioma", idioma); // Guardar idioma en localStorage
            })
            .catch(error => console.error("Error al cargar idioma:", error));
    };

    selector.addEventListener("change", (event) => {
        cambiarIdioma(event.target.value);
    });

    // Cargar idioma guardado
    const idiomaGuardado = localStorage.getItem("idioma") || "es";
    selector.value = idiomaGuardado;
    cambiarIdioma(idiomaGuardado);
});
