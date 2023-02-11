<template>
  <div class="like-dislike-buttons">
    <app-button
      :buttonConfig="likeDislikeButtons.dislike"
      @click.prevent="click('dislike')"
    />
    <app-button
      :buttonConfig="likeDislikeButtons.like"
      @click.prevent="click('like')"
    />
  </div>
</template>

<script setup lang="ts">
import { AppButton } from '@/components';

import { defineProps, defineEmits } from 'vue';
import { ILikeDislikeButtons } from '@/interfaces';

const props = defineProps({
  likeDislikeButtons: {
    type: Object as () => ILikeDislikeButtons,
    required: true,
  }
});

const emit = defineEmits(["like", "dislike"]);
const click = (action: string): void => {
  emit(action);
};
</script>

<style lang="scss" scoped>
.like-dislike-buttons {
  display: flex;
  justify-content: space-between;
}
</style>