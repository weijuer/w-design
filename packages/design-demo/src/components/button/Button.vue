<script setup name="WButton" lang="ts">
import { computed, ref } from 'vue'

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset'
    color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'success'
    | 'warning'
    variant?:
    | 'solid'
    | 'bordered'
    | 'flat'
    | 'faded'
    | 'light'
    | 'ghost'
    | 'shadow'
    size?: 'tiny' | 'small' | 'medium' | 'large'
    radius?: 'none' | 'tiny' | 'small' | 'medium' | 'large' | 'full'
    disabled?: boolean
    icon?: string
    iconOnly?: boolean
    ghost?: boolean
    glass?: boolean
    circle?: boolean
    loading?: boolean
    role?: string
}

const props = withDefaults(defineProps<ButtonProps>(), {
    type: 'button',
    color: 'default',
    variant: 'solid',
    size: 'medium',
    radius: 'small',
    disabled: false,
    icon: '',
    iconOnly: false,
    ghost: false,
    glass: false,
    circle: false,
    loading: false,
    role: 'button',
})

const buttonRef = ref<HTMLButtonElement>()

const buttonClasses = computed(() => {
    const {
        color,
        variant,
        radius,
        size,
        disabled,
        iconOnly,
        ghost,
        glass,
        circle,
    } = props

    return [
        variant ? `w-button--${variant}` : '',
        color ? `w-button--${color}` : '',
        size ? `w-button--${size}` : '',
        radius ? `w-button--radius-${radius}` : '',
        {
            'is-disabled': disabled,
            'is-icon-only': iconOnly,
            'is-ghost': ghost,
            'is-glass': glass,
            'is-circle': circle,
        },
    ]
})

defineExpose({
    el: buttonRef,
})
</script>

<template>
    <button v-bind="$attrs" ref="buttonRef" class="w-button" :class="buttonClasses" :type="type" :disabled="disabled"
        :role="role" :data-color="variant" :data-size="size">
        <Icon v-if="loading" class="w-button__loading w-button__icon-left" name="loading" />
        <Icon v-if="icon && !loading" class="w-button__icon-left" :class="[icon]" />
        <slot name="start" />
        <slot />
        <slot name="end" />
    </button>
</template>

<style scoped></style>
