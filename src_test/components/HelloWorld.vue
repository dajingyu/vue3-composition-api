<template>
  <hr>
  <h1>下边这个是son组件</h1>
  <son />
  <hr>
  <h1>我是helloWorld:{{ msg }}-{{ msg2 }}</h1>

  <p @click="changeInfo2">
    修改信息2
  </p>

  <header>
    <slot name="header">
      111
    </slot>
  </header>
  <article>
    <slot>333</slot>
  </article>
  <footer>
    <slot name="footer">
      222
    </slot>
  </footer>
</template>

<script setup>
import { defineEmits } from 'vue';
import son from './son.vue';
// const props = defineProps(['msg', 'msg2'])
const emit = defineEmits(['hello']);

// console.log(props.msg);
// console.log(props.msg2);
function changeInfo2() {
  emit('hello', '666');
}
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
