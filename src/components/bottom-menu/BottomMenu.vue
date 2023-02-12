<template>
  <div class="menu-bottom">
    <app-button
      v-for="(config, i) in buttonsConfig" :key="i"
      :button-config="config"
      @click="click(i)"
    />
    <!-- TODO: add config and interfaces -->
    <bottom-menu-modal 
      :is-visible="isModalShow"
      @close="closeHandler" 
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { IAppButton } from "@/interfaces";
import { AppButton } from "@/components";

import BottomMenuModal from "./BottomMenuModal.vue";

const commonButtonsStyle = {
  color: 'red',
}

const buttonsConfig: IAppButton[] = [
  {
    style: commonButtonsStyle,
    text: 'Level'
  },
  {
    style: commonButtonsStyle,
    text: 'Upgrade'
  },
  {
    style: commonButtonsStyle,
    text: 'Store'
  },
];

const isModalShow = ref(false);

const clickMapper = (index: number): string => {
  const map = new Map();
  map.set(0, 'Level')
    .set(1, 'Upgrade')
    .set(2, 'Store')
  return map.get(index);
}

const click = (index: number): void => {
  callMenuWindow(clickMapper(index)); 
}

const callMenuWindow = (windowType: string): void => {
  isModalShow.value = true;
}

const closeHandler = (): void => {
  isModalShow.value = false;
}
</script>

<style lang="scss" scoped>
.menu-bottom {
  display:flex;
  justify-content: space-between;

  width: 250px;
  max-width: 300px;
}
</style>