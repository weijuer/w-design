<script name="WAlert" setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from 'w-design-chat'

export interface AlertProps {
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
    variant?: 'solid' | 'bordered' | 'flat' | 'faded'
    radius?: 'none' | 'tiny' | 'small' | 'medium' | 'large' | 'full'
    title: string
    icon?: string
    description?: string
    closable?: boolean
}

const props = withDefaults(defineProps<AlertProps>(), {
    type: 'default',
    variant: 'flat',
    radius: 'medium',
    closable: false
})

const emit = defineEmits<{
    (e: 'close'): void
}>()

const isActive = ref(true)

const alertClass = computed(() => {
    const { color, variant, radius } = props

    return [
        color ? `w-alert__${color}` : '',
        variant ? `is-${variant}` : '',
        radius ? `w-alert__radius-${radius}` : '',
        { active: isActive.value }
    ]
})

const alertIconName = computed(() => {
    const { color } = props

    switch (color) {
        case 'default':
        case 'primary':
        case 'secondary':
            return 'i-carbon:information-filled'
        case 'success':
            return 'i-carbon:checkmark-filled'
        case 'warning':
            return 'i-carbon:warning-alt-filled'
        case 'danger':
            return 'i-carbon:warning-filled'
        default:
            return 'i-carbon:information-filled'
    }
})
function onClose() {
    isActive.value = false
    emit('close')
}
</script>

<template>
    <transition name="fade-out">
        <div v-if="isActive" class="w-alert" :class="alertClass" :data-radius="radius">
            <div class="w-alert__header">
                <div class="w-alert__title">
                    <div class="w-alert__icon">
                        <slot name="icon">
                            <Icon :class="alertIconName" />
                        </slot>
                    </div>
                    <div class="w-alert__title-text">
                        {{ title }}
                    </div>
                </div>
                <Button
                    v-if="closable"
                    class="w-alert__close-btn"
                    icon-only
                    color="default"
                    icon="i-carbon:close"
                    @click="onClose"
                />
            </div>
            <div v-if="description || $slots.description" class="w-alert__description">
                <slot name="description">
                    {{ description }}
                </slot>
            </div>
        </div>
    </transition>
</template>
