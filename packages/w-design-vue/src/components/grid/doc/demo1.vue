<template>
    <h4>Three columns</h4>
    <w-grid class="grid-list">
        <w-grid-item>
            <div class="rectangle"></div>
        </w-grid-item>
        <w-grid-item>
            <div class="rectangle"></div>
        </w-grid-item>
        <w-grid-item>
            <div class="rectangle"></div>
        </w-grid-item>
    </w-grid>

    <w-grid class="grid-list">
        <w-grid-item span="2">
            <div class="rectangle"></div>
        </w-grid-item>
        <w-grid-item offset="2">
            <div class="rectangle"></div>
        </w-grid-item>
        <w-grid-item offset="2" span="2">
            <div class="rectangle"></div>
        </w-grid-item>
    </w-grid>
</template>
  
<script setup lang="ts">
</script>

<style lang="scss">
.grid-list {
    counter-reset: grid 0;

    .w-grid__item {

        >.rectangle {
            display: flex;
            align-items: center;
            padding-left: .5rem;
            height: 2rem;
            background: #d1d5db;
            border-radius: .25rem;

            &:before {
                display: inline-flex;

                counter-reset: grid 1;
                content: counter(grid) ".";
            }
        }
    }

}
</style>

  