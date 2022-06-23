<template>
  <transition-group tag="ul" class="w-uploader-list" name="w-list">
    <li :class="['w-uploader-item', file.status]" v-for="(file, index) in files" :key="file.uid">
      <div class="w-uploader-status">
        <w-icon v-if="file.status === 'pending'" name="loading" />
        <w-icon v-else-if="file.status === 'success'" name="file" />
        <w-icon v-else name="file" />
      </div>
      <div class="w-uploader-main">
        <a :href="file.url" :download="file.name" target="_blank" class="w-uploader-file">
          <span class="w-uploader-file-name" :title="file.name">{{ file.name }}</span>
          <span class="w-uploader-file-size"> ({{ getFileSize(file.size) }})</span>
        </a>
        <w-progress v-if="file.status === 'pending'" :percent="file.percent" />
      </div>

      <w-button class="w-uploader-delete" circle plain icon="delete" @click="onDelete(file)" />
    </li>
  </transition-group>
</template>

<script>
export default {
  name: 'UploaderList',
}
</script>

<script setup>
import Icon from '../icon';
import Button from '../button';
import Progress from '../progress';

import { } from 'vue'

const props = defineProps({
  files: {
    type: Array,
    default: () => []
  }
})

function onFileClick(file) {
  this.$emit('file-click', file);
}

function onDelete(file) {
  this.$emit('on-delete', file);
}

function getFileSize(size) {
  if (typeof size === 'string') {
    return size;
  }

  var unit = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  var i = 0;
  while (size >= 1024) {
    size /= 1024;
    i++;
  }
  return size.toFixed(2) + unit[i];
}
</script>

<style lang="scss" scoped>
.w-uploader-list {
  margin: 0;
  padding: 0;
  display: block;
  overflow: hidden;
  list-style: none;

  .w-uploader-item {
    margin-top: 8px;
    display: flex;
    align-items: center;
    color: #7f7f7f;
    border-radius: 2px;

    .w-uploader-status {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
    }

    .w-uploader-main {
      flex: 1;

      .w-uploader-file {
        display: block;
        font-size: 12px;
        cursor: pointer;
        text-decoration: none;
        color: #7f7f7f;

        &:hover {
          color: #1890ff;
        }
      }

      .w-progress {
        margin-top: 4px;
      }
    }

    .w-uploader-delete {
      &:hover {
        color: #f00;
      }
    }

    &.failure {
      color: #f00;

      .w-uploader-file,
      .w-uploader-status,
      .w-uploader-delete {
        color: #f00;

        &:hover {
          color: #f00;
        }
      }
    }
  }
}
</style>