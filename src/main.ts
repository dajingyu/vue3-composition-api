/*
 * @Date: 2022-09-23 09:31:32
 * @LastEditors: tao.xu
 * @LastEditTime: 2022-10-10 11:16:28
 * @Description: 文件信息
 */
// 引入工厂函数，不用通过Vue使用
import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
import router from './router';
import { store } from './store';

const app = createApp(App);
app.use(ElementPlus);
app.use(store);
app.use(router);
app.mount('#app');
