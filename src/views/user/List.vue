<template>
<h1>用户列表</h1>
</template>

<script>
import axios from "axios";

export default {
  name: "UserList",
  //进入路由之前
  beforeRouteEnter:(to, from, next)=>{
    console.log("路由进入之前");
    //加载数据
    next(vm => {
      vm.getData();//进入路由之前执行getData()
    });//指向下一个
    /***
     * to 路由将要跳转的路径信息
     * from 路径跳转前的路径信息
     * next：路由的控制参数
     *  next() 跳入下一个页面
     *  next('/path') 改变路由的跳转方向，使其调到另一个路由
     *  next(false) 返回原来的页面
     *  next((vm)=>{}) 仅在beforeRouterEnter中可用，vm 是VUE的实例组件
     */
  },
  //进入路由之后
  beforeRouteLeave:(to, from, next)=>{
    console.log("进入路由之后");
    next();//指向下一个
  },
  methods: {
    getData: function(){
      axios({
        method: "get",
        url: "http://localhost:8080/static/mock/data.json",
      }).then(function (response) {
        console.log(response);
      })
    }
  }
}
</script>

<style scoped>

</style>
