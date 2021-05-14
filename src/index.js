import menuListTpl from '../src/templates/menu-list.hbs';
import menuData from '../src/menu.json';

const menuList = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menuData);
const buttonThemeSwitch = document.querySelector('#theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const body = document.querySelector('body');

menuList.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menuData) {
    return menuListTpl(menuData);
};

buttonThemeSwitch.addEventListener('change', changeMenuTheme);

function changeMenuTheme() {
    if (buttonThemeSwitch.checked) {
        body.classList.add(Theme.DARK);
        body.classList.remove(Theme.LIGHT);
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
        localStorage.setItem('theme', 'light');
    };
}

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    buttonThemeSwitch.checked = true;
}

