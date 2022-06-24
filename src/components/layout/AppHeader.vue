<template>
  <w-header>
    <a class="logo" href="/">
    </a>
  </w-header>
</template>

<script>
export default {
  name: 'app-header',
}
</script>

<script setup>
import { ref } from 'vue'
const theme = ref('moon')

// 切换暗黑模式
function toggleTheme() {
  theme.value = theme.value === 'moon' ? 'sun' : 'moon'
  document.body.classList.toggle('dark-mode')
}
</script>

<style lang="stylus">
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
