<template>
  <button
    class="clicker-button"
    :style="buttonConfig.style"
  >
    <span v-if="buttonConfig.text">
      {{ buttonConfig.text }}
    </span>
    <img
      v-else
      :style="buttonConfig.imgStyle"
      :src="require(`@/assets/${buttonConfig.iconPath}`)"
    >
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { IAppButton } from '@/interfaces';

const props = defineProps({
  buttonConfig: {
    type: Object as () => IAppButton,
    required: true,
  }
});
</script>

<style lang="scss" scoped>
.clicker-button {
  background: inherit;
  padding: 0;
  border: 0;
  cursor: pointer;

  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;

  img {
    pointer-events: none;
    user-select: none;
  }

  &:active {
    transform: scale(1.5);
  }
}
</style>