<template>
  <w-header>
    <a class="logo" href="/">
      <span class="text-magic" data-word="W.J">W.J</span>
    </a>
    <w-menu mode="horizontal">
      <w-menu-item> Home</w-menu-item>
      <w-menu-item> Examples</w-menu-item>
    </w-menu>
  </w-header>
</template>

<script>
export default {
  name: 'app-header'
};
</script>

<script setup>
import { ref } from 'vue';
const theme = ref('moon');

// 切换暗黑模式
function toggleTheme() {
  theme.value = theme.value === 'moon' ? 'sun' : 'moon';
  document.body.classList.toggle('dark-mode');
}
</script>

<style lang="scss" scoped>
.logo-icon {
  width: 160px;
  height: 60px
}

.settings {
  position: absolute;
  top: 0;
  right: 0;

  .setting-btn {
    display: inline-block;
  }

  .github-corner {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 1156px) {
  .settings {
    .github-corner {
      display: none;
    }
  }
}
</style>
