document.addEventListener('DOMContentLoaded', function() {
   const btnMostrar = document.getElementById('btn-mostrar-uno');
const subBarra = document.getElementById('sub-barra-uno');
const iconUNO = document.getElementById('iconn');

btnMostrar.addEventListener('click', function(event) {
    event.preventDefault();
    if (subBarra.style.display === 'block') {
        subBarra.style.display = 'none';
    } else {
        subBarra.style.display = 'block';
    }

    if (iconUNO.style.transform === 'rotate(-180deg)') {
        iconUNO.style.transform = 'rotate(0deg)';
    } else {
        iconUNO.style.transform = 'rotate(-180deg)';
    }
});
      
   const Mostrardos = document.getElementById('btn-mostrar-dos');
   const Barrados = document.getElementById('sub-barra-dos');
   const iconDOS = document.getElementById('iconnn');
    Mostrardos.addEventListener('click', function(event) {
        event.preventDefault();
        if (Barrados.style.display === 'block') {
            Barrados.style.display = 'none';
             } 
        else {
            Barrados.style.display = 'block';
           }
        if (iconDOS.style.transform === 'rotate(-180deg)') {
        iconDOS.style.transform = 'rotate(0deg)';
            }
      else {
        iconDOS.style.transform = 'rotate(-180deg)';
    }
 });
    
    
   
document.getElementById('experiencia-previo')
.addEventListener('click', function() {
    const experiencia = document.getElementById('experiencia');
    experiencia.style.display = 'flex'; 
    experiencia.classList.remove('salida');
    
});

const cerrarVIS = document.getElementById('experiencia');
const cerrarvistas = document.getElementById('cerrar-vistas');
cerrarvistas.addEventListener('click', function(event) {
    event.preventDefault();
    
    cerrarVIS.classList.add('salida');
    setTimeout(function() {
        cerrarVIS.style.display = 'none';
        
    }, 400); 
});
    
  const mostrarASER= document.getElementById('acercademi');
  const clickASER= document.getElementById('acerca-previo');
   clickASER.addEventListener('click', function(event) {
        event.preventDefault();
        if (mostrarASER.style.display === 'flex') {
            mostrarASER.style.display = 'none';
        } else {
            mostrarASER.style.display = 'flex';
        }
});
    
  const vistaacerca = document.getElementById('acercademi');
  const cerrarAcerca = document.getElementById('cerrar-acerca');

 cerrarAcerca.addEventListener('click', function(event) {
    event.preventDefault();
    
    vistaacerca.classList.add('salida');
    setTimeout(function() {
        vistaacerca.style.display = 'none';
         vistaacerca.classList.remove('salida'); 
       }, 400); 
});


const mostrarEDU= document.getElementById('educacion');
const clickEDU= document.getElementById('educacion-previo');
   clickEDU.addEventListener('click', function(event) {
        event.preventDefault();
        if (mostrarEDU.style.display === 'flex') {
            mostrarEDU.style.display = 'none';
        } else {
            mostrarEDU.style.display = 'flex';
        }
});


const vistaEDU = document.getElementById('educacion');
  const cerrarEDU = document.getElementById('cerrar-educacion');

 cerrarEDU.addEventListener('click', function(event) {
    event.preventDefault();
    
    vistaEDU.classList.add('salida');
    setTimeout(function() {
        vistaEDU.style.display = 'none';
         vistaEDU.classList.remove('salida'); 
       }, 400); 
});

const mostrarPROY= document.getElementById('proyectos-web');
const clickPROY= document.getElementById('proyectos-previo');
   clickPROY.addEventListener('click', function(event) {
        event.preventDefault();
        if (mostrarPROY.style.display === 'flex') {
            mostrarPROY.style.display = 'none';
        } else {
            mostrarPROY.style.display = 'flex';
        }
});

const vistaPROY = document.getElementById('proyectos-web');
const cerrarPROY= document.getElementById('cerrar-proyectos');

 cerrarPROY.addEventListener('click', function(event) {
    event.preventDefault();
    
    vistaPROY.classList.add('salida');
    setTimeout(function() {
        vistaPROY.style.display = 'none';
         vistaPROY.classList.remove('salida'); 
       }, 400); 
});

/* DISEÑO GRÁFICO JS OCULTAR*/
const mostrarDI= document.getElementById('diseno-gra');
const clickDI= document.getElementById('diseno-previo');
   clickDI.addEventListener('click', function(event) {
        event.preventDefault();
        if (mostrarDI.style.display === 'flex') {
            mostrarDI.style.display = 'none';
        } else {
            mostrarDI.style.display = 'flex';
        }
});

const vistaDI = document.getElementById('diseno-gra');
const cerrarDI= document.getElementById('cerrar-diseno');

 cerrarDI.addEventListener('click', function(event) {
    event.preventDefault();
    
    vistaDI.classList.add('salida');
    setTimeout(function() {
        vistaDI.style.display = 'none';
         vistaDI.classList.remove('salida'); 
       }, 400); 
});

 
const mostrarBLOG= document.getElementById('blog');
const clickBLOG= document.getElementById('blog-previo');
   clickBLOG.addEventListener('click', function(event) {
        event.preventDefault();
        if (mostrarBLOG.style.display === 'flex') {
            mostrarBLOG.style.display = 'none';
        } else {
            mostrarBLOG.style.display = 'flex';
        }
});

const vistaBLOG = document.getElementById('blog');
const cerrarBLOG= document.getElementById('cerrar-blog');

 cerrarBLOG.addEventListener('click', function(event) {
    event.preventDefault();
    
    vistaBLOG.classList.add('salida');
    setTimeout(function() {
        vistaBLOG.style.display = 'none';
         vistaBLOG.classList.remove('salida'); 
       }, 400); 
});

 
const mostrarTES= document.getElementById('testimonio');
const clickTES= document.getElementById('testimonio-previo');
   clickTES.addEventListener('click', function(event) {
        event.preventDefault();
        if (mostrarTES.style.display === 'flex') {
            mostrarTES.style.display = 'none';
        } else {
            mostrarTES.style.display = 'flex';
        }
});

const vistaTES = document.getElementById('testimonio');
const cerrarTES= document.getElementById('cerrar-testimonio');

 cerrarTES.addEventListener('click', function(event) {
    event.preventDefault();
    
    vistaTES.classList.add('salida');
    setTimeout(function() {
        vistaTES.style.display = 'none';
         vistaTES.classList.remove('salida'); 
       }, 400); 
});
   
const mostrarTEC= document.getElementById('tecnologia');
const clickTEC= document.getElementById('tecnologia-previo');
   clickTEC.addEventListener('click', function(event) {
        event.preventDefault();
        if (mostrarTEC.style.display === 'flex') {
            mostrarTEC.style.display = 'none';
        } else {
            mostrarTEC.style.display = 'flex';
        }
});

const vistaTEC = document.getElementById('tecnologia');
const cerrarTEC= document.getElementById('cerrar-tecnologia');

 cerrarTEC.addEventListener('click', function(event) {
    event.preventDefault();
    
    vistaTEC.classList.add('salida');
    setTimeout(function() {
        vistaTEC.style.display = 'none';
         vistaTEC.classList.remove('salida'); 
       }, 400); 
});
  
  /* JS DE CONTACTO ALEXANDER */ 
   
 const mostrarCON= document.getElementById('contacto-con');
const clickCON= document.getElementById('contacto-previo');
   clickCON.addEventListener('click', function(event) {
        event.preventDefault();
        if (mostrarCON.style.display === 'flex') {
            mostrarCON.style.display = 'none';
        } else {
            mostrarCON.style.display = 'flex';
        }
});

const vistaCON = document.getElementById('contacto-con');
const cerrarCON= document.getElementById('cerrar-contacto');

 cerrarCON.addEventListener('click', function(event) {
    event.preventDefault();
    
    vistaCON.classList.add('salida');
    setTimeout(function() {
        vistaCON.style.display = 'none';
         vistaCON.classList.remove('salida'); 
       }, 400); 
});
   
});