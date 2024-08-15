document.addEventListener('DOMContentLoaded', (event) => {
    const carruselItems = document.querySelectorAll('.carrusel');
    const vistaComentariosImg = document.querySelector('.vista-comentarios .comentarios-img img');
    const vistaComentariosName = document.querySelector('.vista-comentarios .comentarios-img h3');
    const vistaComentariosRole = document.querySelector('.vista-comentarios .comentarios-img p');
    const buttonPrev = document.getElementById('comen-buton1');
    const buttonNext = document.getElementById('comen-buton2');
    let currentIndex = 0;

    function updateVista(index) {
        const activeItem = carruselItems[index];
        const img = activeItem.querySelector('img').src;
        const name = activeItem.querySelector('h3').innerText;
        const role = activeItem.querySelector('p').innerText;

        vistaComentariosImg.src = img;
        vistaComentariosName.innerText = name;
        vistaComentariosRole.innerText = role;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % carruselItems.length;
        updateVista(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + carruselItems.length) % carruselItems.length;
        updateVista(currentIndex);
    }

    buttonNext.addEventListener('click', showNext);
    buttonPrev.addEventListener('click', showPrev);

    
    updateVista(currentIndex);
});