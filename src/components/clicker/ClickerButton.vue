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
import { IClickerButton } from '@/interfaces';

const props = defineProps({
  buttonConfig: {
    type: Object as () => IClickerButton,
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

  img {
    pointer-events: none;
    user-select: none;
  }

  &:active {
    transform: scale(2);
  }
}
</style>