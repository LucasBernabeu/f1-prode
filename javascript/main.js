document.addEventListener('DOMContentLoaded', function() {
    var publicSpreadsheetUrl = 'URL_DE_TU_HOJA_DE_CALCULO_PUBLICADA';

    Tabletop.init({
        key: publicSpreadsheetUrl,
        simpleSheet: true,
        callback: function(data) {
            var puntajesTotales = calcularPuntajesTotales(data);
            actualizarTablaPuntajes(puntajesTotales);
        }
    });
});

function calcularPuntajesTotales(data) {
    return data.map(function(participante) {
        var total = 0;
        for (var i = 1; i <= 24; i++) {
            total += parseInt(participante['Carrera ' + i]) || 0;
        }
        return {
            nombre: participante.Participante,
            puntajeTotal: total
        };
    });
}

function actualizarTablaPuntajes(puntajes) {
    var tbody = document.querySelector('.score-table tbody');
    tbody.innerHTML = ''; // Limpiar contenido existente

    puntajes.forEach(function(participante) {
        var fila = document.createElement('tr');
        var celdaNombre = document.createElement('td');
        var celdaPuntaje = document.createElement('td');

        celdaNombre.textContent = participante.nombre;
        celdaPuntaje.textContent = participante.puntajeTotal;

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaPuntaje);
        tbody.appendChild(fila);
    });
}
