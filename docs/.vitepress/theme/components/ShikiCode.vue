<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { codeToHtml } from 'shiki'

const props = defineProps<{
  code: string
  lang?: string
  editable?: boolean
}>()

const emit = defineEmits<{
  'update:code': [value: string]
}>()

const highlighted = ref('')
const copied = ref(false)
const copyFailed = ref(false)
const textarea = ref<HTMLTextAreaElement>()
const highlightScroller = ref<HTMLElement>()
const lang = computed(() => props.lang ?? 'vue')
let copyTimer: number | undefined
let highlightVersion = 0

onMounted(() => {
  void highlight()
})

watch(
  () => [props.code, lang.value],
  () => {
    void highlight()
  }
)

async function highlight() {
  const version = ++highlightVersion
  const html = await codeToHtml(props.code, {
    lang: lang.value,
    themes: {
      light: 'github-light',
      dark: 'github-dark'
    }
  })

  if (version === highlightVersion) highlighted.value = html
}

async function copyCode() {
  try {
    await writeClipboard(props.code)
    copied.value = true
    copyFailed.value = false
  } catch {
    copied.value = false
    copyFailed.value = true
  }

  window.clearTimeout(copyTimer)
  copyTimer = window.setTimeout(() => {
    copied.value = false
    copyFailed.value = false
  }, 1600)
}

function updateCode(event: Event) {
  emit('update:code', (event.target as HTMLTextAreaElement).value)
}

function syncScroll() {
  if (!textarea.value || !highlightScroller.value) return

  highlightScroller.value.scrollTop = textarea.value.scrollTop
  highlightScroller.value.scrollLeft = textarea.value.scrollLeft
}

async function writeClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return
  }

  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.inset = '0 auto auto 0'
  textarea.style.opacity = '0'
  document.body.appendChild(textarea)
  textarea.select()

  try {
    if (!document.execCommand('copy')) {
      throw new Error('copy command failed')
    }
  } finally {
    textarea.remove()
  }
}

onBeforeUnmount(() => {
  window.clearTimeout(copyTimer)
})
</script>

<template>
  <div class="vp-vue-preview-code">
    <div class="vp-vue-preview-code__bar">
      <span class="vp-vue-preview-code__lang">{{ lang }}</span>
      <button type="button" class="vp-vue-preview__button" @click="copyCode">
        {{ copied ? '已复制' : copyFailed ? '复制失败' : '复制代码' }}
      </button>
    </div>
    <div class="vp-vue-preview-code__editor" :class="{ 'is-editable': editable }">
      <div
        v-if="highlighted"
        ref="highlightScroller"
        class="vp-vue-preview-code__content"
        aria-hidden="true"
        v-html="highlighted"
      />
      <pre
        v-else
        class="vp-vue-preview-code__fallback"
        aria-hidden="true"
      ><code>{{ code }}</code></pre>
      <textarea
        v-if="editable"
        ref="textarea"
        class="vp-vue-preview-code__textarea"
        spellcheck="false"
        :value="code"
        @input="updateCode"
        @scroll="syncScroll"
      />
    </div>
  </div>
</template>
