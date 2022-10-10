<!--
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-08 19:32:05
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 13:48:11
-->
<template>
  <div class="app-container">
    <SwitchRoles @change="handleRolesChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import SwitchRoles from './components/SwitchRoles.vue';
export default defineComponent({
  components: {
    SwitchRoles
  },
  setup() {
    const router = useRouter();
    const handleRolesChange = () => {
      router.push({ path: '/?' + +new Date() }).catch(err => {
        console.warn(err);
      });
    };

    return {
      handleRolesChange
    };
  }
});
</script>
