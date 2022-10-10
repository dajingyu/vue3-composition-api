<template>
  <hr>

  <h1>provide/inject</h1>

  <p>我是通过provide准备的数据：{{ provideValue }}</p>

  <button @click="provideValue++">
    点我数据+1
  </button>
  <hr>

  <h1>customRef</h1>
  <!-- 在输入框中输入 信息，在下方延迟显示数据 -->
  <input
    type="text"
    v-model="keyWord"
  >
  <h3>{{ keyWord }}</h3>
  <hr>
  <h1>watch</h1>
  <p>求和为：{{ sum }}</p>

  <button @click="sum++">
    点我+1
  </button>
  <hr>

  <h1>computed</h1>
  姓：<input
    type="text"
    v-model="person.firName"
  >
  <br>
  名：<input
    type="text"
    v-model="person.lasName"
  >
  <br>

  全名：{{ fullName }}
  <br>

  全名：<input
    type="text"
    v-model="fullName"
  >
  <hr>

  <h1>ref显示</h1>

  <p>{{ aa }}</p>
  <hr>

  <h1>reative显示</h1>

  <div>
    <h1>job信息</h1>
    <p>simJob:{{ key }}</p>
    <p>{{ key2 }}</p>
    <p>{{ key3.key4 }}</p>
  </div>
  <div>
    爱好：{{ hobby }}
  </div>
  <p @click="changeInfo">
    修改信息
  </p>
  <hr>

  <h1>引入子组件</h1>
  <HelloWorld
    :msg="aa"
    @hello="helloInfo"
    msg2="111"
  >
    <template #header>
      <div>
        我是header
      </div>
    </template>
    <template #default>
      我是main
    </template>
    <template #footer>
      <div>
        我是footer
      </div>
    </template>
  </HelloWorld>
  <hr>
</template>

<script setup>
import {
  computed, customRef, onBeforeMount, onBeforeUnmount,
  onBeforeUpdate, onMounted,
  onUnmounted,
  onUpdated, provide, reactive,
  ref, toRefs, watchEffect
} from 'vue';
import HelloWorld from './components/HelloWorld';

// ---------------- provide/inject --------------------
const provideValue = ref(222);

provide('value', provideValue);

// ---------------- customRef --------------------

// ---------------- customRef --------------------
// ref:响应式（自动化）
// let keyWord = ref('hello')
// customRef（手动自定义 响应式）
const keyWord = useCustomRef('hello');

function useCustomRef(value) {
  console.log(value);
  return customRef((track, trigger) => {
    return {
      get() {
        console.log('我是get', value);
        track();
        return value;
      },
      set(newValue) {
        console.log('我是set', newValue);
        value = newValue;
        trigger();
      }
    };
  });
}


// ---------------- customRef --------------------

const aa = ref(1);
const sum = ref(0);

// ---------------- watchEffect --------------------
watchEffect(() => {
  // let bb = aa.value
  // console.log("我是watchEffect",bb);
});

// ---------------- watchEffect --------------------

// ---------------- toRef/toRefs --------------------
//
// let key = toRef(job,'key')
// ---------------- watch --------------------

const job = reactive({
  key: '1',
  key2: '2',
  key3: {
    key4: '4'
  }
});
const { key, key2, key3 } = toRefs(job);


// 情况一：监视一个ref所定义的响应式数据
// watch(sum, (newValue,oldValue) => {
//   // console.log(newValue,oldValue);
// },{immediate:true})

// 情况二：监视多个ref所定义的响应式数据
// watch([sum,aa], (newValue,oldValue) => {
//   // console.log(newValue,oldValue);
// },{immediate:true})

// 情况三：监视一个reactive所定义的响应式数据-全部属性
// watch(job, (newValue,oldValue) => {
//   // 此处无法获取正确的oldvalue，并且强制开启了。深度监视。（deep配置无效）
//   // console.log(newValue,oldValue);
// },{deep:false})

// 情况四：监视一个reactive所定义的响应式数据-单个属性
// watch(() => job.key, (newValue,oldValue) => {
//   // console.log(newValue,oldValue);
// })

// 情况五：监视一个reactive所定义的响应式数据-某些属性
// watch([() => job.key,() => job.key2], (newValue,oldValue) => {
//   // console.log(newValue,oldValue);
// })

// 特殊情况：监视一个reactive所定义的某个属性（对象时），deep有效

// watch(() => job.key3, (newValue,oldValue) => {
// // 此处无法获取正确的oldvalue
//   // console.log(newValue,oldValue);
// },{deep:true})


// ---------------- computed --------------------
// 简单版本-computed函数传进一个函数
// const fullName = computed(() => {
//   return person.firName + person.lasName
// })
// 完整版本-computed函数传进一个对象

const fullName = computed({
  get() {
    return person.firName + '-' + person.lasName;
  },
  set(value) {
    const arr = value.split('-');
    person.firName = arr[0];
    person.lasName = arr[1];
  }
});
watchEffect();

// console.log('我是setup')

// beforeCreate(() => {
//   // console.log('beforeCreate   ====>  vue2.0 x beforemount')
// })
// onCreated(() => {
//   // console.log('onCreated  ====>  vue2.0 x mount')
// })
function helloInfo(value) {
  // console.log(`你出发了父组件的事件，我是${value}`)
  aa.value = value;
}
onBeforeMount(() => {
  // console.log('onBeforeMount   ====>  vue2.0 x beforemount')
});
onMounted(() => {
  // console.log('onMounted  ====>  vue2.0 x mount')
});
onBeforeUpdate(() => {
  // console.log('onBeforeUpdate  ====>  vue2.0 x beforeUpdate')
});
onUpdated(() => {
  // console.log('onUpdated  ====>  vue2.0 x update')
});
onBeforeUnmount(() => {
  // 在卸载组件实例之前调用。在这个阶段，实例仍然是完全正常的。
  // console.log('onBeforeUnmount ====>  vue2.0 x beforeDestroy')
});
onUnmounted(() => {
  // 卸载组件实例后调用,调用此钩子时,组件实例的所有指令都被解除绑定,所有事件侦听器都被移除,所有子组件实例被卸载。
  // console.log('onUnmounted ====>  vue2.0 x destroyed')
});
// 新增两个生命周期函数
// 每次渲染后重新收集响应式依赖
// onRenderTracked(({ key, target, type }) => {
//   // 跟踪虚拟DOM重新渲染时调用,钩子接收debugger event作为参数,此事件告诉你哪个操作跟踪了组件以及该操作的目标对象和键。
//   // type:set/get操作
//   // key:追踪的键
//   // target:重新渲染后的键
//   // // console.log('onRenderTracked', key, target, type)
// })
// //每次触发页面重新渲染时自动执行
// onRenderTriggered(({ key, target, type }) => {
//   //当虚拟DOM重新渲染被触发时调用,和renderTracked类似,接收debugger event作为参数,
//   // 此事件告诉你是什么操作触发了重新渲染,以及该操作的目标对象和键
//   // // console.log('onRenderTriggered', key, target, type)
// })


const person = reactive({
  firName: '',
  lasName: ''
});
const hobby = reactive(['抽烟', '喝酒']);

// // console.log(aa)
// // console.log(job)
function changeInfo() {
  aa.value = '44';
  job.key = 'e';
  job.key2 = 'f';
  job.key3 = {
    key5: 'g'
  },

  hobby[0] = '学习';
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
