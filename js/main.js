$(function() {

    $('#crear').on('click', function() {
        var n = $('input#num_nodos').val();
        if (n == 0) alert('NO hay suficientes nodos');
        else {
            document.getElementById('crear').disabled = true;
            inactivo = true;
            crearPanel("Lienzo para dibujar grafo", "divCont", "divPanel"); //Esta funcion esta en dinamicos.js
            crearCanvas(); //Esta función esta en Grafo.js
        }
    });


});