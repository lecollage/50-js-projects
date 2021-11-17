const navigation = document.getElementById('navigation');
const container = document.getElementById('container');
const menu = document.getElementById('menu');

document.getElementById('open')
    .addEventListener('click', () => {
        menu.classList.add('circle__rotate');
        container.classList.add('show-nav');
        navigation.classList.add('navigation-show');
    });

document.getElementById('close')
    .addEventListener('click', () => {
        menu.classList.remove('circle__rotate');
        container.classList.remove('show-nav');
        navigation.classList.remove('navigation-show');
    });
