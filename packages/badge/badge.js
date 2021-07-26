import './_badge.styl'
import { h } from 'vue'

const Badge = ({ type, vertical, text }, { slots }) => {
  return h(
    'span',
    {
      class: ['w-badge', type, vertical]
    },
    text || slots?.default()
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
