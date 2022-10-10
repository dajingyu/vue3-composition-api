/*
 * @Description:分栏
 * @Author: scy
 * @Date: 2021-01-08 19:21:46
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 11:19:07
 */
import Layout from '@/layout/Index.vue';
import { RouteRecordRaw } from 'vue-router';

const tabRouter: Array<RouteRecordRaw> =
  [
    {
      path: '/tab',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () =>
            import(
              /* webpackChunkName: "tab" */ '@/views/tab/Index.vue'
            ),
          name: 'Tab',
          meta: {
            title: 'tab',
            icon: '#icontab'
          }
        }
      ]
    }
  ];

export default tabRouter;
