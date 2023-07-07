<template>
    <div class="collapse__item collapse__item--collapsed">
        <div class="collapse__header">
            <div class="collapse__toggle">...</div>
            <slot name="title">
                <!-- <div class="collapse__title" v-if="title" v-html="title"></div> -->
            </slot>
        </div>
        <div class="collapse__content">
            <slot></slot>
        </div>
    </div>

    <div class="collapse__item collapse__item--expanded">...</div>
</template>

<script lang="ts">
export default {
    name: "collapse-item"
}
</script>

<script setup lang="ts">
import { inject, toRefs } from 'vue';

const collapseContext: any = inject('collapse', undefined);
const { activeKey } = toRefs(collapseContext)
</script>