<template>
  <w-divider dashed>Default</w-divider>
  <collapse v-model:activeKey="state.activeKey1">
    <collapse-item name="1" title="This is item header 1">
      <p>{{ text }}</p>
    </collapse-item>
    <collapse-item name="2" title="This is item header 2">
      <p>{{ text }}</p>
    </collapse-item>
  </collapse>

  <w-divider dashed>Accordion</w-divider>
  <collapse v-model:activeKey="activeKey2" accordion>
    <collapse-item name="1" title="This is item header 1">
      <p>{{ text }}</p>
    </collapse-item>
    <collapse-item name="2" title="This is item header 2">
      <p>{{ text }}</p>
    </collapse-item>
  </collapse>

  <w-divider dashed>Bordered</w-divider>
  <collapse v-model:activeKey="state.activeKey2" bordered>
    <collapse-item name="1" title="This is item header 1">
      <p>{{ text }}</p>
    </collapse-item>
    <collapse-item name="2" title="This is item header 2">
      <p>{{ text }}</p>
    </collapse-item>
  </collapse>

  <w-divider dashed>Shadow</w-divider>
  <collapse v-model:activeKey="state.activeKey3" shadowed>
    <collapse-item name="1" title="This is item header 1">
      <p>{{ text }}</p>
    </collapse-item>
    <collapse-item name="2" title="This is item header 2">
      <p>{{ text }}</p>
    </collapse-item>
  </collapse>

  <w-divider dashed>Custom Indicator</w-divider>
  <collapse v-model:activeKey="state.activeKey4">
    <collapse-item name="1" title="This is item header 1">
      <template #icon="{ expanded }">
        <w-icon :name="expanded ? 'sun' : 'moon'" />
      </template>
      <p>{{ text }}</p>
    </collapse-item>
    <collapse-item name="2" title="This is item header 2">
      <template #icon>
        <w-icon name="github" />
      </template>
      <p>{{ text }}</p>
    </collapse-item>
  </collapse>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ref } from 'vue'

const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`
const state = reactive({
  activeKey1: [],
  activeKey2: [],
  activeKey3: [],
  activeKey4: [],
  activeKey5: [],
  activeKey6: []
})

const activeKey2 = ref('1')
</script>
