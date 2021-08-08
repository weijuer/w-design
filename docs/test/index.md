<script setup>
import { withBase, useData, useRoute } from 'vitepress'

const { theme } = useData()
const route = useRoute();
</script>

<template>
  <img :src="withBase(theme.logoPath)" />
</template>
