<template>
  <div class="main">
    <el-radio-group
      v-model="isCollapse"
      style="margin-bottom: 20px; display: none"
    >
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#213947"
      text-color="#fff"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-guide"></i>
          <span>进出管理</span>
        </template>
        <el-menu-item index="1-1" @click="menu11">外来人员和车辆</el-menu-item>
        <el-menu-item index="1-2" @click="menu12">人员进出记录</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-opportunity"></i>
          <span>报警管理</span>
        </template>
        <el-menu-item index="2-1" @click="menu21">报警列表查看</el-menu-item>
        <el-menu-item index="2-2" @click="menu22">报警模板设置</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>人员组织管理</span>
        </template>
        <el-menu-item index="3-1" @click="menu31">岗位管理</el-menu-item>
        <el-menu-item index="3-2" @click="menu32">人员管理</el-menu-item>
        <el-menu-item index="3-3" @click="menu33">部门管理</el-menu-item>
        <el-menu-item index="3-4" @click="menu34">组织架构图</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-odometer"></i>
          <span>设备管理</span>
        </template>
        <el-menu-item index="4-1" @click="menu41">定位卡管理</el-menu-item>
        <el-menu-item index="4-2" @click="menu42">视频管理</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-office-building"></i>
          <span>区域管理</span>
        </template>
        <el-menu-item index="5-1" @click="menu51">区域类型</el-menu-item>
        <el-menu-item index="5-2" @click="menu52">区域统计设置</el-menu-item>
        <el-menu-item index="5-3" @click="menu53">风险分区</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-set-up"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item index="6-1" @click="menu61">角色管理</el-menu-item>
        <el-menu-item index="6-2" @click="menu62">账户管理</el-menu-item>
        <el-menu-item index="6-3" @click="menu63">地图设置</el-menu-item>
        <el-menu-item index="6-4" @click="menu64">参数设置</el-menu-item>
        <el-menu-item index="6-5" @click="menu65">操作日志</el-menu-item>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-s-platform"></i>
          <span>驾驶舱</span>
        </template>
        <el-menu-item index="7-1" @click="menu71">车间信息情况统计</el-menu-item>
        <el-menu-item index="7-2" @click="menu72">全厂数据统计</el-menu-item>
        <el-menu-item index="7-3" @click="menu73">告警实时展示</el-menu-item>
        <el-menu-item index="7-4" @click="menu74">外来人员车辆登记记录</el-menu-item>
        <el-menu-item index="7-5" @click="menu75">行为分析</el-menu-item>
        <el-menu-item index="7-6" @click="menu76">追踪</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import {EventBus} from "../../public/EventBus";
export default {
  data() {
    return {
      isCollapse: false,
      msg:''
    };
  },
  methods: {
    menu11(){
      EventBus.$emit('val','11')
    },
    menu12(){
      EventBus.$emit('val','12')
    },
    menu21(){
      EventBus.$emit('val','21')
    },
    menu22(){
      EventBus.$emit('val','22')
    },
    menu31(){
      EventBus.$emit('val','31')
    },
    menu32(){
      EventBus.$emit('val','32')
    },
    menu33(){
      EventBus.$emit('val','33')
    },
    menu34(){
      EventBus.$emit('val','34')
    },
    menu41(){
      EventBus.$emit('val','41')
    },
    menu42(){
      EventBus.$emit('val','42')
    },
    menu51(){
      EventBus.$emit('val','51')
    },
    menu52(){
      EventBus.$emit('val','52')
    },
    menu53(){
      EventBus.$emit('val','53')
    },
    menu61(){
      EventBus.$emit('val','61')
    },
    menu62(){
      EventBus.$emit('val','62')
    },
    menu63(){
      EventBus.$emit('val','63')
    },
    menu64(){
      EventBus.$emit('val','64')
    },
    menu65(){
      EventBus.$emit('val','65')
    },
    menu71(){
      EventBus.$emit('val','71')
    },
    menu72(){
      EventBus.$emit('val','72')
    },
    menu73(){
      EventBus.$emit('val','73')
    },
    menu74(){
      EventBus.$emit('val','74')
    },
    menu75(){
      EventBus.$emit('val','75')
    },
    menu76(){
      EventBus.$emit('val','76')
    }
  },
  mounted() {
    EventBus.$on('msg', (msg)=>{
      if(msg!=''){
        this.isCollapse = !this.isCollapse
      }
      
    })
  },
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 220px;
  min-height: 400px;
}
.main {
  height: 100%;
  // width: 320px;
  .el-menu {
    height: 100%;
    // width: 320px;
    .el-menu-item {
      margin-left: 20px;
    }
  }
}
</style>