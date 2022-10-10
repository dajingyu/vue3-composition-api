// 引入工厂函数，不用通过Vue使用
import { createApp } from 'vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import App from './App.vue';
const app = createApp(App);
app.use(ElementPlus);
app.mount('#app');
