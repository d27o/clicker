<template>
  <router-view/>
</template>

<script setup lang="ts">
  // TODO: вынести в отдельный слой  
  window.godmode = function(){
    alert("Pretended to be a God?");
    document.getElementsByTagName('html')[0].style.display = 'none';
    alert("И в подарок тебе руки – создавай, твори");
  };
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
}
</style>
