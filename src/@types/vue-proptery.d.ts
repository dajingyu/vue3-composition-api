/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-25 09:50:16
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 14:27:52
 */
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $message: ElMessage
    }
  }

  declare module 'vue-router' {
    interface RouteMeta {
      roles?: string[]
    }
}
