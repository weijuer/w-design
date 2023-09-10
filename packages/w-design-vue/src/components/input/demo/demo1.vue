<template>
  <w-preview title="Default" desc="Default">
    <w-space>
      <w-input label="Name" placeholder="Name"></w-input>
    </w-space>
  </w-preview>

  <w-preview title="Disabled" desc="Disabled">
    <w-space>
      <w-input label="Name" placeholder="Name" disabled></w-input>
    </w-space>
  </w-preview>

  <w-preview title="Required" desc="Required">
    <w-space>
      <w-input label="Name" placeholder="Name" required></w-input>
    </w-space>
  </w-preview>

  <w-preview title="Readonly" desc="Readonly">
    <w-space>
      <w-input label="Name" placeholder="Name" readonly></w-input>
    </w-space>
  </w-preview>

  <w-preview title="Icon" desc="Icon">
    <w-space>
      <w-input label="Name" placeholder="Name">
        <template #start>
          <w-icon name="sun"></w-icon>
        </template>
      </w-input>

      <w-input label="Name" placeholder="Name">
        <template #end>
          <w-icon name="moon"></w-icon>
        </template>
      </w-input>

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

  <w-preview title="description" desc="description">
    <w-space>
      <w-input label="name" description="description message" placeholder="please enter name"></w-input>
      <w-input label="name" placeholder="please enter name">
        <template #description>
          <div class="extra">description message from slots</div>
        </template>
      </w-input>
    </w-space>
  </w-preview>

  <w-preview title="errorMessage" desc="errorMessage">
    <w-space>
      <w-input
        label="name"
        validity-state="invalid"
        error-message="error message"
        placeholder="please enter name"
      ></w-input>
      <w-input label="name" validity-state="invalid" placeholder="please enter name">
        <template #error-message>
          <div class="extra">error message from slots</div>
        </template>
      </w-input>
    </w-space>
  </w-preview>

  <w-preview title="Clearable" desc="Clearable">
    <w-space>
      <w-input default-value="default Value" clearable @clear="() => console.log('input cleared')"></w-input>
    </w-space>
  </w-preview>

  <w-preview title="Controlled" desc="Controlled">
    <w-space orientation="vertical" align="start">
      <w-input v-model="value"></w-input>
      <p>Input value: {{ value }}</p>
    </w-space>
  </w-preview>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('Controlled')

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
