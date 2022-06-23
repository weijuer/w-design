<template>
  <div class="w-uploader-dragger" :class="{ dragging }" @dragenter="onDragenter" @dragleave="onDragleave"
    @dragover="onDragover" @drop="onDrop" @click="onClick">
    <div class="w-uploader-dragger-icon">
      <w-icon name="upload" />
    </div>
    <div class="w-uploader-dragger-describe">
      <span>{{ describe }}</span>
    </div>
    <div class="w-uploader-dragger-hint">{{ hint }}</div>
  </div>
</template>

<script>
export default {
  name: 'UploadDragger'
}
</script>

<script setup>
import Icon from '../icon';
import { ref } from 'vue'

const props = defineProps({
  describe: {
    type: String,
    default: 'Drop file here or click to upload'
  },
  hint: String
});

const dragging = ref(false);

function onDragenter(e) {
  dragging.value = true;
  e.stopPropagation();
  e.preventDefault();
}

function onDragleave(e) {
  dragging.value = false;
  e.stopPropagation();
  e.preventDefault();
}

function onDragover(e) {
  e.stopPropagation();
  e.preventDefault();
}

function onDrop(e) {
  dragging.value = false;
  e.stopPropagation();
  e.preventDefault();
  const files = e.dataTransfer.files;
  this.$emit('handle-files', files);
}

function onClick() {
  this.$emit('on-click');
}
</script>

<style lang="scss" scoped>
.w-uploader-dragger {
  position: relative;
  padding: 24px 12px;
  width: 100%;
  height: 100%;
  text-align: center;
  background: #fafafa;
  border: 1px dashed #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.3s;

  &:hover {
    border-color: #1890ff;
  }

  .w-uploader-dragger-icon {
    margin-bottom: 20px;
    font-size: 40px;
    color: #1890ff;
  }
}
</style>