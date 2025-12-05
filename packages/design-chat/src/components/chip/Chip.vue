<script name="Chip" setup lang="ts">
import { computed } from 'vue'

interface ChipProps {
    size?: Size
    color?: Color
    radius?: Radius
    variant?: Variant
    disabled?: boolean
    closable?: boolean
}

const props = withDefaults(defineProps<ChipProps>(), {
    color: 'default',
    size: 'medium',
    radius: 'full',
    variant: 'solid',
    disabled: false,
    closable: false
})

const emit = defineEmits<{
    (e: 'close', event: MouseEvent): void
}>()

const chipClass = computed(() => {
    const { size, color, variant, radius, disabled } = props

    return [
        size ? `w-chip__${size}` : '',
        color ? `w-chip__${color}` : '',
        variant ? `is-${variant}` : '',
        radius ? `w-chip__radius-${radius}` : '',
        {
            'is-disabled': disabled
        }
    ]
})

function onClose(event: MouseEvent) {
    emit('close', event)
}
</script>

<template>
    <div
        class="w-chip"
        :class="chipClass"
        :data-size="size"
        :data-variant="variant"
        :data-color="color"
        :data-disabled="disabled"
    >
        <slot name="start">
            <div v-if="variant === 'dot'" class="w-chip__dot" :data-color="color" />
        </slot>
        <span class="w-chip__text">
            <slot />
        </span>
        <slot name="end" />
        <Button
            v-if="closable"
            class="w-chip__btn"
            icon-only
            radius="full"
            color="default"
            :size="size"
            icon="i-carbon:close"
            @click="onClose"
        />
    </div>
</template>
