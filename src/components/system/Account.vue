<template>
  <div>
    <div>
      <span style="margin-left: 20px">查找账户：</span>
      <el-input placeholder="输入账户名/姓名查找" v-model="input1" clearable>
      </el-input>
      <el-button type="primary" icon="el-icon-search" style="margin-left: 20px"
        >查询</el-button
      >
    </div>
    
    <div>
      <el-table :data="tableData" border style="width: 100%" >
        <el-table-column prop="date" label="账户名" width="220%">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="220%">
        </el-table-column>
        <el-table-column prop="date" label="部门" width="220%">
        </el-table-column>
        <el-table-column prop="date" label="角色名" width="220%">
        </el-table-column>
        <el-table-column prop="date" label="是否可用" width="220%">
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