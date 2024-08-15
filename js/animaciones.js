document.addEventListener("DOMContentLoaded", function() {
    const contenedor = document.querySelector(".previo");
    const numBolas = 4;

    for (let i = 1; i < numBolas; i++) {
        const bola = document.createElement("span");
        bola.classList.add("bolas");
        contenedor.appendChild(bola);
    }

    const bolas = document.querySelectorAll(".bolas");

    bolas.forEach((bola) => {
      
        let x = Math.random() * (contenedor.clientWidth - bola.clientWidth);
        let y = Math.random() * (contenedor.clientHeight - bola.clientHeight);
        let velX = (Math.random() - 0.5) * 2;
        let velY = (Math.random() - 0.5) * 2;

        
        bola.style.left = `${x}px`;
        bola.style.top = `${y}px`;

        
        function moverBola() {
            x += velX;
            y += velY;

            
            if (x <= 0 || x >= contenedor.clientWidth - bola.clientWidth) {
                velX *= -1;
            }
            if (y <= 0 || y >= contenedor.clientHeight - bola.clientHeight) {
                velY *= -1;
            }

            bola.style.left = `${x}px`;
            bola.style.top = `${y}px`;

            requestAnimationFrame(moverBola);
        }

        
        moverBola();
    });
});