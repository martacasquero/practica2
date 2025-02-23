 document.addEventListener("DOMContentLoaded", function() {
     fetch("https://github.com/martacasquero/practica2/blob/main/docs/footer.html")  //obtengo el contenido de lo que contiene footer.html 
        .then(response => response.text())   // con esta linea convierto el contenido en texto plano 
        .then(data => {
             document.body.insertAdjacentHTML("beforeend", data);// inserto el contenido antes d que se termine el html 
        })
        .catch(error => console.error("Error al cargar el footer:", error));  
});
