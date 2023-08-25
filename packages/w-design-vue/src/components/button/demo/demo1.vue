<template>
  <section class="button-section">
    <w-button>default</w-button>
    <w-divider dashed>themes</w-divider>
    <w-button v-for="theme of themes" :key="theme" :type="theme">{{ theme }}</w-button>
    <w-divider dashed>light</w-divider>
    <w-button v-for="theme of themes" :key="theme" :type="theme" light>{{ theme }}</w-button>
    <w-divider dashed>outlined</w-divider>
    <w-button v-for="theme of themes" :key="theme" :type="theme" outlined>{{ theme }}</w-button>
    <w-divider dashed>outlined & dashed</w-divider>
    <w-button v-for="theme of themes" :key="theme" :type="theme" outlined dashed>{{ theme }}</w-button>
    <w-divider dashed>round</w-divider>
    <w-button v-for="theme of themes" :key="theme" :type="theme" round>{{ theme }}</w-button>
    <w-divider dashed>round & light</w-divider>
    <w-button v-for="theme of themes" :key="theme" :type="theme" round light>{{ theme }}</w-button>
    <w-divider dashed>round & outlined</w-divider>
    <w-button v-for="theme of themes" :key="theme" :type="theme" round outlined>{{ theme }}</w-button>
    <w-divider dashed>disabled</w-divider>
    <w-button disabled>default</w-button>
    <w-button v-for="theme of themes" :key="theme" :type="theme" disabled>{{ theme }}</w-button>
    <w-divider dashed>Sizes</w-divider>
    <w-button v-for="size of sizes" :key="size" :size="size" type="primary">{{ size ? size : 'default' }}</w-button>
    <w-divider dashed>Icon only</w-divider>
    <w-button v-for="icon of defaultIcons" :icon="icon"></w-button>
    <w-divider dashed>With Icon</w-divider>
    <w-button v-for="icon of defaultIcons">
      <template #icon>
        <w-icon :name="icon"></w-icon>
      </template>
      {{ capitalizeFirstLetter(icon) }}
    </w-button>
    <w-divider dashed>Loading</w-divider>
    <w-button type="primary" loading>Loading</w-button>
    <w-button size="small" type="primary" loading>Loading</w-button>
    <w-button type="primary" loading></w-button>
    <w-button type="primary" round loading></w-button>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const themes = ref(['primary', 'success', 'warning', 'info', 'danger', 'brand', 'focus'])
const sizes = ref(['tiny', 'small', '', 'medium', 'large'])
const defaultIcons = ref(['delete', 'error', 'file', 'loading', 'upload', 'github'])

const capitalizeFirstLetter = (word) => word.replace(/(^\w)/, (match) => match.toUpperCase())
</script>

<style scoped>
.button-section {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}
</style>
