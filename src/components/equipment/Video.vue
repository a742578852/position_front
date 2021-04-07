<template>
  <div>
    <div>
      <el-button type="primary" >+ 新增视频管理</el-button>
    </div>
    
    <div>
      <el-table :data="tableData" border style="width: 100%" >
        <el-table-column prop="date" label="#" width="170%">
        </el-table-column>
        <el-table-column prop="name" label="视频设备名称" width="300%">
        </el-table-column>
        <el-table-column prop="province" label="所在位置" width="300%">
        </el-table-column>
        <el-table-column prop="city" label="视频设备类型" width="300%">
        </el-table-column>
        <el-table-column fixed="right" label="操作" >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >删除</el-button
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