<template>
    <h4>Three columns</h4>
    <w-grid>
        <w-grid-item>
            <div class="rectangle">1</div>
        </w-grid-item>
        <w-grid-item>
            <div class="rectangle">2</div>
        </w-grid-item>
        <w-grid-item>
            <div class="rectangle">3</div>
        </w-grid-item>
    </w-grid>

    <w-grid>
        <w-grid-item span="2">
            <div class="rectangle">1</div>
        </w-grid-item>
        <w-grid-item offset="2">
            <div class="rectangle">2</div>
        </w-grid-item>
        <w-grid-item offset="2" span="2">
            <div class="rectangle">3</div>
        </w-grid-item>
    </w-grid>
</template>
  
<script setup lang="ts">
</script>

<style lang="scss">
.rectangle {
    display: flex;
    align-items: center;
    padding-left: .5rem;
    height: 2rem;
    background: #d1d5db;
    border-radius: .25rem;

    &:before {
        display: inline-flex;
        counter-reset: 'rectangle';
        content: counter('rectangle');
    }
}
</style>

  