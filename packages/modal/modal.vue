<template>
  <teleport to="body">
    <transition name="modal">
      <div v-if="show" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <slot name="header">default header</slot>
            </div>

            <div class="modal-body">
              <slot name="body">default body</slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                default footer
                <button class="modal-default-button" @click="$emit('close')">OK</button>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  name: 'w-modal'
}
</script>

<script setup>
const props = defineProps({
  value: Boolean
});

const emit = defineEmits(['close']);
</script>

<style lang="scss" scoped>
.w-modal {
  position: relative;

  // 样式插槽内容
  ::v-slotted(p) {
    font-style: italic;
  }
}
</style>
