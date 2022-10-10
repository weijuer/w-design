import Breadcrumb from './Breadcrumb.vue';
import BreadcrumbItem from './BreadcrumbItem.vue';

Breadcrumb.BreadcrumbItem = BreadcrumbItem;

Breadcrumb.install = (Vue) => {
    Vue.component(Breadcrumb.name, Breadcrumb);
    Vue.component(BreadcrumbItem.name, BreadcrumbItem);
};

export default Breadcrumb;
