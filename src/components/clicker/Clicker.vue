<template>
  <div class="clicker">
    <h1> {{ points }} </h1>
    <clicker-background
      :background-config="clickerConfig.background"
    />
    <clicker-like-dislike-buttons
      class="like-dislike-buttons"
      :like-dislike-buttons="clickerConfig.likeDislikeButtons"
      @like="likeHandler"
      @dislike="dislikeHandler"
    />
  </div>
</template>

<script setup lang="ts">
import ClickerBackground from "./ClickerBackground.vue";
import ClickerLikeDislikeButtons from "./ClickerLikeDislikeButtons.vue";

import { defineProps, computed } from 'vue';
import { useStore } from 'vuex';
import { IClicker } from "@/interfaces";

const props = defineProps({
  clickerConfig: {
    type: Object as () => IClicker,
    required: true,
  },
});

const store = useStore();
const points = computed(() => store.getters['clicker/getPoints']);

const likeHandler = (): void => {
  store.dispatch('clicker/ADD_POINTS', 10);
}

const dislikeHandler = (): void => {
  store.dispatch('clicker/REMOVE_POINTS', 10);
}

</script>

<style lang="scss" scoped>
.clicker {
  padding: 20px;
  border: 1px solid;
  display: flex;
  justify-content: center;
  flex-direction: column;

  max-height: 400px;
  max-width: 250px;

  h1 {
    text-align: center;
  }

  & .like-dislike-buttons {
    margin-top: 30px;
  }
}
</style>
