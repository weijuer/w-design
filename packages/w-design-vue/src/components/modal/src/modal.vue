<template>
  <Teleport :to="props.to">
    <Transition name="modal">
      <div v-if="props.modelValue" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <slot name="header">
              <header class="modal-header"></header>
            </slot>

            <div class="modal-body">
              <slot name="body"></slot>
            </div>

            <slot name="footer">
              <footer class="modal-footer">
                <w-button type="primary" @click="$emit('close')">Comfirm</w-button>
                <w-button type="default" @click="$emit('close')">Cancel</w-button>
              </footer>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { WButton } from '../../button'
import { modalEmits, modalProps } from './interface'
import { useModal } from './useModal'

const props = defineProps(modalProps)
const emit = defineEmits(modalEmits)

useModal(props, emit)

defineOptions({
  name: 'WModal'
})
</script>

<style src="./modal.scss" lang="scss" scoped />
