/*
 * @Description:
 * @Author: ZY
 * @Date: 2021-01-08 19:21:46
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 14:30:09
 */
import Layout from '@/layout/Index.vue';
import { RouteRecordRaw } from 'vue-router';

const chartsRouter: Array<RouteRecordRaw> =
  [
    {
      path: '/charts',
      component: Layout,
      redirect: 'noredirect',
      name: 'Charts',
      meta: {
        title: 'charts',
        icon: '#iconchart1'
      },
      children: [
        {
          path: 'bar-chart',
          component: () =>
            import(
              /* webpackChunkName: "BarChart" */ '@/views/charts/BarChartDemo.vue'
            ),
          name: 'BarChartDemo',
          meta: {
            title: 'barChart',
            noCache: true
          }
        },
        {
          path: 'line-chart',
          component: () =>
            import(
              /* webpackChunkName: "LineChart" */ '@/views/charts/LineChartDemo.vue'
            ),
          name: 'LineChartDemo',
          meta: {
            title:
              'lineChart',
            noCache: true
          }
        },
        {
          path: 'mixed-chart',
          component: () =>
            import(
              /* webpackChunkName: "MixedChat" */ '@/views/charts/MixedChatDemo.vue'
            ),
          name: 'MixedChartDemo',
          meta: {
            title:
              'mixedChart',
            noCache: true
          }
        }
      ]
    }
  ];

export default chartsRouter;
