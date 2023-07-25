<template>
    <h4>Auto</h4>
    <w-button type="primary" @click="addCol">+</w-button>
    <w-button type="primary" @click="removeCol">-</w-button>
    <w-grid class="grid-list" auto>
        <transition-group name="fade">
            <w-grid-item v-for="item of gridNums" :key="'auto_' + item">
                <div class="rectangle"></div>
            </w-grid-item>
        </transition-group>
    </w-grid>

    <h4>Grid</h4>
    <w-grid class="grid-list">
        <w-grid-item v-for="item in 12" span="1">
            <div class="rectangle"></div>
        </w-grid-item>
        <w-grid-item v-for="item in 6" span="2">
            <div class="rectangle"></div>
        </w-grid-item>
        <w-grid-item v-for="item in 4" span="3">
            <div class="rectangle"></div>
        </w-grid-item>
        <w-grid-item v-for="item in 3" span="4">
            <div class="rectangle"></div>
        </w-grid-item>
        <w-grid-item v-for="item in 2" span="6">
            <div class="rectangle"></div>
        </w-grid-item>

        <w-grid-item span="12">
            <div class="rectangle"></div>
        </w-grid-item>
    </w-grid>

    <h4>Offset</h4>
    <w-grid class="grid-list">
        <w-grid-item offset="1" span="3">
            <div class="rectangle"></div>
        </w-grid-item>
        <w-grid-item offset="2" span="4">
            <div class="rectangle"></div>
        </w-grid-item>
        <w-grid-item offset="3" span="6">
            <div class="rectangle"></div>
        </w-grid-item>
        <w-grid-item offset="4" span="7">
            <div class="rectangle"></div>
        </w-grid-item>
        <w-grid-item offset="5" span="6">
            <div class="rectangle"></div>
        </w-grid-item>
    </w-grid>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';

const gridNums = ref(3)

const addCol = () => {
    if (gridNums.value < 12) {
        gridNums.value++
    } else {
        gridNums.value = 12
    }
}
const removeCol = () => {
    if (gridNums.value > 1) {
        gridNums.value--
    } else {
        gridNums.value = 1
    }
}
</script>

<style lang="scss">
.grid-list {
    counter-reset: grid 0;

    .w-grid__item {

        >.rectangle {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 2rem;
            background: #d1d5db;
            border-radius: .25rem;

            &:before {
                display: inline-flex;
                font-weight: 600;

                counter-increment: grid 1;
                content: counter(grid);
            }
        }
    }
}


/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translate(0, 30px);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
    position: absolute;
}
</style>

  