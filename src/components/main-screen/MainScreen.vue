<template>
  <div class="main-screen">
    <clicker 
      class="main-screen__clicker"
      :clicker-config="clickerConfig" 
    />
    <bottom-menu 
      class="main-screen__bottom-menu"
    />
  </div>
</template>

<script setup lang="ts">
import { Clicker, BottomMenu, AppModal } from "@/components";
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const clickerConfig = computed(() => store.getters['clicker/getClicker']);
</script>

<style lang="scss" scoped>
.main-screen {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // height: 100vh;

  &__clicker {
    width: 200px;
  }

  &__bottom-menu {
    margin-top: 20px;
  }
}
</style>