<!--
 * @Description:
 * @Autor: WJM
 * @Date: 2021-01-18 14:53:33
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 13:50:26
-->
<template>
  <div style="padding:30px;">
    <el-alert
      :closable="false"
      title="menu 1-2"
      type="success"
    >
      <transition
        name="fade-transform"
        mode="out-in"
      >
        <router-view />
      </transition>
    </el-alert>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

});
</script>
