<template>
  <w-preview title="Default" desc="Default">
    <w-space orientation="vertical">
      <w-tooltip content="I am a default tooltip">
        <w-button type="default">Hover me</w-button>
      </w-tooltip>
    </w-space>
  </w-preview>

  <w-preview title="With Arrow" desc="With Arrow">
    <w-space>
      <w-tooltip arrowed content="default">
        <w-button type="default">default</w-button>
      </w-tooltip>

      <w-tooltip v-for="theme of themes" :key="theme" :type="theme" :content="theme" arrowed>
        <w-button :type="theme" light>{{ theme }}</w-button>
      </w-tooltip>
    </w-space>
  </w-preview>

  <w-preview title="Themes" desc="themes">
    <w-space>
      <w-tooltip v-for="theme of themes" :key="theme" :type="theme" :content="theme">
        <w-button :type="theme" light>{{ theme }}</w-button>
      </w-tooltip>
    </w-space>
  </w-preview>

  <w-preview title="Trigger" desc="Trigger">
    <w-space orientation="vertical">
      <w-tooltip trigger="click" content="I am a tooltip">
        <w-button type="default">Click me</w-button>
      </w-tooltip>
    </w-space>
  </w-preview>

  <w-preview title="Controlled" desc="Controlled">
    <w-space orientation="vertical">
      <w-tooltip :default-open="true" content="I am a controlled tooltip">
        <w-button type="default">Hover me</w-button>
      </w-tooltip>

      <w-tooltip v-model="visible" content="I am a controlled tooltip">
        <w-button type="default">Hover me</w-button>
      </w-tooltip>

      <p>open: {{ visible }}</p>
    </w-space>
  </w-preview>

  <w-preview title="With Delay" desc="With Delay">
    <w-space>
      <w-tooltip content="Tooltip 1" :open-delay="1000">
        <w-button type="danger">Delay Open (1000ms)</w-button>
      </w-tooltip>

      <w-tooltip content="Tooltip 2" :close-delay="2000">
        <w-button type="danger">Delay Close (2000ms)</w-button>
      </w-tooltip>
    </w-space>
  </w-preview>

  <w-preview title="Custom Content" desc="Custom Content">
    <w-space>
      <w-tooltip>
        <template #content>
          <div class="demo-content-container">
            <div class="title">Cunstom content</div>
            <div class="sub-title">This is a custom tooltip content</div>
          </div>
        </template>
        <w-button type="info">Hover me</w-button>
      </w-tooltip>
    </w-space>
  </w-preview>

  <w-preview class="placements-demo" title="Placements" desc="Placements">
    <w-space orientation="vertical" fill align="center">
      <w-space>
        <w-tooltip
          v-for="placement of placements.slice(0, 3)"
          :key="placement"
          :placement="placement"
          :content="placement"
          arrowed
          type="primary"
        >
          <w-button type="primary" light>{{ placement }}</w-button>
        </w-tooltip>
      </w-space>

      <w-space fill justify="space-evenly">
        <w-space class="start" orientation="vertical" align="start">
          <w-tooltip
            v-for="placement of placements.slice(3, 6)"
            :key="placement"
            :placement="placement"
            :content="placement"
            arrowed
            type="primary"
          >
            <w-button type="primary" light>{{ placement }}</w-button>
          </w-tooltip>
        </w-space>

        <w-space class="end" orientation="vertical" align="end">
          <w-tooltip
            v-for="placement of placements.slice(6, 9)"
            :key="placement"
            :placement="placement"
            :content="placement"
            arrowed
            type="primary"
          >
            <w-button type="primary" light>{{ placement }}</w-button>
          </w-tooltip>
        </w-space>
      </w-space>

      <w-space>
        <w-tooltip
          v-for="placement of placements.slice(9, 12)"
          :key="placement"
          :placement="placement"
          :content="placement"
          arrowed
          type="primary"
        >
          <w-button type="primary" light>{{ placement }}</w-button>
        </w-tooltip>
      </w-space>
    </w-space>
  </w-preview>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(false)
const themes = ['primary', 'success', 'warning', 'info', 'danger']
const placements = [
  'top-start',
  'top',
  'top-end',
  'left-start',
  'left',
  'left-end',
  'right-start',
  'right',
  'right-end',
  'bottom-start',
  'bottom',
  'bottom-end'
]
</script>

<style scoped lang="scss">
.demo-content-container {
  .title {
    font-weight: 700;
  }
  .sub-title {
    font-size: 0.75rem;
    line-height: 1rem;
  }
}
.placements-demo {
  .w-button {
    width: 8rem;
    height: 4rem;
  }
}
</style>
