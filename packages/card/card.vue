<template>
  <div class="w-card" :class="[cardType]">
    <div class="w-card-header">
      <h3 class="w-card-title" v-if="slots.title || title">
        <slot name="title">{{ title }}</slot>
      </h3>
      <div class="w-card-desc" v-if="slots.desc || desc" @click="descHandler">
        <slot name="desc">{{ desc }}</slot>
      </div>
    </div>
    <div class="w-card-body">
      <slot />
    </div>
    <div class="w-card-footer" v-if="slots.footer || footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'w-card'
};
</script>

<script setup>
import { computed, useSlots } from 'vue';

const props = defineProps({
  type: String,
  title: { default: () => {}, type: [Object, String] },
  footer: { default: () => {}, type: [Object, String] },
  desc: String
});

const slots = useSlots();
const cardType = computed(() => (props.type ? `w-card-${props.type}` : ''));
</script>

<style lang="stylus">
$theme-color = #2ecc71;

.w-card {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 1rem;
  box-shadow: 0 0 13px 0 rgba(82, 63, 105, 0.05);
  background-color: #fff;
  border-radius: 10px;

  &.w-card-sticky {
    position: sticky;
  }

  &:after {
    content: '';
    display: block;
    filter: blur(1px);
  }

  .w-card-header {
    padding: 0.5rem 0 1rem 0;
    margin-bottom: 0.5rem;

    .w-card-title {
      display: flex;
      font-size: 1rem;
      font-weight: 500;
      margin-bottom: 0;
      color: #595d6e;
    }

    .w-card-desc {
      display: inline-block;
      margin-top: 0.2rem;
      color: #74788d;
    }
  }

  .w-card-body {
    color: #575962;
  }
}
</style>
