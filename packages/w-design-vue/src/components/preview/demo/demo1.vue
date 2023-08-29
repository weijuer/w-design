<template>
  <w-preview title="按钮">
    <template #render>
      <w-button>preview</w-button>
    </template>
    <div>测试</div>

    <template #code>
      <pre v-pre>
        <code ><w-button>preview</w-button></code>
      </pre>
    </template>
  </w-preview>
</template>

<script setup lang="ts"></script>
