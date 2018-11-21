function crearCanvas() {
    var lar = 500;
    var anc = 400;

    var canvasDiv = document.getElementById('divPanel'); //Obtenemos el id del panel donde ira el lienzo
    var canvas = document.createElement('canvas');
    canvas.setAttribute('width', lar);
    canvas.setAttribute('height', anc);
    canvas.setAttribute('id', 'canvas');
    canvas.setAttribute('onclick', 'Coords(event)'); //Cuando damos un click sobre el área llamamos 
    canvasDiv.appendChild(canvas); //a la funcion Coords(event) para obtener X,Y y hacer nodos y vertices

    elemento = document.getElementById('canvas');
    context = elemento.getContext('2d');

    context.beginPath();
    for (var i = 0; i <= lar; i += 20) {
        context.moveTo(i, 0);
        context.lineTo(i, anc);
    }
    for (var i = 0; i <= anc; i += 20) {
        context.moveTo(0, i);
        context.lineTo(lar, i);
    }
    /*Hizo una cosa muy chida
    for (var i = 0; i < 500; i+=10) {
    	context.moveTo(0,i);
    	context.lineTo(i,400);
    }*/
    context.strokeStyle = "#4B4949";
    context.closePath();
    context.stroke();
}