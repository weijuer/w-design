<template>
  <w-header class="app-header">
    <a class="logo" href="/">
      <span class="text-magic text-magic-tex-stroke">W-Design-Vue</span>
    </a>
    <w-menu class="app-menu" theme="dark" mode="horizontal">
      <w-menu-item>
        <router-link class="app-router-link" to="/">Index</router-link>
      </w-menu-item>
      <w-menu-item>
        <router-link class="app-router-link" to="/examples">Examples</router-link>
      </w-menu-item>
    </w-menu>
  </w-header>
</template>

<script>
export default {
  name: 'app-header'
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

<style lang="scss" scoped>
.app-header {
  display: flex;

  .logo {
    margin-right: 30px;
    display: inline-flex;
    align-items: center;
    height: 64px;
    text-decoration: none;
  }

  .app-menu {
    margin-left: auto;
    line-height: 64px;
    border-bottom: 0;

    .app-router-link {
      color: inherit;
      text-decoration: none;

      display: inline-flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      padding: 0.375rem 9px 0.375rem 9px;
      height: var(--menu-item-height);
      font-size: var(--w-font-size-medium);
      border-radius: var(--w-radius-medium);
      color: hsla(var(--color-contrast-high-hsl), 0.9);
      text-decoration: none;
      transition: all 0.2s;
    }
  }
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
