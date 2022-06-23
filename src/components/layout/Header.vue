<template>
  <header class="app-header">
    <div class="container">
      <div class="app-header-content">
        <div class="app-header-logo">
          <a class="logo" href="/">
            <!-- <img class="logo-img" src="~@/assets/logo-letter.png" /> -->
            <!-- <span class="text-magic" data-word="W.J">W.J</span> -->
            <!-- <span class="logo-text" data-word="W.J">W.J</span> -->
            <w-icon style="width: 160px; height: 60px; fill: #000" name="logo-text" />
          </a>
          <a class="menu-toggle-btn" href="javascript:;" @click="toggleTheme">
            <w-icon :name="theme" />
          </a>
        </div>
        <nav class="nav">
          <ul class="menu-nav app-header-nav">
            <li>
              <router-link class="menu-link text-effect-1" to="/home" data-hover="Home">Home</router-link>
            </li>
            <li>
              <router-link class="menu-link text-effect-1" to="/articles" data-hover="Article">Article</router-link>
            </li>
            <li>
              <router-link class="menu-link text-effect-1" to="/examples" data-hover="Example">Example</router-link>
            </li>

            <li>
              <a class="setting-btn" href="javascript:;" @click="toggleTheme">
                <w-icon :name="theme" />
              </a>
            </li>
          </ul>
        </nav>
        <div class="settings">
          <a href="https://github.com/weijuer" class="setting-btn github-corner">
            <w-icon style="width: 80px; height: 80px; fill: #151513; color: #fff" name="github" />
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
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
