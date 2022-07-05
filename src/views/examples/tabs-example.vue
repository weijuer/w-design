<template>
  <div class="uploader-example">
    <form>
      <fieldset>
        <legend>传统</legend>
        <w-tabs v-model="state.selected">
          <!-- 如何加icon -->
          <w-tab-pane disabled label="tab1" key="1"> content1 </w-tab-pane>
          <w-tab-pane label="tab2" key="2"> content2 </w-tab-pane>
          <w-tab-pane label="tab3" key="3"> content3 </w-tab-pane>
        </w-tabs>
      </fieldset>

      <fieldset>
        <legend>数字</legend>
        <w-tabs v-model="state.selected1">
          <w-tab-pane v-for="n in 5" :key="n" :label="n">
            {{ n }}
          </w-tab-pane>
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

<style lang="scss">
.uploader-example {
  padding: 24px;
}
</style>
