<template>
  <div>
      <el-form ref="loginForm" :model="form" :rules="rules" label-width="80px" class="login-box">

          <h3 class="login-title">欢迎登陆</h3>
          <el-form-item label="账户" prop="username">
            <el-input type="text" aria-placeholder="请输入账户" v-model="form.username" ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="text" aria-placeholder="请输入密码" v-model="form.password" ></el-input>
          </el-form-item>
          <el-form-item label="确认登录" >
            <el-button type="primary" v-on:click="onSubmit('loginForm')" >登录</el-button>
          </el-form-item>
    </el-form>
<!--    docsify-->
      <el-dialog
        title="温馨提示"
        :visible.sync="dislogVisible"
        width="30%"
        :before-close="hadnleClose">
        <span>请输入用户名密码</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="promary" @click="dialogVisible = false">确定</el-button>
        </span>
      </el-dialog>
  </div>




</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },

      rules: {
        username: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]
      },
      dialogVisible :false
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push("/main");
        } else {
          this.dialogVisible = true;
          return false;
        }
      })
    }
  }
}
</script>

<style scoped>
  .login-box {
    border: 1px solid #DCDFE6;
    width: 350px;
    margin: 180px auto;
    padding: 35px 35px 15px 35px;
  }
</style>
