<template>
  <div>
    <div>
      <el-button type="primary" plain>批量处理</el-button>
    </div>
    <div>
      <el-input placeholder="姓名/车牌号" v-model="input1" clearable>
      </el-input>

      <el-dropdown split-button type="primary" @command="handleCommand3">
        {{ alarmState }}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="all">全部</el-dropdown-item>
          <el-dropdown-item command="1">报警中</el-dropdown-item>
          <el-dropdown-item command="2">已处理</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-dropdown split-button type="primary" @command="handleCommand2">
        {{ carType }}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="all">全部</el-dropdown-item>
          <el-dropdown-item command="1">大货车</el-dropdown-item>
          <el-dropdown-item command="2">运输车</el-dropdown-item>
          <el-dropdown-item command="3">叉车</el-dropdown-item>
          <el-dropdown-item command="4">轿车</el-dropdown-item>
          <el-dropdown-item command="5">农用车</el-dropdown-item>
          <el-dropdown-item command="6">拖拉机</el-dropdown-item>
          <el-dropdown-item command="7">其他</el-dropdown-item>
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
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        @selection-change="changeFun"
      >
        <el-table-column prop="" label="" width="50%" type="selection">
        </el-table-column>
        <el-table-column prop="date" label="车牌号" width="170%">
        </el-table-column>
        <el-table-column prop="name" label="驾驶员" width="170%">
        </el-table-column>
        <el-table-column prop="province" label="报警信息" width="150%">
        </el-table-column>
        <el-table-column prop="city" label="车辆类型" width="150%">
        </el-table-column>
        <el-table-column prop="address" label="处理时间" width="150%">
        </el-table-column>
        <el-table-column prop="zip" label="报警位置" width="150%">
        </el-table-column>
        <el-table-column prop="a" label="处理时间" width="150%">
        </el-table-column>
        <el-table-column prop="b" label="处理信息" width="150%">
        </el-table-column>
        <el-table-column prop="c" label="状态" width="150%"> </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >处理</el-button
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
      carType: "车辆类型",
      alarmState: "报警状态",
      tableData: [
        {
          date: "2016-05-02",
          name: "2016-05-03",
          province: "半挂油车",
          city: "进入",
          address: "车辆",
          zip: "赵四",
          a: "2020-1-1",
          b: "忽略",
          c: "已处理",
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
    handleCommand3(key) {
      if (key == "all") {
        this.alarmState = "全部";
      } else if (key == "1") {
        this.alarmState = "报警中";
      } else if (key == "2") {
        this.alarmState = "已处理";
      }
    },
    handleCommand2(key) {
      if (key == "all") {
        this.carType = "全部";
      } else if (key == "1") {
        this.carType = "大货车";
      } else if (key == "2") {
        this.carType = "运输车";
      } else if (key == "3") {
        this.carType = "叉车";
      } else if (key == "4") {
        this.carType = "轿车";
      } else if (key == "5") {
        this.carType = "农用车";
      } else if (key == "6") {
        this.carType = "拖拉机";
      } else if (key == "7") {
        this.carType = "其他";
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