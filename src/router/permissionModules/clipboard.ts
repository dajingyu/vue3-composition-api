/*
 * @Description: 粘贴板
 * @Author: scy
 * @Date: 2021-01-21 20:13:03
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 14:30:05
 */
import Layout from '@/layout/Index.vue';
import { RouteRecordRaw } from 'vue-router';

const ProfileRouter: Array<RouteRecordRaw> =
  [
    {
      path: '/clipboard',
      component: Layout,
      redirect: 'noredirect',
      children: [
        {
          path: 'index',
          component: () =>
            import(
              /* webpackChunkName: "clipboard" */ '@/views/clipboard/Index.vue'
            ),
          name: 'Clipboard',
          meta: {
            title:
              'clipboard',
            icon: '#iconcopy'
          }
        }
      ]
    }
  ];

export default ProfileRouter;
