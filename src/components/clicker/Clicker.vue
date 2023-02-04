<template>
  <div class="clicker">
    <clicker-background :background-config="clickerConfig.background" />
    <clicker-like-dislike-buttons :likeDislikeButtons="clickerConfig.likeDislikeButtons"/>
  </div>
</template>

<script setup lang="ts">
import ClickerBackground from "./ClickerBackground.vue";
import ClickerLikeDislikeButtons from "./ClickerLikeDislikeButtons.vue";

import { defineProps } from "vue";
import { IClicker } from "@/interfaces";

const props = defineProps({
  clickerConfig: {
    type: Object as () => IClicker,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.clicker {
  display: flex;
  flex-direction: column;

  max-height: 300px;
  max-width: 200px;
}
</style>
