<script setup lang="ts">
import {
  type App,
  type Component,
  computed,
  createApp,
  h,
  onBeforeUnmount,
  onMounted,
  ref,
  watch
} from 'vue'
import ShikiCode from './ShikiCode.vue'
import { compileLivePreview } from '../livePreviewRuntime'
import {
  previewLoaders,
  previewProviders,
  previewSources,
  previewStyles
} from 'virtual:vue-preview-registry'

const props = withDefaults(
  defineProps<{
    previewId: string
    defaultCollapsed?: boolean
  }>(),
  {
    defaultCollapsed: true
  }
)

const shadowHost = ref<HTMLElement>()
const error = ref('')
const isLoading = ref(true)
const isCollapsed = ref(props.defaultCollapsed)
const source = ref(previewSources[props.previewId] ?? '')
const isDirty = computed(() => source.value !== (previewSources[props.previewId] ?? ''))
let previewApp: App<Element> | undefined
let liveCompileTimer: number | undefined
let liveCompileVersion = 0

onMounted(() => {
  void mountPreview()
})

onBeforeUnmount(() => {
  window.clearTimeout(liveCompileTimer)
  previewApp?.unmount()
})

watch(source, () => {
  if (!isDirty.value) {
    queueStaticPreview()
    return
  }

  queueLivePreview()
})

async function mountPreview(component?: Component, localStyles: string[] = []) {
  const loader = previewLoaders[props.previewId]

  if (!component && !loader) {
    error.value = `Cannot find vue preview "${props.previewId}".`
    isLoading.value = false
    return
  }

  try {
    if (!component) {
      const mod = await loader()
      component = (mod.default ?? mod) as Component
    }
    const shadowRoot =
      shadowHost.value?.shadowRoot ?? shadowHost.value?.attachShadow({ mode: 'open' })

    if (!shadowRoot) return

    previewApp?.unmount()
    shadowRoot.innerHTML = ''
    shadowRoot.append(createPreviewStyle(localStyles), document.createElement('div'))
    previewApp = createApp(createPreviewRoot(component, shadowRoot))
    previewApp.mount(shadowRoot.lastElementChild as Element)
  } catch (mountError) {
    error.value = mountError instanceof Error ? mountError.message : String(mountError)
  } finally {
    isLoading.value = false
  }
}

function createPreviewStyle(localStyles: string[] = []) {
  const style = document.createElement('style')
  style.textContent = [
    ':host { color: initial; font-family: var(--vp-font-family-base, system-ui, sans-serif); }',
    ':host *, :host *::before, :host *::after { box-sizing: border-box; }',
    ...(previewStyles[props.previewId] ?? []),
    ...localStyles
  ].join('\n')
  return style
}

function createPreviewRoot(component: Component, shadowRoot: ShadowRoot) {
  const providers = previewProviders[props.previewId] ?? []

  return {
    name: 'VuePreviewShadowRoot',
    render() {
      return providers.reduceRight(
        (child: Component, provider: previewProviders) =>
          h(provider.component, { ...provider.props, container: shadowRoot }, () => child),
        h(component)
      )
    }
  }
}

function queueStaticPreview() {
  window.clearTimeout(liveCompileTimer)
  error.value = ''
  isLoading.value = true
  void mountPreview()
}

function queueLivePreview() {
  window.clearTimeout(liveCompileTimer)
  liveCompileTimer = window.setTimeout(() => {
    void mountLivePreview()
  }, 350)
}

async function mountLivePreview() {
  const version = ++liveCompileVersion
  isLoading.value = true
  error.value = ''

  try {
    const result = await compileLivePreview(source.value, props.previewId)
    if (version !== liveCompileVersion) return

    await mountPreview(result.component, result.styles)
  } catch (compileError) {
    if (version !== liveCompileVersion) return
    error.value = compileError instanceof Error ? compileError.message : String(compileError)
  } finally {
    if (version === liveCompileVersion) isLoading.value = false
  }
}

function resetSource() {
  source.value = previewSources[props.previewId] ?? ''
}
</script>

<template>
  <div class="vp-vue-preview">
    <div class="vp-vue-preview__stage">
      <div ref="shadowHost" class="vp-vue-preview__shadow-host" />
      <div v-if="isLoading && !error" class="vp-vue-preview__placeholder">Loading preview...</div>
      <pre v-if="error" class="vp-vue-preview__error">{{ error }}</pre>
    </div>

    <div class="vp-vue-preview__toolbar">
      <button type="button" class="vp-vue-preview__button" @click="isCollapsed = !isCollapsed">
        {{ isCollapsed ? 'Expand source' : 'Collapse source' }}
      </button>
      <button
        type="button"
        class="vp-vue-preview__button"
        :disabled="!isDirty"
        @click="resetSource"
      >
        Reset
      </button>
      <span class="vp-vue-preview__status">{{ isDirty ? 'Live edit' : 'Vite module' }}</span>
    </div>

    <Transition name="vp-vue-preview-source">
      <div v-if="!isCollapsed" class="vp-vue-preview__source-shell">
        <ShikiCode v-model:code="source" lang="vue" editable />
      </div>
    </Transition>
  </div>
</template>
