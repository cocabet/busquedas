var context;
var ctrNodos = false;
var Opera = true;
var ctrVer = 0;
var numNodos;
var inactivo = false;
var posi = 0;

var vertics = new Array();
var coordenas = new Array();
var Vert = new Array();

elemento = document.getElementById('myCanvas');
context = elemento.getContext('2d');

context.beginPath();
for (var i = 0; i <= 500; i += 20) {
    context.moveTo(i, 0);
    context.lineTo(i, 400);
}
for (var i = 0; i <= 400; i += 20) {
    context.moveTo(0, i);
    context.lineTo(500, i);
}

context.strokeStyle = "#4B4949";
context.closePath();
context.stroke();

function crearNodos(x, y) {
    context.closePath();
    var punto = {
        px: x,
        py: y
    };
    coordenas.push(punto);

    context.beginPath();
    context.arc(x, y, 20, 0, Math.PI * 2, true);
    context.fillStyle = "#4340B3";
    context.fill();
    context.closePath();

    console.log(coordenas.length);
}