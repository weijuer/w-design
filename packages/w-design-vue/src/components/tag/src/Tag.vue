<template>
    <transition>
        <span v-if="isShow" :class="['w-tag', hasColor]" :style="tagStyle">
            <slot></slot>
            <span @click="handleClick" v-if="closable" class="w-tag-close"></span>
        </span>
    </transition>
</template>

<script>
import { hasProp } from 'Utils/props-util';

export default {
    name: 'w-tag',
    model: {
        prop: 'visible',
        event: 'close.visible'
    },
    props: {
        color: String,
        visible: {
            type: Boolean,
            default: undefined
        },
        closable: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        tagStyle() {
            return {
                backgroundColor: this.color
            };
        },
        hasColor() {
            const { color } = this.$props;
            const themes = [
                'primary',
                'success',
                'warning',
                'danger',
                'dark',
                'metal',
                'info',
                'light',
                'brand',
                'focus'
            ];
            if (color) {
                if (themes.includes(color)) {
                    return 'w-tag-' + color;
                } else {
                    return 'w-tag-has-color';
                }
            }
            return null;
        }
    },
    data() {
        let isShow = true;
        if (hasProp(this, 'visible')) {
            isShow = this.visible;
        }

        return {
            isShow: isShow
        };
    },
    watch: {
        visible(val) {
            this.isShow = val;
        }
    },
    methods: {
        setVisible(visible, e) {
            this.$emit('close', e);
            this.$emit('close.visible', visible);
            if (e.defaultPrevented) {
                return;
            }
            if (!hasProp(this, 'visible')) {
                this.isShow = this.visible;
            }
        },
        handleClick(e) {
            e.stopPropagation();
            this.setVisible(false, e);
        }
    }
};
</script>

<style lang="scss">
$themes: (
    primary: #1890ff,
    success: #52c41a,
    warning: #faad14,
    danger: #ff4d4f,
    info: #1890ff,
    brand: #2ecc71,
    focus: #8e44ad
);

.w-tag {
    display: inline-block;
    height: auto;
    padding: 0 7px;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    color: #666;
    background: #fafafa;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;

    &~.w-tag {
        margin-left: 6px;
    }

    @each $key,
    $color in $themes {
        &.w-tag-#{$key} {
            color: $color;
            background: fade-out($color, 0.9);
            border-color: transparentize($color, 0.6);
        }
    }

    &.w-tag-has-color {
        color: #fff;
        border-color: transparent;
    }

    .w-tag-close {
        display: inline-block;
        margin-left: 3px;
        cursor: pointer;

        &:after {
            display: inline-block;
            content: '\2716';
        }
    }
}
</style>
