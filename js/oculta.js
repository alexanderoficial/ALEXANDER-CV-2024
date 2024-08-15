const botonAN= document.getElementById('mostrar-barra');
const barraAN = document.getElementById('barra-android');
botonAN.addEventListener('click', function(event) {
     event.preventDefault();
     if (barraAN.style.display === 'block') {
         barraAN.style.display = 'none';
     } else {
         barraAN.style.display = 'block';
     }
 });
 
const botonVI= document.getElementById('mostrar-barra');
const cerrartodo = document.getElementById('cerrar-todo');
const cerrarTO = document.getElementById('barra-android');
const tamano= document.getElementById('container-previo');
cerrartodo.addEventListener('click', function(event) {
  event.preventDefault();
      if (cerrarTO.style.display === 'none') {
          cerrarTO.style.display = 'block';
          
         } 
   
   else {
        cerrarTO.style.display = 'none';
        botonVI.style.display = 'block';
        tamano.style.width = '100%';
        
       }
   });
