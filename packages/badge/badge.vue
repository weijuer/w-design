<template>
  <div>test</div>
</template>


<script>
import { h } from 'vue'

const Badge = (props, context) => {
  return h('span', context.attrs, context.slots)
}

// Badge.props = {
//   type: {
//     type: String,
//     default: 'primary'
//   },
//   text: String,
//   vertical: {
//     type: String,
//     default: 'top'
//   }
// }
</script>

<style lang="stylus" src="./_badge.styl" scoped></style>
