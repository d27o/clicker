<template>
  <div class="menu-bottom">
    <app-button
      v-for="(config, i) in buttonsConfig" :key="i"
      :button-config="config"
      @click="click(i)"
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

const clickMapper = (index: number): string => {
  const map = new Map();
  map.set(0, 'Level')
  map.set(1, 'Upgrade')
  map.set(2, 'Store')
  return map.get(index);
}

const click = (index: number) => {
  console.log('click ' + clickMapper(index)); 
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