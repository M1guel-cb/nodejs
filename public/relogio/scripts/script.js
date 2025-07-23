var horas = document.getElementById('horas');
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    var hoje = new Date();
    var hr = hoje.getHours();
    var min = hoje.getMinutes();
    var seg = hoje.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (seg < 10) seg = '0' + seg;

    horas.innerHTML = hr;
    minutos.innerHTML = min;
    segundos.innerHTML = seg;
})