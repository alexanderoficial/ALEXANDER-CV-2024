// Seleccionar el contenedor completo
const botonesMax = document.getElementById("botones-max");

// Botón para cerrar (ocultar)
const cerrarBAR = document.getElementById("cerrar-bar");
cerrarBAR.addEventListener("click", function() {
    botonesMax.style.display = "none";
});

// Botón para mostrar/ocultar
const mostrarBTNT = document.getElementById("mostrarBTNT");
mostrarBTNT.addEventListener("click", function() {
    // Alternar entre mostrar y ocultar el contenedor
    if (botonesMax.style.display === "none" ||
         botonesMax.style.display === "none") 
         {
        botonesMax.style.display = "flex";
    } else {
        botonesMax.style.display = "none";
    }
});
