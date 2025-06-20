<template>
  <div ref="_ref" :class="itemClass">
    <div class="w-collapse__header" @click="toggleTitle">
      <slot name="title">
        <div class="w-collapse__title" v-if="props.title" v-html="props.title"></div>
      </slot>
      <div class="w-collapse__toggle">
        <slot name="icon" :expanded="expanded">
          <w-icon name="arrow-left"></w-icon>
          <!-- <div class="icon left-arrow__light"></div> -->
        </slot>
      </div>
    </div>
    <collapse-transition :visible="expanded">
      <div ref="contentRef" class="w-collapse__content">
        <slot></slot>
      </div>
    </collapse-transition>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CollapseItem'
}
</script>

<script setup lang="ts">
import { collapseItemProps } from './interface'
import collapseTransition from './collapse-transition.vue'
import WIcon from '../../icon'
import { useCollapseItem } from './useCollapseItem'

const props = defineProps(collapseItemProps)
const { _ref, itemClass, expanded, toggleTitle } = useCollapseItem(props)

defineExpose({
  ref: _ref
})
</script>
