<!--
 * @Description: 语言选择
 * @Author: ZY
 * @Date: 2020-12-23 20:06:29
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 14:07:37
-->
<template>
  <div>
    <el-dropdown>
      <svg
        class="icon"
        aria-hidden="true"
        font-size="45px"
        :class="{'svg-color': isWhite}"
      >
        <use xlink:href="#iconzhongyingwen" />
      </svg>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            v-for="item in languages"
            :key="item.value"
            :disabled="language===item.value"
          >
            <span @click="handleSetLanguage(item.value)">{{ item.name }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { AppActionTypes } from '@/store/modules/app/action-types';
import { ElMessage } from 'element-plus';
import { computed, defineComponent, reactive, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';
type Language = {
    name: string
    value: string
}

export default defineComponent({
  props: {
    isWhite: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore();
    const { locale } = useI18n();

    const state = reactive({
      languages: [{ name: 'en', value: 'en' }, { name: '中文', value: 'zh-cn' }] as Array<Language>,
      handleSetLanguage: (lang: string) => {
        locale.value = lang;
        store.dispatch(AppActionTypes.ACTION_SET_LANGUAGE, lang);
        ElMessage({
          message: 'Switch Language Success',
          type: 'success'
        });
      }
    });
    const language = computed(() => {
      return store.state.app.language;
    });
    return {
      ...toRefs(state),
      language
    };
  }
});

</script>

<style lang="scss" scoped>
.svg-color{
  fill: white;
}
</style>
