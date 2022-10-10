<!--
 * @Description:
 * @Autor: scy😊
 * @Date: 2021-01-20 10:13:52
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 13:47:34
-->
<template>
  <ArticleDetail :isEdit="true" />
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import ArticleDetail from './components/ArticleDetail.vue';

export default defineComponent({
  components: {
    ArticleDetail
  }
});
</script>
