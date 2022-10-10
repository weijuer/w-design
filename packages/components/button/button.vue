<template>
  <button class="w-button" @click="handleClick" :disabled="disabled || loading" :autofocus="autofocus"
    :type="nativeType" :class="[
      type ? 'w-button-' + type : '',
      size ? 'w-button-' + size : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]">
    <w-icon class="w-icon-loading w-icon--left" v-if="loading" name="loading"></w-icon>
    <w-icon class="w-icon--left" v-if="icon && !loading" :name="icon"></w-icon>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'w-button'
};
</script>

<script setup>
import WIcon from '../icon';

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  size: String,
  icon: {
    type: String,
    default: ''
  },
  nativeType: {
    type: String,
    default: 'button'
  },
  outline: String,
  block: Boolean,
  loading: Boolean,
  disabled: Boolean,
  plain: Boolean,
  autofocus: Boolean,
  round: Boolean,
  circle: Boolean
});

const emit = defineEmits(['click']);

function handleClick(event) {
  emit('click', event);
}
</script>
