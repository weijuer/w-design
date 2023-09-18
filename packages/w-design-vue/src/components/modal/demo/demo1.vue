<template>
  <w-preview title="Default" desc="Default">
    <w-space>
      <w-button type="primary" @click="visible = true">open</w-button>
      <w-modal title="Title" v-model="visible" @ok="onOk" @cancel="onCancel">
        <p>modal body test</p>
      </w-modal>
    </w-space>
  </w-preview>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const onOk = (e) => console.log('onOk', e)
const onCancel = (e) => console.log('onCancel', e)
</script>
