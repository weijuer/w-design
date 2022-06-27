import Menu from './Menu.vue';
import MenuItem from './MenuItem.vue';

Menu.Panel = MenuItem;

Menu.install = (Vue) => {
    Vue.component(Menu.name, Menu);
    Vue.component(MenuItem.name, MenuItem);
};

export default Menu;