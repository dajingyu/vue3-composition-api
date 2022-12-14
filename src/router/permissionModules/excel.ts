/*
 * @Description: excel相关
 * @Author: scy
 * @Date: 2021-01-21 20:13:03
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 11:19:37
 */
import Layout from '@/layout/Index.vue';
import { RouteRecordRaw } from 'vue-router';

const ExcelRouter: Array<RouteRecordRaw> =
  [
    {
      path: '/excel',
      component: Layout,
      redirect:
        '/excel/export-excel',
      meta: {
        title: 'excel',
        icon: '#iconexcel'
      },
      children: [
        {
          path: 'export-excel',
          component: () =>
            import(
              /* webpackChunkName: "export-excel" */ '@/views/excel/ExportExcel.vue'
            ),
          name: 'ExportExcel',
          meta: {
            title:
              'exportExcel'
          }
        },
        {
          path: 'export-selected-excel',
          component: () =>
            import(
              /* webpackChunkName: "select-excel" */ '@/views/excel/SelectExcel.vue'
            ),
          name: 'SelectExcel',
          meta: {
            title:
              'selectExcel'
          }
        },
        {
          path: 'export-merge-header',
          component: () =>
            import(
              /* webpackChunkName: "merge-header" */ '@/views/excel/MergeHeader.vue'
            ),
          name: 'MergeHeader',
          meta: {
            title:
              'mergeHeader'
          }
        },
        {
          path: 'upload-excel',
          component: () =>
            import(
              /* webpackChunkName: "upload-excel" */ '@/views/excel/UploadExcel.vue'
            ),
          name: 'UploadExcel',
          meta: {
            title:
              'uploadExcel'
          }
        }
      ]
    }
  ];

export default ExcelRouter;
