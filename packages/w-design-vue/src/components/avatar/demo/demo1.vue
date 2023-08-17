<template>
  <w-avatar></w-avatar>
  <w-avatar square></w-avatar>
  <w-avatar status></w-avatar>
  <w-avatar status status-color="green"></w-avatar>
  <w-avatar size="small">W</w-avatar>
  <w-avatar size="medium">W</w-avatar>
  <w-avatar size="large">W</w-avatar>
  <w-avatar :size="64">W</w-avatar>
  <!-- <w-avatar :size="40">W</w-avatar> -->
  <!-- <w-avatar :size="32">W</w-avatar> -->

  <w-avatar-group>
    <w-avatar></w-avatar>
    <w-avatar></w-avatar>
    <w-avatar></w-avatar>
  </w-avatar-group>
</template>

<script setup lang="ts"></script>
