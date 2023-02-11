<template>
  <div class="main-screen">
    <clicker 
      class="main-screen__clicker"
      :clicker-config="clickerConfig" 
    />
    <bottom-menu 
      class="main-screen__bottom-menu"
      @click="callMenuWindow"
    />
  </div>
</template>

<script setup lang="ts">
import { Clicker, BottomMenu } from "@/components";
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const clickerConfig = computed(() => store.getters['clicker/getClicker']);

const callMenuWindow = (windowType: string): void => {
  // TODO: add open modal windows
}
</script>

<style lang="scss" scoped>
.main-screen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &__clicker {
    width: 200px;
  }

  &__bottom-menu {
    margin-top: 20px;
  }
}
</style>