/*
 * @Description: 个人中心
 * @Author: scy
 * @Date: 2021-01-21 20:13:03
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 11:19:10
 */
import Layout from '@/layout/Index.vue';
import { RouteRecordRaw } from 'vue-router';

const ProfileRouter: Array<RouteRecordRaw> =
  [
    {
      path: '/profile',
      component: Layout,
      redirect:
        '/profile/index',
      meta: { hidden: true },
      children: [
        {
          path: 'index',
          component: () =>
            import(
              /* webpackChunkName: "profile" */ '@/views/profile/Index.vue'
            ),
          name: 'Profile',
          meta: {
            title: 'profile',
            icon: 'user',
            noCache: true
          }
        }
      ]
    }
  ];

export default ProfileRouter;
