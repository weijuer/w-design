<script setup lang="ts">
import { type Ref, computed, nextTick, onMounted, onUnmounted, provide, ref, watch } from 'vue'
import type { Tab } from './tab.vue'

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0
  },
  variant: {
    type: String as () => 'default' | 'pills' | 'underline' | 'cards',
    default: 'default',
    validator: (value: string) => ['default', 'pills', 'underline', 'cards'].includes(value)
  },
  position: {
    type: String as () => 'top' | 'bottom' | 'left' | 'right',
    default: 'top'
  },
  grow: {
    type: Boolean,
    default: false
  },
  centered: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

export interface TabsProvider {
  activeIndex: Ref<number>
  tabs: Ref<Tab[]>
  registerTab: (tab: Tab) => void
}

const activeIndex = ref(props.modelValue)
const headerRef = ref<HTMLElement | null>(null)
const tabButtonsRef = ref<any[]>([])
const tabs = ref<Tab[]>([])
const sliderStyle = ref({})
const showSlider = ref(false)

const tabClass = computed(() => {
  const { variant, position } = props
  return [variant ? `w-tabs--${variant}` : '', position ? `w-tabs--${position}` : '']
})

// 导航栏样式
const navStyle = computed(() => ({
  justifyContent: props.centered ? 'center' : 'flex-start'
}))

// 监听modelValue变化
watch(
  () => props.modelValue,
  newValue => {
    activeIndex.value = newValue
    updateSliderPosition()
  }
)

// 监听activeIndex变化
watch(activeIndex, newValue => {
  emit('update:modelValue', newValue)
  updateSliderPosition()
})

function setActiveTab(index: number) {
  if (tabs.value[index] && !tabs.value[index].disabled) {
    activeIndex.value = index
    emit('change', tabs.value[index].name, index)
  }
}

// 更新滑块位置
async function updateSliderPosition() {
  await nextTick()

  if (!['pills', 'underline'].includes(props.variant) || !tabButtonsRef.value.length) return

  const activeTab = tabButtonsRef.value[activeIndex.value]
  if (!activeTab) return

  const header = headerRef.value
  if (!header) return

  const headerRect = header.getBoundingClientRect()
  const tabRect = activeTab.getBoundingClientRect()

  // 计算header的padding和border偏移量
  const headerStyle = window.getComputedStyle(header)
  const paddingLeft = Number.parseFloat(headerStyle.paddingLeft) || 0
  const borderLeftWidth = Number.parseFloat(headerStyle.borderLeftWidth) || 0

  sliderStyle.value = {
    width: `${tabRect.width}px`,
    height: props.variant === 'pills' ? `${tabRect.height}px` : undefined,
    transform: `translateX(${tabRect.left - headerRect.left - paddingLeft - borderLeftWidth}px )`
  }

  showSlider.value = true
}

provide('w-tabs', {
  activeIndex,
  tabs,
  registerTab: (tab: Tab) => {
    tabs.value.push(tab)
  }
})

// 初始化
onMounted(() => {
  updateSliderPosition()
  window.addEventListener('resize', updateSliderPosition)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateSliderPosition)
})
</script>

<template>
  <div class="w-tabs" :class="tabClass">
    <div ref="headerRef" class="w-tabs__header">
      <div class="w-tabs__nav" :style="navStyle">
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          ref="tabButtonsRef"
          class="w-tab-button"
          :class="{ active: activeIndex === index, disabled: tab.disabled }"
          @click="setActiveTab(index)"
        >
          <slot v-if="tab.icon" name="icon">
            <i :class="tab.icon" />
          </slot>
          {{ tab.title }}
        </button>
        <div
          v-if="showSlider && ['pills', 'underline'].includes(variant)"
          class="w-tab__slider"
          :style="sliderStyle"
        />
      </div>
    </div>
    <div class="w-tabs__content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.w-tabs {
  margin: 0;
  padding: 0;

  .w-tabs__header {
    position: relative;
    display: flex;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #e9ecef;
    overflow-x: auto;
    scrollbar-width: none;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      display: none;
    }

    .w-tabs__nav {
      display: flex;
      width: 100%;
      gap: 0.5rem;
    }

    .w-tab__slider {
      position: absolute;
      background-color: var(--w-color-primary, #3b82f6);
      box-shadow: 0 4px 6px -1px rgba(59, 130, 246, 0.3);
      border-radius: 0.5rem;
      transition: all 0.3s ease;
      z-index: -1;
    }

    .w-tab-button {
      flex: v-bind('grow ? 1 : "none"');

      display: flex;
      align-items: center;
      gap: 0.25rem;
      position: relative;
      padding: 0.25rem 0.45rem;
      background: none;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--text-secondary, #6b7280);
      white-space: nowrap;
      box-sizing: border-box;
      transition: all 0.3s ease;

      &:hover {
        color: var(--w-color-primary, #3b82f6);
        opacity: 0.9;
      }

      &.active {
        color: var(--primary-text, #ffffff);
        background-color: var(--w-color-primary, #3b82f6);
      }

      &.disabled {
        opacity: 0.5;
        cursor: not-allowed;

        &:hover {
          color: var(--text-secondary, #6b7280);
          background: none;
        }
      }
    }
  }

  .w-tabs__content {
    position: relative;
    min-height: 200px;
  }

  &.w-tabs--pills {
    --tabs-pills-radius: 50rem;

    .w-tabs__header {
      background-color: var(--bg-secondary, #f3f4f6);
      padding: 0.25rem;
      border-radius: var(--tabs-pills-radius);

      .w-tab-button {
        border-radius: var(--tabs-pills-radius);
      }

      .w-tab__slider {
        border-radius: var(--tabs-pills-radius);
      }

      .w-tab-button {
        border-radius: 0.5rem;
        background-color: transparent;
        z-index: 1;

        &.active {
          color: var(--primary-text, #ffffff);
        }
      }
    }
  }

  &.w-tabs--underline {
    .w-tabs__header {
      border-bottom: 1px solid var(--border, #e5e7eb);

      .w-tab__slider {
        bottom: 0;
        height: 2px;
      }

      .w-tab-button {
        border-bottom: 2px solid transparent;
        border-radius: 0;
        margin-bottom: -1px;

        &.active {
          box-shadow: none;
          background-color: transparent;
          color: var(--w-color-primary, #3b82f6);
        }
      }
    }
  }

  &.w-tabs--cards {
    .w-tabs__header {
      margin-bottom: -1px;
    }

    .w-tab-button {
      border: 1px solid var(--border, #e5e7eb);
      margin-bottom: -1px;

      &.active {
        border-bottom-color: transparent;
        border-radius: 0.5rem 0.5rem 0 0;
      }

      &:first-child {
        border-radius: 0.5rem 0 0 0;
      }

      &:last-child {
        border-radius: 0 0.5rem 0 0;
      }
    }

    .w-tabs__content {
      border: 1px solid var(--border, #e5e7eb);
      border-radius: 0 0 0.5rem 0.5rem;
      padding: 1rem 0.5rem;
      background: var(--w-color-bg);
    }
  }
}

@media (max-width: 640px) {
  .w-tabs__nav {
    gap: 0.25rem;
  }

  .w-tab-button {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }
}
</style>
