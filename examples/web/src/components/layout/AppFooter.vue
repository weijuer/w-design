<template>
  <w-footer class="app-footer">
    <div class="app-footer-content">
      <div class="app-footer-logo">
        <span class="copyright">2021~2022©</span>
        <a class="logo-letter" href>W.J</a>
      </div>
      <div class="app-footer-nav">
        <ul class="menu-nav">
          <li>
            <a class="menu-link" href>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </w-footer>
</template>

<script setup>
import { WFooter } from 'w-design-vue';
</script>

<style lang="scss" scoped>
.app-footer {
  .app-footer-content {
    display: flex;
    justify-content: space-between;
  }
}
</style>
