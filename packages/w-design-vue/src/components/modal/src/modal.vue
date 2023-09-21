<template>
  <Teleport :to="props.to">
    <Transition name="modal">
      <div
        v-if="props.modelValue"
        class="w-modal"
        ref="_ref"
        :class="modalClass"
        :style="modalStyle"
        :data-open="modelValue"
        :data-dismissable="dismissable"
        @click="onOverlayClick"
      >
        <div class="w-modal__content" :style="bodyStyle">
          <w-button
            v-if="closable"
            @click="onCancel"
            class="w-modal__close-btn"
            plain
            round
            icon="delete-filled"
          ></w-button>
          <slot name="header">
            <header class="w-modal__header">
              {{ title }}
            </header>
          </slot>

          <div class="w-modal__body">
            <slot></slot>
          </div>

          <slot name="footer">
            <footer class="w-modal__footer">
              <w-button type="default" @click="onCancel">{{ cancelText }}</w-button>
              <w-button :type="okType" :loading="confirmLoading" @click="onOk">{{ okText }}</w-button>
            </footer>
          </slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { WButton } from '../../button'
import { modalEmits, modalProps } from './interface'
import { useModal } from './useModal'

defineOptions({
  name: 'WModal',
  inheritAttrs: false
})

const props = defineProps(modalProps)
const emit = defineEmits(modalEmits)

const { _ref, modalClass, modalStyle, onOk, onCancel, onOverlayClick } = useModal(props, emit)
</script>

<style src="./modal.scss" lang="scss" />
