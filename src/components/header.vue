<template>
    <div class="mains">
        <h3>江苏蓝令旗人员定位系统</h3>
        
        
        <!-- <a href="http://127.0.0.1:5501/src/home.html" target="blank"></a> -->
        <el-button type="warning" @click="cockpit">检测预警中心</el-button>
        
        <el-dropdown @command="onclick">
          <el-button type="primary">
            蓝令旗<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item >退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
import {EventBus} from '../../public/EventBus'
    export default {
        methods: {
          onclick() {
            alert('成功')
          },
          cockpit(){
            EventBus.$emit('val','77')
          }
        },
    }
</script>

<style lang="scss" scoped>
.mains {
  width: 100%;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    h3 {
        margin: auto 20px;
    }
    .el-dropdown {
       vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-button--primary {
    margin:10px auto;
  }
}
</style>