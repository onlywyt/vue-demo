//当前模块的主配置
import Vue from 'vue'
import VueRouter from "vue-router";
import Content from "../components/Content";
//import Main from "../components/Main";
import yt from "../components/yt";
import Main from "../views/Main"
import Login from "../views/login";
import UserProfile from "../views/user/Profile"
import UserList from "../views/user/List";
import notFound from "../views/notFound";
//安装路由
Vue.use(VueRouter);

//配置导出路由
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      //路由路径
      path: '/content',
      name: 'content',
      //跳转的组件
      component: Content
    }, {
      //路由路径
      path: '/main',
      //跳转的组件
      component: Main,
      // props: true,
      children: [
        {path: '/user/profile/:id',name: UserProfile,  component:UserProfile},
        {path: '/user/list',component:UserList}
      ]
    }, {
      //路由路径
      path: '/login',
      //跳转的组件
      component: Login
    }, {
      //路由路径
      path: '/yt',
      //跳转的组件
      component: yt
    }, {
      //路由路径
      path: '/goHome',
      //跳转的组件
      redirect: 'main'
    }
  ]
});
