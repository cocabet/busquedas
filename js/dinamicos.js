function crearPanel(titulo, idPanel, idBody) {
    var divHead = document.getElementById(idPanel);

    var divPanel = document.createElement('div');
    divPanel.setAttribute('class', 'panel panel-primary');

    var divH = document.createElement('div');
    divH.setAttribute('class', 'panel panel-heading');
    var node = document.createTextNode(titulo);
    divH.appendChild(node);
    divPanel.appendChild(divH);

    var divB = document.createElement('div');
    divB.setAttribute('class', 'panel panel-body');
    divB.setAttribute('id', idBody);
    divPanel.appendChild(divB);
    divHead.appendChild(divPanel);
}