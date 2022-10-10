/*
 * @Description: pdf打印
 * @Author: scy
 * @Date: 2021-01-21 20:13:03
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 11:19:16
 */
import Layout from '@/layout/Index.vue';
import { RouteRecordRaw } from 'vue-router';

const PdfRouter: Array<RouteRecordRaw> =
  [
    {
      path: '/pdf',
      component: Layout,
      redirect: '/pdf/index',
      children: [
        {
          path: 'index',
          component: () =>
            import(
              /* webpackChunkName: "pdf" */ '@/views/pdf/Index.vue'
            ),
          name: 'PDF',
          meta: {
            title: 'pdf',
            icon: '#iconpdf'
          }
        }
      ]
    },
    {
      path: '/pdf-download-example',
      component: () =>
        import(
          /* webpackChunkName: "pdf" */ '@/views/pdf/Download.vue'
        ),
      meta: { hidden: true }
    }
  ];

export default PdfRouter;
