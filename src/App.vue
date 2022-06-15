<template>
    <HelloWorld></HelloWorld>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import * as echarts from 'echarts'
import { provide } from 'vue'

export default {
  name: 'App',
  setup(){
      provide('ec',echarts)//provide
  },
  components: {
      HelloWorld
  }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
