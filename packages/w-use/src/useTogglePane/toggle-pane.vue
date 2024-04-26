<template>
  <transition v-on="listeners">
    <div v-show="visible" class="toggle-pane">
      <slot />
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps({ visible: Boolean })

const listeners = {
  // 元素由隐藏变为可见
  enter(el: HTMLElement) {
    el.style.height = 'auto' // 将高度设为auto，是为了获取该元素的计算高度
    const endHeight = window.getComputedStyle(el).height // 计算高度
    el.style.height = '0px' // 将高度再设置为0
    el.offsetHeight // 强制重绘，重绘后再改变高度才会产生动画
    el.style.height = endHeight // 设置为计算高度
  },
  afterEnter(el: HTMLElement) {
    el.style.height = '' // 过渡进入之后，将高度恢复为''
  },
  // 元素由可见变为隐藏
  leave(el: HTMLElement) {
    el.style.height = window.getComputedStyle(el).height // 计算高度
    el.offsetHeight // 强制重绘，重绘后再改变高度才会产生动画
    el.style.height = '0px' // 将高度设置为0
  },
  afterLeave(el: HTMLElement) {
    el.style.height = '' // 过渡离开之后，将高度恢复为''
  }
}
</script>

<style lang="scss">
.toggle-pane {
  overflow: hidden;
  transition: height 0.22s ease-in-out;
}
</style>
