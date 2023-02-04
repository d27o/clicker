<template>
  <div class="home">
    <clicker :clicker-config="clickerConfig" />
  </div>
</template>

<script setup lang="ts">
import Clicker from "@/components/clicker/Clicker.vue";

import { IClicker } from "@/interfaces";

const clickerConfig: IClicker = {
  background: {
    path: 'clicker/backgrounds/logo.png',
    width: 100,
    height: 100,
  },
  size: {
    width: 100,
    height: 200,
  },
  likeDislikeButtons: {
    like: {
      style: {
        border: '1px solid green',
        width: '25px',
        height: '25px',
      }
    },
    dislike: {
      style: {
        border: '1px solid red',
        width: '25px',
        height: '25px',
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display:flex;
  justify-content: center;
}
</style>