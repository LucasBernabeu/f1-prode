document.addEventListener('DOMContentLoaded', function() {
    // Verificar si estamos en la página de puntos o en la página principal
    if (window.location.pathname.includes('puntos.html')) {
        // Página de puntos: manejar el formulario
        const form = document.getElementById('puntajesForm');
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const lucasPuntajes = document.getElementById('lucas').value.split(',').map(Number);
            const pabloPuntajes = document.getElementById('pablo').value.split(',').map(Number);

            if (lucasPuntajes.length === 24 && pabloPuntajes.length === 24) {
                localStorage.setItem('lucasPuntajes', JSON.stringify(lucasPuntajes));
                localStorage.setItem('pabloPuntajes', JSON.stringify(pabloPuntajes));
                alert('Puntajes guardados exitosamente.');
            } else {
                alert('Por favor, ingrese exactamente 24 puntajes para cada participante.');
            }
        });
    } else if (window.location.pathname.includes('index.html')) {
        // Página
::contentReference[oaicite:0]{index=0}
 
