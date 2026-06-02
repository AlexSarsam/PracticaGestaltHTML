window.addEventListener('scroll', function () {
  var secciones = document.querySelectorAll('.reveal');

  secciones.forEach(function (seccion) {
    var posicion = seccion.getBoundingClientRect().top;
    if (posicion < window.innerHeight - 100) {
      seccion.classList.add('visible');
    }
  });
});
