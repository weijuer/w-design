<template>
  <div class="not-found">
    <h1 class="status" data-t="404">404</h1>
    <blockquote>{{ getMsg() }}</blockquote>
    <a href="/" aria-label="go to home"> Take me home. </a>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
};

const msgs = [
  `There's nothing here.`,
  `How did we get here?`,
  `That's a Four-Oh-Four.`,
  `Looks like we've got some broken links.`
];
</script>

<script setup>
function getMsg() {
  return msgs[Math.floor(Math.random() * msgs.length)];
}
</script>

<style lang="scss" scoped>
.status {
  position: absolute;
  text-align: center;
  width: 100%;
  font-size: 6rem;
  font-weight: 700;
  margin: 0;
  animation: shake 0.6s ease-in-out infinite alternate;
  user-select: none;

  &:before {
    content: attr(data-t);
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0.34em);
    height: 0.1em;
    line-height: 0.5em;
    width: 100%;
    animation: scan 0.5s ease-in-out 126ms infinite alternate,
      glitch-anim 0.3s ease-in-out infinite alternate;
    overflow: hidden;
    opacity: 0.7;
  }

  &:after {
    content: attr(data-t);
    position: absolute;
    top: -18px;
    left: 50%;
    transform: translate(-50%, 0.34em);
    height: 0.5em;
    line-height: 0.1em;
    width: 100%;
    animation: scan 665ms ease-in-out 344ms infinite alternate,
      glitch-anim 0.3s ease-in-out infinite alternate;
    overflow: hidden;
    opacity: 0.8;
  }
}

@keyframes scan {
  0%,
  20%,
  to {
    height: 0;
    transform: translate(-50%, 0.44em);
  }

  10%,
  15% {
    height: 1em;
    line-height: 0.2em;
    transform: translate(-55%, 0.14em);
  }
}

@keyframes shake {
  0%,
  to {
    transform: translate(-1px);
  }

  10% {
    transform: translate(2px, 1px);
  }

  30% {
    transform: translate(-3px, 2px);
  }

  35% {
    transform: translate(2px, -3px);
    filter: blur(4px);
  }

  45% {
    transform: translate(2px, 2px) skewY(-8deg) scaleX(0.96);
    filter: blur(0);
  }

  50% {
    transform: translate(-3px, 1px);
  }
}

@keyframes glitch-anim {
  0% {
    clip: rect(28px, 9999px, 63px, 0);
  }

  10% {
    clip: rect(61px, 9999px, 82px, 0);
  }

  20% {
    clip: rect(18px, 9999px, 35px, 0);
  }

  30% {
    clip: rect(38px, 9999px, 29px, 0);
  }

  40% {
    clip: rect(5px, 9999px, 47px, 0);
  }

  50% {
    clip: rect(53px, 9999px, 23px, 0);
  }

  60% {
    clip: rect(46px, 9999px, 94px, 0);
  }

  70% {
    clip: rect(78px, 9999px, 38px, 0);
  }

  80% {
    clip: rect(12px, 9999px, 57px, 0);
  }

  90% {
    clip: rect(38px, 9999px, 32px, 0);
  }

  to {
    clip: rect(42px, 9999px, 52px, 0);
  }
}
</style>
