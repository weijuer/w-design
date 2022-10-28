import WPagination from './pagination.vue';

WPagination.install = (Vue) => {
  Vue.component(WPagination.name, WPagination);
};

export default WPagination;
