/*
 * @Description: 引导页
 * @Author: ZY
 * @Date: 2021-01-21 20:13:03
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 11:19:32
 */
import Layout from '@/layout/Index.vue';
import { RouteRecordRaw } from 'vue-router';

const GuideRouter: Array<RouteRecordRaw> =
  [
    {
      path: '/guide',
      component: Layout,
      children: [
        {
          path: 'index',
          component: () =>
            import(
              /* webpackChunkName: "guide" */ '@/views/guide/Index.vue'
            ),
          name: 'Guide',
          meta: {
            title: 'guide',
            icon: '#iconguide'
          }
        }
      ]
    }
  ];

export default GuideRouter;
