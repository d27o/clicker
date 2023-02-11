<template>
  <div class="home">
    <main-screen />
  </div>
</template>

<script setup lang="ts">
import { MainScreen } from "@/components";
</script>

<style lang="scss" scoped>
.home {
  background: linear-gradient(to right,
    rgba(75, 123, 211, 0.5),
    rgba(22, 215, 177, 0.3));
}
</style>