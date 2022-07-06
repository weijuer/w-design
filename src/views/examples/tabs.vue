<template>
  <div class="tabs-example">
    <form>
      <fieldset>
        <legend>基本用法</legend>
        <w-tabs v-model="state.selected">
          <w-tab-pane label="tab1" name="1"> content1 </w-tab-pane>
          <w-tab-pane label="tab2" name="2"> content2 </w-tab-pane>
          <w-tab-pane label="tab3" name="3"> content3 </w-tab-pane>
        </w-tabs>
      </fieldset>

      <fieldset>
        <legend>可设置禁用项</legend>
        <w-tabs v-model="state.selected">
          <w-tab-pane label="tab1" name="1"> content1 </w-tab-pane>
          <w-tab-pane disabled label="tab2" name="2"> content2 </w-tab-pane>
          <w-tab-pane label="tab3" name="3"> content3 </w-tab-pane>
        </w-tabs>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'tabs-example'
};
</script>

<script setup>
import { reactive } from 'vue';

const state = reactive({
  selected: '1',
  selected1: 1
});
</script>
