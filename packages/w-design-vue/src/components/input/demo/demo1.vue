<template>
  <w-preview title="Default" desc="Default">
    <w-space>
      <w-input label="Name" placeholder="Name"></w-input>
    </w-space>
  </w-preview>

  <w-preview title="Rounded" desc="Rounded">
    <w-space>
      <w-input label="Name" placeholder="Name">
        <template #start>
          <w-icon name="sun"></w-icon>
        </template>
        <template #end>
          <w-icon name="moon"></w-icon>
        </template>
      </w-input>
    </w-space>
  </w-preview>

  <w-preview title="Blured" desc="Blured">
    <w-space>
      <w-input></w-input>
    </w-space>
  </w-preview>

  <w-preview title="Zoomed" desc="Zoomed">
    <w-space>
      <w-input></w-input>
    </w-space>
  </w-preview>

  <w-preview title="Object-fit" desc="Object-fit">
    <w-space>
      <w-input></w-input>
    </w-space>
  </w-preview>

  <w-preview title="Loading" desc="Loading">
    <w-space>
      <w-input></w-input>
    </w-space>
  </w-preview>
</template>

<script setup>
// import { ref } from 'vue'

// const loadingOpts = ['eager', 'lazy']
// const objectFitOpts = ['none', 'contain', 'cover', 'fill', 'scale-down']
// const objectPositionOpts = ['center', 'top', 'right', 'bottom', 'left']
// const loading = ref('eager')
// const objectFit = ref('none')
// const objectPosition = ref('center')

// const onLoad = (e) => {
//   console.log(e)
// }

// const onError = (e) => {
//   console.log(e)
// }
</script>
