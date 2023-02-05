<template>
  <div class="main-screen">
    <clicker :clicker-config="clickerConfig" />
  </div>
</template>

<script setup lang="ts">
import { Clicker } from "@/components";
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const clickerConfig = computed(() => store.getters['clicker/getClicker']);
</script>

<style lang="scss" scoped>
.main-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
}
</style>