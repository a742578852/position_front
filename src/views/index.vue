<template>
<el-container>
  <el-main>
    <div class="login">
      <span class="wel">欢迎使用定位系统</span>
      <div class="login_inner">
     <el-input
    placeholder="请输入用户名"
    prefix-icon="el-icon-user-solid"
    v-model="input1">
  </el-input>
  <el-input
    placeholder="请输入密码"
    prefix-icon="el-icon-unlock"
    show-password
    v-model="input2">
  </el-input>
  <el-row>
  <el-button type="primary" plain>登录</el-button>
</el-row>
  </div>
  </div>
  </el-main>
</el-container>
  
       
</template>

<script>
    export default {
        data() {
          return {
            input1: '',
            input2:''
          }
        },
    }
</script>

<style lang="scss">
      .el-container{
        height: 100%;
        background-image: url('../assets/image/banner.gif');
        .login {
          border-radius: 10px;
          margin: 15% 40%;
          height: 300px;
          width: 300px;
          background-color:#696969;
          .wel {
            position: relative ;top: 50px;left: 60px;
            font-size: 20px;
            color: #3585bc;
          }
          .login_inner {
            position: relative ;top: 80px;
              .el-input {
            width: 260px;
            .el-input__icon{
              margin: 6px 0 0 20px;
            }
            .el-input__inner {
              background-color: #f9fafb;
              margin: 10px 0 0 20px;
            }
          }
          }
          .el-button {
            width: 180px;
            margin-left: 55px;
            margin-top: 30px;
          }
        }
      }

</style>