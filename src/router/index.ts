/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 14:39:03
 */
import Layout from '@/layout/Index.vue';
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router';
// 无权限页面的批量合并
const constantFiles =
  require.context(
    './constantModules',
    true,
    /\.ts$/
  );
let constantModules: Array<RouteRecordRaw> =
  [];
constantFiles
  .keys()
  .forEach((key) => {
    if (
      key === './index.ts'
    ) {
      return;
    }
    constantModules =
      constantModules.concat(
        constantFiles(key)
          .default
      );
  });

// 需要权限页面的批量合并
const asyncFiles =
  require.context(
    './permissionModules',
    true,
    /\.ts$/
  );
let permissionModules: Array<RouteRecordRaw> =
  [];
asyncFiles
  .keys()
  .forEach((key) => {
    if (
      key === './index.ts'
    ) {
      return;
    }
    permissionModules =
      permissionModules.concat(
        asyncFiles(key)
          .default
      );
  });

// 将写死的无权限页面 和动态加载的无权限页面合并到一起
export const constantRoutes: Array<RouteRecordRaw> =
  [
    {
      path: '/redirect',
      component: Layout,
      meta: { hidden: true },
      children: [
        {
          path: '/redirect/:path(.*)',
          component: () =>
            import(
              /* webpackChunkName: "redirect" */ '@/views/redirect/Index.vue'
            )
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () =>
            import(
              /* webpackChunkName: "dashboard" */ '@/views/dashboard/Index.vue'
            ),
          name: 'Dashboard',
          meta: {
            title:
              'dashboard',
            icon: '#icondashboard',
            affix: true
          }
        }
      ]
    },
    ...constantModules
  ];

// 需要权限的页面List
export const asyncRoutes: Array<RouteRecordRaw> =
  [...permissionModules];

// 默认加载无权限的路由文件
const router = createRouter({
  history:
    createWebHashHistory(),
  routes: constantRoutes
});

// 重置路由
export function resetRouter() {
  const newRouter = router;
  (router as any).matcher = (
    newRouter as any
  ).matcher; // reset router
}

export default router;
