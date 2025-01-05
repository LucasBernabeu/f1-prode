document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const btnMenu = document.getElementById('btnMenu');
    const menuLateral = document.getElementById('menuLateral');
    const contenedorPrincipal = document.getElementById('contenedorPrincipal');
    const form = document.getElementById('puntajesForm');
    const puntajeLucas = document.getElementById('puntajeLucas');
    const puntajePablo = document.getElementById('puntajePablo');

    // Función para abrir y cerrar el menú lateral
    btnMenu.addEventListener('click', function() {
        menuLateral.classList.toggle('open');
        contenedorPrincipal.classList.toggle('open');
    });

    // Cargar puntajes desde el almacenamiento local
    function cargarPuntajes() {
        const lucasPuntajes = JSON.parse(localStorage.getItem('lucasPuntajes')) || [];
        const pabloPuntajes = JSON.parse(localStorage.getItem('pabloPuntajes')) || [];

        const totalLucas = lucasPuntajes.reduce((acc, puntaje) => acc + puntaje, 0);
        const totalPablo = pabloPuntajes.reduce((acc, puntaje) => acc + puntaje, 0);

        puntajeLucas.textContent = totalLucas;
        puntajePablo.textContent = totalPablo;
    }

    // Guardar puntajes en el almacenamiento local
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const lucasPuntajes = document.getElementById('lucas').value.split(',').map(Number);
        const pabloPuntajes = document.getElementById('pablo').value.split(',').map(Number);

        if (lucasPuntajes.length === 24 && pabloPuntajes.length === 24) {
            localStorage.setItem('lucasPuntajes', JSON.stringify(lucasPuntajes));
            localStorage.setItem('pabloPuntajes', JSON.stringify(pabloPuntajes));
            alert('Puntajes guardados exitosamente.');
            cargarPuntajes();
        } else {
            alert('Por favor, ingrese exactamente 24 puntajes para cada participante.');
        }
    });

    // Inicializar la carga de puntajes al cargar la página
    cargarPuntajes();
});
