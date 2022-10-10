<!--
 * @Description: 混合图表
 * @Author: ZY
 * @Date: 2021-01-08 19:27:45
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 13:48:43
-->
<template>
  <div class="chart-container">
    <MixedChart
      height="100%"
      width="100%"
    />
  </div>
</template>

<script lang="ts">
import MixedChart from '@/components/charts/MixedChart.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    MixedChart
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
