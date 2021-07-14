<template>
  <div>
    <div>
      <el-button type="primary" plain>+ 添加访客</el-button>
      <el-button type="primary" plain>+ 添加车辆</el-button>
    </div>
    <div style="display:flex;justify-content: space-around;">
      <el-input placeholder="姓名/车牌号/电话" v-model="input1" clearable>
      </el-input>
      <el-dropdown split-button type="primary" @command="handleCommand">
        {{ inOutType }}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="all">全部</el-dropdown-item>
          <el-dropdown-item command="in">进入</el-dropdown-item>
          <el-dropdown-item command="leave">离开</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown split-button type="primary" @command="handleCommand1">
        {{ ids }}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="all">全部</el-dropdown-item>
          <el-dropdown-item command="visitor">访客</el-dropdown-item>
          <el-dropdown-item command="cars">车辆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div>
      <span class="demonstration">时间:</span>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
      </div>
      <el-button type="primary" icon="el-icon-search" style="margin-left: 20px"
        >查询</el-button
      >
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column fixed type="index" label="序号" width="90%" style="border-right:1px solid">
        </el-table-column>
        <el-table-column prop="date" label="进入时间" width="170%">
        </el-table-column>
        <el-table-column prop="name" label="离开时间" width="170%">
        </el-table-column>
        <el-table-column prop="province" label="访客/车辆名称" width="150%">
        </el-table-column>
        <el-table-column prop="city" label="进出类型" width="150%">
        </el-table-column>
        <el-table-column prop="address" label="身份" width="150%">
        </el-table-column>
        <el-table-column prop="zip" label="驾驶员" width="150%">
        </el-table-column>
        <el-table-column prop="po" label="定位卡状态" width="150%">
        </el-table-column>
        <el-table-column fixed="right" label="操作" >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
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
      inOutType: "进出类型",
      ids: "身份",
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
      } else if (key == "visitor") {
        this.ids = "访客";
      } else if (key == "cars") {
        this.ids = "车辆";
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