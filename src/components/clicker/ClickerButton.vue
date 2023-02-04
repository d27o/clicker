<template>
  <button :style="buttonConfig.style">
    <img
      v-if="buttonConfig.iconPath"
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