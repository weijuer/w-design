import WMain from './main.vue';

WMain.install = (Vue) => {
  Vue.component(WMain.name, WMain);
};

export default WMain;
