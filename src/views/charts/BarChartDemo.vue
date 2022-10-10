<!--
 * @Date: 2022-10-10 13:44:47
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 13:48:38
 * @Description: 文件信息
-->
<!--
 * @Date: 2022-10-10 13:44:47
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 13:46:50
 * @Description: 文件信息
-->
<!--
 * @Description: 柱形图
 * @Author: ZY
 * @Date: 2021-01-08 19:24:26
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-15 09:06:21
-->
<template>
  <div class="chart-container">
    <BarChart
      height="100%"
      width="100%"
    />
  </div>
</template>

<script lang="ts">
import BarChart from '@/components/charts/BarChart.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    BarChart
  }
});
</script>

<style lang="scss" scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>
