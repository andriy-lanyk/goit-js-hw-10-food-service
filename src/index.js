import menuListTpl from '../src/templates/menu-list.hbs';
import menuData from '../src/menu.json';

const menuList = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menuData);

menuList.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(menuData) {
    return menuListTpl(menuData);
}

