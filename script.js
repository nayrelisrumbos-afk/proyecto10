var botones = document.querySelectorAll(".pestanas button");
var contenidos = document.querySelectorAll(".contenido");

for (let i = 0; i < botones.length; i++) {
    botones[i].onclick = function() {
        
        // 1. Primero ocultamos todos y les quitamos el color
        for (let j = 0; j < botones.length; j++) {
            botones[j].classList.remove("activa");
            contenidos[j].classList.remove("activo");
        }

        // 2. Luego mostramos solo el que le hicieron clic
        botones[i].classList.add("activa");
        contenidos[i].classList.add("activo");
    }
}