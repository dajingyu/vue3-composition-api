/*
 * @Date: 2022-10-09 17:56:04
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 11:19:40
 * @Description: 文件信息
 */
/*
 * @Description:文章综合实例
 * @Author: scy
 * @Date: 2021-01-21 20:32:56
 * @LastEditors: scy
 * @LastEditTime: 2021-01-21 21:21:28
 */

import Layout from '@/layout/Index.vue';
import { RouteRecordRaw } from 'vue-router';

const ExampleRouter: Array<RouteRecordRaw> =
  [
    {
      path: '/example',
      component: Layout,
      redirect:
        '/example/list',
      meta: {
        title: 'example',
        icon: '#iconexample'
      },
      children: [
        {
          path: 'create',
          component: () =>
            import(
              /* webpackChunkName: "example-create" */ '@/views/example/Create.vue'
            ),
          name: 'CreateArticle',
          meta: {
            title:
              'createArticle',
            icon: 'edit'
          }
        },
        {
          path: 'edit/:id(\\d+)',
          component: () =>
            import(
              /* webpackChunkName: "example-edit" */ '@/views/example/Edit.vue'
            ),
          name: 'EditArticle',
          meta: {
            title:
              'editArticle',
            noCache: true,
            activeMenu:
              '/example/list',
            hidden: true
          }
        },
        {
          path: 'list',
          component: () =>
            import(
              /* webpackChunkName: "example-list" */ '@/views/example/List.vue'
            ),
          name: 'ArticleList',
          meta: {
            title:
              'articleList',
            icon: 'list'
          }
        }
      ]
    }
  ];

export default ExampleRouter;
