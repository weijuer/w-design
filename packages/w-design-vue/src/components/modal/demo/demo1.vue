<template>
  <w-preview title="Default" desc="Default">
    <w-space>
      <w-button type="primary" @click="visible = true">open</w-button>
      <w-modal title="Title" v-model="visible" @ok="onOk" @cancel="onCancel">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis.
          Pellentesque sit amet hendrerit risus, sed porttitor quam. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed
          porttitor quam. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing.
          Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris
          do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod
          et. Culpa deserunt nostrud ad veniam.
        </p>
      </w-modal>
    </w-space>
  </w-preview>

  <w-preview title="With Form" desc="With Form">
    <w-space>
      <w-button type="primary" @click="state.visible1 = true">open</w-button>
      <w-modal title="Log in" v-model="state.visible1">
        <w-space size="20" fill orientation="vertical">
          <w-input label="Email" placeholder="Type your email"></w-input>
          <w-input label="Password" placeholder="Type your password"></w-input>
          <w-checkbox>Remember me</w-checkbox>
        </w-space>
      </w-modal>
    </w-space>
  </w-preview>
</template>

<script setup>
import { ref, reactive } from 'vue'

const visible = ref(false)
const onOk = (e) => console.log('onOk', e)
const onCancel = (e) => console.log('onCancel', e)

const state = reactive({
  visible1: false
})
</script>
