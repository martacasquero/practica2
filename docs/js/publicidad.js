document.addEventListener("DOMContentLoaded", function () {
    fetch('https://dummyjson.com/products/1') // Producto de prueba, se puede cambiar dinámicamente
        .then(response => response.json())
        .then(product => {
            document.getElementById("publicidad").innerHTML = `
                <div class="product-card">
                    <h3>${product.title}</h3>
                    <img src="${product.thumbnail}" alt="${product.title}" style="width:100px;">
                    <p>${product.description}</p>
                    <p>Precio: $${product.price}</p>
                    <a href="${product.link}" target="_blank">Ver Producto</a>
                </div>
            `;
        })
        .catch(error => console.error("Error al cargar publicidad:", error));
});
