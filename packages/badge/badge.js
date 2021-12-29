import { h } from 'vue';

const WBadge = ({ type, vertical, text }, { slots }) => {
  console.log(slots);
  const name = 'w-badge';

  return h(
    'span',
    {
      class: [name, name + '--' + type, vertical]
    },
    text || slots.default ? slots.default : null
  );
};

WBadge.props = {
  type: {
    type: String,
    default: 'primary'
  },
  vertical: {
    type: String,
    default: 'top'
  },
  text: String
};

export default WBadge;
