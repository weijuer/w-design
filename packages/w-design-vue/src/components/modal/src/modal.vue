<template>
  <Teleport :to="props.to">
    <Transition name="modal">
      <div v-if="props.modelValue" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header"></slot>
            </div>

            <div class="modal-body">
              <slot name="body"></slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                <w-button type="primary" @click="$emit('close')">Comfirm</w-button>
                <w-button type="default" @click="$emit('close')">Cancel</w-button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import {WButton} from '../../button'

defineOptions({
  name: 'w-modal'
})

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  to: {
    type: String,
    default: 'body'
  }
});

const emit = defineEmits(['close', 'update:modelValue']);
</script>

<style src="./modal.scss" lang="scss" scoped />
