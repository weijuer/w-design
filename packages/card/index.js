import WCard from './card.vue';

WCard.install = (Vue) => {
  Vue.component(WCard.name, WCard);
};

export default WCard;
