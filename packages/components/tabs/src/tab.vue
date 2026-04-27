<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import type { TabsProvider } from './tabs.vue'

export interface Tab {
  title: string
  disabled: boolean
  name: string
  icon?: string
  count?: number
}

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  name: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  count: {
    type: Number,
    default: 0
  }
})

const tabs = inject<TabsProvider>('w-tabs', {
  activeIndex: ref(0),
  tabs: ref([]),
  registerTab: () => {}
})

if (!tabs) {
  throw new Error('Tab must be used within Tabs')
}

// 注册标签页
tabs.registerTab({
  title: props.title,
  disabled: props.disabled,
  name: props.name,
  icon: props.icon,
  count: props.count
})

// 获取当前标签页的索引
const index = computed(() => tabs.tabs.value.findIndex(tab => tab.title === props.title))

const isActive = computed(() => tabs.activeIndex.value === index.value)
</script>

<template>
  <div v-if="isActive" class="w-tab">
    <div class="w-tab-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.w-tab {
  animation: fadeIn 0.3s ease;

  .w-tab-content {
    line-height: 1.6;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
