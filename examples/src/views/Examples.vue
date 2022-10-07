<template>
  <div class="examples">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'examples'
};
</script>

<script setup></script>

<style lang="scss">
.examples {
  fieldset {
    padding: 14px;
    margin-bottom: 14px;
    color: #333;
    border: #ccc dashed 1px;
  }

  legend {
    color: #333;
    font-weight: 800;
    padding: 4px 12px;
  }
}
</style>
