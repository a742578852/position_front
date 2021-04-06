<template>
  <div>
    <div>
      <el-button type="primary" plain>+ 新增岗位</el-button>
      <el-button type="primary" plain>+ 批量导入岗位</el-button>
    </div>
    <div>
      <el-table
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column prop="date" label="岗位名称" width="170%">
        </el-table-column>
        <el-table-column prop="name" label="岗位描述" width="500%">
        </el-table-column>
        <el-table-column prop="province" label="人数" width="150%">
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
          name: "0",
          province: "半挂油车",
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