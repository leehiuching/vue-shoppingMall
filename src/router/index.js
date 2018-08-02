// 导入组件
import Login from '../component/login/Login.vue';
import Register from '../component/register/Register.vue';

// 导出路由配置
export default {
  routes: [
    {name: 'login', path: '/login', component: Login},
    {name: 'Register', path: '/register', component: Register}
  ]
}