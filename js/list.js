function Lista() {
    const container = document.getElementById('image-container');
    container.classList.remove('grid-container');
    container.classList.add('list-container');
}

function Ruudukko() {
    const container = document.getElementById('image-container');
    container.classList.remove('list-container');
    container.classList.add('grid-container');
}