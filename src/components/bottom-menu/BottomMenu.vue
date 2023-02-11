<template>
  <div class="menu-bottom">
    <app-button
      v-for="(config, i) in buttonsConfig" :key="i"
      :button-config="config"
    />
  </div>
</template>

<script setup lang="ts">
import { IAppButton } from "@/interfaces";
import { AppButton } from "@/components";

const commonButtonsStyle = {
  color: 'red'
}

const buttonsConfig: IAppButton[] = [
  {
    style: commonButtonsStyle,
    text: '1'
  },
  {
    style: commonButtonsStyle,
    text: '2'
  },
  {
    style: commonButtonsStyle,
    text: '3'
  },
];
</script>

<style lang="scss" scoped>
.menu-bottom {
  display:flex;
  justify-content: space-around;
}
</style>