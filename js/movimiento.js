
document.addEventListener('DOMContentLoaded', function() { 
    const barra = document.getElementById('botones-max');
    let lastScrollTop = 0;
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (window.innerWidth <= 1023) {
            if (scrollTop > lastScrollTop) {
              
                barra.style.transform = 'translateY(100%)'; 
            } else {

                barra.style.transform = 'translateY(0)'; 
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
        } else {
            // Si el tamaño de la pantalla es mayor a 1023px, asegúrate de que la barra sea visible
            barra.style.transform = 'translateY(0)';
        }
    }
    window.addEventListener('scroll', handleScroll);
});

