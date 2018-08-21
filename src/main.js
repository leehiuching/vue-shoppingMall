import 'normalize.css';

// 导入第三方包
import Vue from "vue";
// 导入组件
import App from "./component/App.vue";

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 导入路由配置
import routerConfig from "./router/index.js";

import axios from "axios";
axios.defaults.baseURL = 'http://157.122.54.189:9095'; 
axios.defaults.withCredentials = true;
Vue.prototype.$http = axios;

import api from './js/api-config.js';
Vue.prototype.$api = api;

new Vue({
  el: '#app',
  // createElement是一个方法，创建元素
  render: function(createElement) {
    // creatElement(App) App根组件渲染到视图中
    return createElement(App)
  },
  router: new VueRouter(routerConfig)
})