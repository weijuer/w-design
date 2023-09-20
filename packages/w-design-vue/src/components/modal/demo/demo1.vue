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

  <w-preview title="Non-dismissable" desc="Non-dismissable">
    <w-space>
      <w-button type="primary" @click="state.visible1 = true">open</w-button>
      <w-modal title="Title" v-model="state.visible1" :dismissable="false">
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
      <w-button type="primary" @click="state.visible2 = true">open</w-button>
      <w-modal title="Log in" v-model="state.visible2">
        <w-space size="20" fill orientation="vertical">
          <w-input label="Email" placeholder="Type your email"></w-input>
          <w-input label="Password" placeholder="Type your password"></w-input>
          <w-checkbox>Remember me</w-checkbox>
        </w-space>
      </w-modal>
    </w-space>
  </w-preview>

  <w-preview title="backdrop" desc="backdrop">
    <w-space>
      <template v-for="opt of backdropOpts" :key="opt">
        <w-button type="primary" @click="state[opt] = true">{{ opt }}</w-button>
      </template>

      <template v-for="opt of backdropOpts" :key="opt">
        <w-modal title="Title" v-model="state[opt]" :backdrop="opt">
          <p>backdrop=['{{ opt }}'] test</p>
        </w-modal>
      </template>
    </w-space>
  </w-preview>

  <w-preview title="Modal placements" desc="Modal placements">
    <w-space>
      <w-button type="primary" @click="state.placementVisible = true">Button</w-button>
      <w-modal title="Title" v-model="state.placementVisible" :placement="state.placement">
        <p>placement=['{{ state.placement }}'] test</p>
      </w-modal>
    </w-space>

    <w-radio-group v-model="state.placement" name="placement" orientation="horizontal">
      <template v-for="placement in placementOpts" :key="placement">
        <w-radio :value="placement">{{ placement }}</w-radio>
      </template>
    </w-radio-group>
  </w-preview>
</template>

<script setup>
import { ref, reactive } from 'vue'

const backdropOpts = ['transparent', 'opaque', 'blur']
const placementOpts = ['auto', 'top', 'bottom', 'center', 'top-center', 'bottom-center']
const visible = ref(false)
const onOk = (e) => {
  console.log('onOk', e)
  visible.value = false
}
const onCancel = (e) => console.log('onCancel', e)

const state = reactive({
  visible1: false,
  visible2: false,
  transparent: false,
  opaque: false,
  blur: false,
  placement: 'auto',
  placementVisible: false
})
</script>
