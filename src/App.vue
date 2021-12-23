<template>
  <div id="app">
<!--    <router-link to="/main1">跳转到首页</router-link>-->
<!--    <router-link to="/content">跳转到内容页</router-link>-->
<!--    <router-link to="/yt">跳转到yt</router-link>-->
    <router-link to="/login">登录</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
