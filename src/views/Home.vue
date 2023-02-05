<template>
  <div class="home">
    <clicker :clicker-config="clickerConfig" />
  </div>
</template>

<script setup lang="ts">
import Clicker from "@/components/clicker/Clicker.vue";
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const clickerConfig = computed(() => store.getters['clicker/getClicker']);
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
}
</style>