<template>
  <w-preview title="Default" desc="Default">
    <w-input></w-input>
  </w-preview>

  <w-preview title="Rounded" desc="Rounded">
    <w-input
      :width="200"
      alt="Blured"
      rounded
      src="https://cdn.pixabay.com/photo/2017/10/23/02/19/beach-2879929_1280.jpg"
    ></w-input>
  </w-preview>

  <w-preview title="Blured" desc="Blured">
    <w-input
      :width="300"
      alt="Blured"
      blurred
      src="https://cdn.pixabay.com/photo/2017/10/23/02/19/beach-2879929_1280.jpg"
    ></w-input>
  </w-preview>

  <w-preview title="Zoomed" desc="Zoomed">
    <w-input
      :width="300"
      alt="Zoomed"
      zoomed
      src="https://cdn.pixabay.com/photo/2018/09/06/19/23/outlook-3659088_1280.jpg"
    ></w-input>
  </w-preview>

  <w-preview title="Object-fit" desc="Object-fit">
    <w-space>
      <w-input
        :width="300"
        :height="400"
        alt="Loading"
        :object-fit="objectFit"
        :object-position="objectPosition"
        src="https://cdn.pixabay.com/photo/2018/09/06/19/23/outlook-3659088_1280.jpg"
      ></w-input>

      <w-radio-group v-model="objectFit" :options="objectFitOpts"></w-radio-group>
      <w-radio-group v-model="objectPosition" :options="objectPositionOpts"></w-radio-group>
    </w-space>
  </w-preview>

  <w-preview title="Loading" desc="Loading">
    <w-space>
      <w-input
        :width="300"
        alt="Loading"
        :loading="loading"
        @load="onLoad"
        @error="onError"
        src="https://cdn.pixabay.com/photo/2018/09/06/19/23/outlook-3659088_1280.jpg"
      ></w-input>

      <w-radio-group v-model="loading" :options="loadingOpts"></w-radio-group>
    </w-space>
  </w-preview>
</template>

<script setup>
import { ref } from 'vue'

const loadingOpts = ['eager', 'lazy']
const objectFitOpts = ['none', 'contain', 'cover', 'fill', 'scale-down']
const objectPositionOpts = ['center', 'top', 'right', 'bottom', 'left']
const loading = ref('eager')
const objectFit = ref('none')
const objectPosition = ref('center')

const onLoad = (e) => {
  console.log(e)
}

const onError = (e) => {
  console.log(e)
}
</script>
