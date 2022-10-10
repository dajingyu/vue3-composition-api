<template>
  <p>我是通过 inject 注入到son组件的数据：{{ injectValue }}</p>
</template>

<script setup>
import { inject } from 'vue';


const injectValue = inject('value');
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
