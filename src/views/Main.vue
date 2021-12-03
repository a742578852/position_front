<template>
    <el-container>
  <el-header>
    <my-header></my-header>
  </el-header>
  <el-container>
    <el-aside width='auto'>
      <my-aside></my-aside>
    </el-aside>
    <el-main>
      <my-main></my-main>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import MyHeader from '../components/header'
import MyAside from '../components/Aside'
import MyMain from '../components/Main'
    export default {
        components: {
          MyHeader,
          MyAside,
          MyMain
        },
        
    }
</script>

<style lang="scss">
 body {
      margin: 0;
    }
  .el-container {
    height: 100%;
    margin: 0;
    padding: 0;
    .el-header {
      margin: 0;
      padding: 0;
      background-color: lightskyblue;
      display: flex;
    }
    .el-main {
      margin: 0;
      padding: 0;
    }
    .el-aside {
      height: 100%;
    }
  }
</style>