<template>
  <div>
    <div>
      <el-button type="primary" plain>新增报警模板</el-button>
      <el-button type="primary" plain>批量删除</el-button>
    </div>
    <div>
      <el-input placeholder="输入模板名称查找" v-model="input1" clearable>
      </el-input>

      <el-dropdown split-button type="primary" @command="handleCommand3">
        {{ templateType }}
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="all">全部</el-dropdown-item>
          <el-dropdown-item command="1">人员报警模板</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      
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
        <el-table-column prop="date" label="模板名称" width="170%">
        </el-table-column>
        <el-table-column prop="name" label="模板内容" width="500%">
        </el-table-column>
        <el-table-column prop="province" label="模板类型" width="150%">
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >修改</el-button
            >
            <el-button type="text" size="small">删除</el-button>
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
      templateType: "模板类型",
      tableData: [
        {
          date: "2016-05-02",
          name: "2016-05-03",
          province: "半挂油车",
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
        this.templateType = "全部";
      } else if (key == "1") {
        this.templateType = "人员报警模板";
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