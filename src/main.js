// 导入第三方包
import Vue from "vue";
// 导入组件
import App from "./component/App.vue";

import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 导入路由配置
import routerConfig from "./router/index.js";

new Vue({
  el: '#app',
  // createElement是一个方法，创建元素
  render: function(createElement) {
    // creatElement(App) App根组件渲染到视图中
    return createElement(App)
  },
  router: new VueRouter(routerConfig)
})