<template>
    <w-preview title="Default" desc="Default">
        <w-space>
            Text
            <w-button v-for="theme of themes" :key="theme" :type="theme">{{ theme }}</w-button>
        </w-space>
    </w-preview>

    <w-preview title="Vertical" desc="Vertical">
        <w-space orientation="vertical" fill>
            <w-button v-for="theme of themes" :key="theme" :type="theme">{{ theme }}</w-button>
        </w-space>
    </w-preview>

    <w-preview title="Sizes" desc="Sizes">
        <w-space :size="20">
            <w-button v-for="theme of themes" :key="theme" :type="theme">{{ theme }}</w-button>
        </w-space>

        <w-divider></w-divider>

        <w-space size="2rem">
            <w-button v-for="theme of themes" :key="theme" :type="theme">{{ theme }}</w-button>
        </w-space>

        <w-divider></w-divider>

        <w-space :size="[18, 20]" wrap>
            <template v-for="i of 20" :key="i">
                <w-button>Button</w-button>
            </template>
        </w-space>
    </w-preview>

    <w-preview title="Align" desc="Config item align.">
        <w-space align="start" style="padding: 16px; background: #f3f2f5">
            Text
            <w-button>Button</w-button>
            <div class="mock-block">Block</div>
        </w-space>

        <template v-for="i in aligns" :key="i">
            <w-radio v-model="align" name="align" :value="i">{{ i }}</w-radio>
        </template>
    </w-preview>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const themes = ref(['primary', 'success', 'warning', 'info', 'danger', 'brand', 'focus'])
const aligns = ref(['start', 'center', 'end', 'baseline'])
const align = ref('center')
</script>

<style lang="scss">
.w-space ~ .w-space {
    margin-block: 1em;
}

.mock-block {
    padding: 40px 20px;
    background: #fff;
}
</style>
