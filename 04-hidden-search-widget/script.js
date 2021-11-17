const container = document.querySelector('.buttons-container');
const searchButton = document.getElementById('search');
const input = document.querySelector('.input')

searchButton.addEventListener('click', () => {
    container.classList.toggle('active');
    input.focus();
});
