<template>
  <transition name="fade-out">
    <div class="w-alert" :class="alertClass">
      <div class="w-alert__header">
        <div class="w-alert__title">
          <div class="w-alert__icon">
            <slot name="icon">
              <w-icon :name="alertIconName"></w-icon>
            </slot>
          </div>
          <div class="w-alert__title-text">{{ title }}</div>
        </div>
        <w-button v-if="closable" @click="onClose" class="w-alert__close-btn" icon="close-outlined"></w-button>
      </div>
      <div class="w-alert__description">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </transition>
</template>

<script name="WAlert" lang="ts" setup>
import WButton from '../../button'
import WIcon from '../../icon'
import { alertEmits, alertProps } from './interface'
import { useAlert } from './useAlert'

const props = defineProps(alertProps)
const emit = defineEmits(alertEmits)

const { alertClass, alertIconName, onClose } = useAlert(props, emit)
</script>

<style src="./alert.scss" lang="scss" />
