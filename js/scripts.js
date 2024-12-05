// Añadir el año actual en el footer (copyright)
function actualizarAnyo() {
    const yearElement = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

actualizarAnyo();