<script setup lang="ts">
// import Card from './example/Card.vue'
// import Resize from './example/Resize.vue'
// import Menu from './example/Menu.example.vue'

// import { WButton } from 'w-design-vue'
import { WButton, WTooltip2 } from 'w-design-chat'
</script>

<template>
  <!-- <div class="grid">
    <template v-for="index in 40" :key="index">
      <Card class="card">{{ index }}</Card>
    </template>
</div> -->

  <!-- <Resize></Resize> -->

  <!-- <w-button color="default" size="tiny" radius="tiny">按钮</w-button> -->

  <w-tooltip2 placement="top-start">
    <template #trigger>
      <w-button color="default" size="tiny" radius="tiny">按钮</w-button>
    </template>
    <template #content>
      <div class="w-tooltip-content">
        这是一个弹出内容
      </div>
    </template>
  </w-tooltip2>

  <!-- <Menu></Menu> -->
</template>


<style>
#app {
  border: 4px dashed;
  box-sizing: border-box;
  background-color: rgb(180, 180, 180);
  height: calc(100vh - 80px);
  margin: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
