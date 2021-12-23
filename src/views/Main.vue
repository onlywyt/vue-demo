<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1']">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>用户管理</template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <!-- name ：参数传给那个路由 ，可以用别名，params：具体参数-->
              <router-link :to="{name:'UserProfile',params:{id: 1}}">个人信息</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/user/list">用户列表</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link to="/goHome">首页</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>用户退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Main"
}
</script>
