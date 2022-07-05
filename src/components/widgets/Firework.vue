<template>
  <div class="firework"></div>
</template>

<script>
export default {
  name: 'Firework'
};
</script>

<script setup></script>

<style scoped lang="scss">
.firework {
  position: absolute;
  width: 150px;
  height: 150px;
  background: #ffefad;
  -webkit-mask: url('Assets/imgs/bg/bg-firework.png') right top no-repeat;
  -webkit-mask-size: auto 150px;
  animation: firework 2s steps(24) infinite, random 8s steps(1) infinite, random_color 1s infinite;
}

@keyframes firework {
  0% {
    -webkit-mask-position: 0%;
  }
  50%,
  100% {
    -webkit-mask-position: 100%;
  }
}

@keyframes random {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(200%, 50%) scale(0.8);
  }
  50% {
    transform: translate(80%, 80%) scale(1.2);
  }
  75% {
    transform: translate(20%, 60%) scale(0.65);
  }
}

@keyframes random_color {
  0% {
    background-color: #ffefad;
  }
  25% {
    background-color: #ffadad;
  }
  50% {
    background-color: #aeadff;
  }
  75% {
    background-color: #adffd9;
  }
}

@media screen and (prefers-reduced-motion) {
  /* 禁用不必要的动画 */
  .firework {
    animation: none;
  }
}
</style>
