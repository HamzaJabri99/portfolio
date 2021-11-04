<template>
  <div id="app">
  
    <Home />
  </div>
</template>

<script>
import Home from './Home.vue'
export default {
  name: "default",
  components:{
    Home
  }
};
</script>

<style lang="scss">
#app{
  min-height: 100vh;
}
</style>
