$(function() {

    $('#myCanvas').on('click', function(event) {
        var x = document.getElementById("crearNodos").disabled;
        console.log(x);
        if (x == false) {
            alert('Necesitas precionar el boton dibujar nodos');
        } else {
            var x1 = event.offsetX;
            var y1 = event.offsetY;
            console.log(x1 + " " + y1)
            crearNodos(x1, y1);
        }
    });

    $('#crearNodos').on('click', function() {
        document.getElementById("crearNodos").disabled = true;
    });

});