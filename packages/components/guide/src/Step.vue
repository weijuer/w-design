<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import { stepEmits, stepProps } from './interface'
import { useStep } from './useStep'

const props = defineProps(stepProps)
const emit = defineEmits(stepEmits)

const { _ref, next, prev, skip } = useStep(props, emit)

const guide: any = inject('guide')

console.log('guide step', guide)

const stepRef = ref()
const targetDOM = ref()
// const isActive = computed(() => guide.step.value.target === props.target)
const nextText = computed(() => guide.isLast ? '完成' : '下一步')

const getCalculatedPosition = () => {
  const body = document.body;
  const documentElement = document.documentElement;

  const scrollTop = window.pageYOffset || documentElement.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || documentElement.scrollLeft || body.scrollLeft;
  const elementRect = targetDOM.value.getBoundingClientRect();

  return {
    top: elementRect.top + scrollTop,
    left: elementRect.left + scrollLeft,
    right: elementRect.left + scrollLeft + elementRect.width,
    bottom: elementRect.top + scrollTop + elementRect.height,
  }
}

const stepStyle = computed(() => {

  targetDOM.value = document.querySelector(<string>props.target);

  if (targetDOM.value && stepRef.value) {
    // 偏移量
    const offset = 20
    // 目标元素坐标
    const { bottom: targetBottom, left: targetLeft } = getCalculatedPosition()
    // 当前step元素坐标
    const { height: stepHeight } = stepRef.value.getBoundingClientRect()

    console.log('stepStyle', targetLeft, stepHeight)

    const top = `${targetBottom + offset}px`
    const left = `${targetLeft}px`

    return {
      top: top,
      left: left
    }
  }
})

</script>

<template>
  <div class="w-step" :class="[direction]" ref="stepRef" :style="stepStyle">

    <slot name="header">
      <div class="w-step__header" v-if="header" v-html="header"></div>
    </slot>
    <slot name="content">
      <div v-if="content" class="w-step__content" v-html="content"></div>
    </slot>

    <slot name="actions">
      <div class="w-step__actions">
        <a class="w-step__actions-btn" href="javascript:;" @click="skip($event)">跳过</a>
        <a class="w-step__actions-btn" v-show="!guide.isFirst" href="javascript:;" @click="prev($event)">上一步</a>
        <a class="w-step__actions-btn" href="javascript:;" @click="next($event)">{{ nextText }}</a>
      </div>
    </slot>
  </div>
</template>