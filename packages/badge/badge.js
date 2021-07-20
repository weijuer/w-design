import { h } from 'vue'
import './_badge.styl'

const Badge = ({ type, vertical, text }, { slots }) => {
  return h(
    'span',
    {
      class: ['badge', type, vertical]
    },
    text || slots.default
  )
}

Badge.props = {
  type: {
    type: String,
    default: 'primary'
  },
  vertical: {
    type: String,
    default: 'top'
  },
  text: String
}

export default Badge
