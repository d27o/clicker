<template>
  <img :src="require(`@/assets/${backgroundConfig.path}`)" />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { IClickerBackgroundConfig } from '@/interfaces';

const props = defineProps({
  backgroundConfig: {
    type: Object as () => IClickerBackgroundConfig,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
</style>
