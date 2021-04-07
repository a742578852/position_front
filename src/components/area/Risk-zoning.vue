<template>
  <div>
    <div>
      <el-button type="primary" >+ 新增风险区域</el-button>
      <el-button type="primary" >+ 新增两单三卡</el-button>
      <span style="margin-left: 20px">查找区域：</span>
      <el-input placeholder="区域类型" v-model="input1" clearable>
      </el-input>
      <el-dropdown split-button type="primary" @command="handleCommand">
        {{ risk }}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="all">全部</el-dropdown-item>
          <el-dropdown-item command="1">重大风险</el-dropdown-item>
          <el-dropdown-item command="2">一般风险</el-dropdown-item>
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
          <el-table-column  type="index" label="序号" width="90%" >
        </el-table-column>
        <el-table-column prop="date" label="区域类型" width="200%">
        </el-table-column>
        <el-table-column prop="name" label="报警内容" width="1000%">
        </el-table-column>
        <el-table-column fixed="right" label="操作" >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >删除</el-button
            >
            <el-button type="text" size="small">修改</el-button>
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
      risk:'风险等级',
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
        this.risk = "全部";
      } else if (key == "1") {
        this.risk = "重大风险";
      } else if (key == "2") {
        this.risk = "一般风险";
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