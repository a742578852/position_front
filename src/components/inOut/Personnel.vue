<template>
  <div>
    <div>
      <el-input placeholder="请输入sn/mac/id" v-model="input1" clearable>
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
          <el-dropdown-item command="visitor">一车间</el-dropdown-item>
          <el-dropdown-item command="cars">二车间</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="demonstration">时间:</span>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
      <el-button type="primary" icon="el-icon-search" style="margin-left: 20px"
        >查询</el-button
      >
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100%" @selection-change="changeFun">
        <el-table-column prop="" label="" width="50%" type="selection">
        </el-table-column>
        <el-table-column fixed type="index" label="序号" width="90%" >
        </el-table-column>
        <el-table-column prop="date" label="姓名" width="150%" >
        </el-table-column>
        <el-table-column prop="name" label="进出类型" width="150%">
        </el-table-column>
        <el-table-column prop="province" label="定位卡sn" width="200%">
        </el-table-column>
        <el-table-column prop="city" label="闸机mac" width="200%">
        </el-table-column>
        <el-table-column prop="address" label="区域" width="200%">
        </el-table-column>
        <el-table-column prop="zip" label="门禁卡id" width="200%">
        </el-table-column>
        <el-table-column prop="" label="时间" >
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
      ids: "区域",
      tableData: [
        {
          date: "2016-05-02",
          name: "2016-05-03",
          province: "半挂油车",
          city: "进入",
          address: "车辆",
          zip: '赵四',
        },
        {
          date: "2016-05-02",
          name: "2016-05-03",
          province: "半挂油车",
          city: "进入",
          address: "车辆",
          zip: '赵四',
        },
      ],
      checkBoxData: [],    //多选框选择的值
    };
  },
  methods: {
    //给多选框赋值
    changeFun(val) {
            this.checkBoxData = val;
            console.log(val)
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
      } else if (key == "visitor") {
        this.ids = "一车间";
      } else if (key == "cars") {
        this.ids = "二车间";
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
.cell {
  border-right: 1px solid;
}
</style>