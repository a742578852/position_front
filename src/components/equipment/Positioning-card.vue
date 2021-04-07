<template>
  <div>
    <div>
      <el-button type="primary" >+ 新增定位卡</el-button>
    </div>
    <div>
      <el-input placeholder="定位卡号/绑定对象/门禁卡号" v-model="input1" clearable>
      </el-input>
      <el-dropdown split-button type="primary" @command="handleCommand2">
        {{ department }}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="all">全部</el-dropdown-item>
          <el-dropdown-item command="1">安环部</el-dropdown-item>
          <el-dropdown-item command="2">生产部</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown split-button type="primary" @command="handleCommand3">
        {{ bindState }}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="all">全部</el-dropdown-item>
          <el-dropdown-item command="1">绑定</el-dropdown-item>
          <el-dropdown-item command="2">未绑定</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown split-button type="primary" @command="handleCommand">
        {{ inOutType }}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="all">全部</el-dropdown-item>
          <el-dropdown-item command="in">运动</el-dropdown-item>
          <el-dropdown-item command="leave">休眠</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown split-button type="primary" @command="handleCommand1">
        {{ ids }}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="all">全部</el-dropdown-item>
          <el-dropdown-item command="1">0-25%</el-dropdown-item>
          <el-dropdown-item command="2">25%-50%</el-dropdown-item>
          <el-dropdown-item command="3">50%-75%</el-dropdown-item>
          <el-dropdown-item command="4">75%以上</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      
      <el-button type="primary" icon="el-icon-search" style="margin-left: 20px"
        >查询</el-button
      >
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100%" @selection-change="changeFun">
          <el-table-column prop="" label="" width="50%" type="selection">
        </el-table-column>
        <el-table-column prop="date" label="定位卡号" width="170%">
        </el-table-column>
        <el-table-column prop="name" label="门禁卡号" width="170%">
        </el-table-column>
        <el-table-column prop="province" label="部门" width="150%">
        </el-table-column>
        <el-table-column prop="city" label="绑定对象" width="150%">
        </el-table-column>
        <el-table-column prop="address" label="电量" width="150%">
        </el-table-column>
        <el-table-column prop="zip" label="运动状态" width="150%">
        </el-table-column>
        <el-table-column fixed="right" label="操作" >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >解除绑定</el-button
            >
            <!-- <el-button type="text" size="small">编辑</el-button> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      value1: "",
      inOutType: "运动状态",
      bindState:'绑定状态',
      department:'部门',
      ids: "电量",
      tableData: [
        {
          date: "2016-05-02",
          name: "2016-05-03",
          province: "半挂油车",
          city: "进入",
          address: "车辆",
          zip: '赵四',
          po:'正常'
        },
      ],
    };
  },
  methods: {
      //给多选框赋值
    changeFun(val) {
      this.checkBoxData = val;
      console.log(val);
    },
    handleClick(row) {
      console.log(row);
    },
    handleCommand(key) {
      if (key == "all") {
        this.inOutType = "全部";
      } else if (key == "in") {
        this.inOutType = "进入";
      } else if (key == "leave") {
        this.inOutType = "离开";
      }
    },
    handleCommand1(key) {
      if (key == "all") {
        this.ids = "全部";
      } else if (key == "1") {
        this.ids = "0-25%";
      } else if (key == "2") {
        this.ids = "25%-50%";
      }else if (key == "3") {
        this.ids = "50%-75%";
      }else if (key == "4") {
        this.ids = "75%以上";
      }
    },
     handleCommand2(key) {
      if (key == "all") {
        this.department = "全部";
      } else if (key == "1") {
        this.department = "安环部";
      } else if (key == "2") {
        this.department = "生产部";
      }
    },
    handleCommand3(key) {
      if (key == "all") {
        this.bindState = "全部";
      } else if (key == "1") {
        this.bindState = "绑定";
      } else if (key == "2") {
        this.bindState = "未绑定";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.el-input {
  width: 200px;
  margin-top: 5px;
  margin-left: 5px;
}
.el-dropdown {
  margin-top: 5px;
  margin-left: 25px;
}
.demonstration {
  margin-left: 30px;
}
.el-date-editor--daterange {
  margin-left: 15px;
}
.el-table {
  margin-top: 10px;
}
</style>