<template>
  <div class="app-container">
    <el-tabs v-model="activeName">
      <el-tab-pane
        label="use clipboard directly"
        name="directly"
      >
        <el-input
          v-model="inputData"
          placeholder="Please input"
          style="width:400px; max-width:100%;"
        />
        <el-button
          type="primary"
          icon="el-icon-document"
          @click="handleClipboard(inputData, $event)"
        >
          copy
        </el-button>
      </el-tab-pane>
      <el-tab-pane
        label="use clipboard by v-directive"
        name="v-directive"
      >
        <el-input
          v-model="inputData"
          placeholder="Please input"
          style="width:400px; max-width:100%;"
        />
        <el-button
          v-clipboard:copy="inputData"
          v-clipboard:success="clipboardSuccess"
          type="primary"
          icon="el-icon-document"
        >
          copy
        </el-button>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { clipboardSuccess, handleClipboard } from '@/utils/clipboard'; // use clipboard directly
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  setup() {
    const dataMap = reactive({
      activeName: 'directly',
      inputData: 'https://github.com/Armour/vue-typescript-admin-template',
      clipboardSuccess: clipboardSuccess,
      handleClipboard: handleClipboard
    });

    return { ...toRefs(dataMap) };
  }
});
</script>
