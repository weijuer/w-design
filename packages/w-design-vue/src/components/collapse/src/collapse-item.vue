<template>
    <div ref="_ref" class="collapse__item" :class="itemClass">
        <div class="collapse__header" @click="toggleTitle">
            <div class="collapse__toggle">
                <slot name="icon" :expanded="expanded">
                    <div class="triangle"></div>
                </slot>
            </div>
            <slot name="title">
                <div class="collapse__title" v-if="props.title" v-html="props.title"></div>
            </slot>
        </div>
        <collapse-transition :visible="expanded">
            <div ref="contentRef" class="collapse__content">
                <slot></slot>
            </div>
        </collapse-transition>
    </div>
</template>

<script lang="ts">
export default {
    name: "collapse-item"
}
</script>

<script setup lang="ts">
import { ref, computed, } from 'vue';
import { useParent } from 'Hooks'
import { COLLAPSE_KEY, collapseItemProps } from './interface';
import collapseTransition from './collapse-transition.vue';

const props = defineProps(collapseItemProps);
const _ref = ref<HTMLElement>()
const contentRef = ref<HTMLElement>()

const { parent, index } = useParent(COLLAPSE_KEY)

const name = computed(() => props.name ?? index.value)
const expanded = computed(() => parent?.isExpanded(name.value))

const itemClass = computed(() => ({ 'collapse__item--expanded': expanded.value }))

const toggle = (newValue = !expanded.value) => {
    parent?.toggle(name.value, newValue)
}

const toggleTitle = () => {
    const { disabled, readonly } = props
    if (!disabled && !readonly) {
        toggle()
    }
}

defineExpose({
    ref: _ref
})
</script>