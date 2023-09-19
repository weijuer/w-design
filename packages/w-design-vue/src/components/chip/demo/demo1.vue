<template>
  <w-preview title="Default" desc="Default">
    <w-chip>default</w-chip>
  </w-preview>

  <w-preview title="Disabled" desc="Disabled">
    <w-chip disabled type="primary">disabled</w-chip>
  </w-preview>

  <w-preview title="Sizes" desc="Sizes">
    <w-space>
      <w-chip v-for="size of sizes" :key="size" :size="size">{{ size }}</w-chip>
    </w-space>
  </w-preview>

  <w-preview title="Themes" desc="Themes">
    <w-space>
      <w-chip v-for="theme of themes" :key="theme" :type="theme">{{ theme }}</w-chip>
    </w-space>
  </w-preview>

  <w-preview title="Light" desc="Light">
    <w-space>
      <w-chip v-for="theme of themes" :key="theme" :type="theme" flat>{{ theme }}</w-chip>
    </w-space>
  </w-preview>

  <w-preview title="Outlined" desc="Outlined">
    <w-space>
      <w-chip v-for="theme of themes" :key="theme" :type="theme" outlined>{{ theme }}</w-chip>
    </w-space>
  </w-preview>

  <w-preview title="Start & end content" desc="Start & end content">
    <w-space>
      <w-chip>
        <template #start>
          <w-icon name="sun"></w-icon>
        </template>
        Sun
      </w-chip>

      <w-chip>
        <template #end>
          <w-icon name="moon"></w-icon>
        </template>
        Moon
      </w-chip>
    </w-space>
  </w-preview>

  <w-preview title="Closeable" desc="closeable">
    <w-space>
      <w-chip closeable @close="onClose">closeable</w-chip>
      <w-chip closeable @close="onClose" flat>closeable</w-chip>
    </w-space>
  </w-preview>

  <w-preview title="Closeable" desc="closeable">
    <w-space>
      <template v-for="fruit in fruits" :key="fruit">
        <w-chip closeable @close="handleClose(fruit)" flat>{{ fruit }}</w-chip>
      </template>
    </w-space>
  </w-preview>
</template>

<script setup>
import { ref } from 'vue'

const themes = ['primary', 'success', 'warning', 'info', 'danger']
const initialFruits = ['Apple', 'Banana', 'Cherry', 'Watermelon', 'Orange']
const sizes = ['small', 'medium', 'large']

const fruits = ref(initialFruits)

const onClose = (e) => {
  console.log(e)
}

const handleClose = (fruitToRemove) => {
  fruits.value = fruits.value.filter((fruit) => fruit !== fruitToRemove)

  if (fruits.value.length === 0) {
    fruits.value = initialFruits
  }
}
</script>
