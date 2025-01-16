<template>
  <div class="index">
    <div class="hero">
      <w-icon name="delete" />

      <w-button type="primary" @click="visible = true">打开对话框</w-button>
      <w-modal v-model="visible" @close="onClose" />

    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
};
</script>

<script setup>
import { ref } from 'vue';
import { WButton, WIcon, WModal } from 'w-design-vue';

const visible = ref(false);
const onClose = () => {
  visible.value = false;
};

</script>

<style scoped lang="scss">
.hero {
  display: flex;
  justify-content: center;
  position: relative;
  width: 8rem;
  height: 8rem;
}
</style>
