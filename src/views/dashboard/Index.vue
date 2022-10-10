<!--
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-21 13:50:19
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 13:46:48
-->
<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { computed, defineComponent, onBeforeMount, ref } from 'vue';
import AdminDashboard from './admin/Index.vue';
import EditorDashboard from './editor/Index.vue';
export default defineComponent({
  components: {
    AdminDashboard,
    EditorDashboard
  },
  setup() {
    const store = useStore();
    const currentRole = ref('admin-dashboard');
    const roles = computed(() => {
      return store.state.user.roles;
    });
    onBeforeMount(() => {
      if (!roles.value.includes('admin')) {
        currentRole.value = 'editor-dashboard';
      }
    });

    return {
      currentRole
    };
  }
});
</script>
