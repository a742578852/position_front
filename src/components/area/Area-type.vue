<template>
  <div>
    <div>
      <el-button type="primary" >+ 新增区域类型</el-button>
      <el-button type="danger" >批量删除</el-button>
      <span style="margin-left: 20px">查找区域：</span>
      <el-input placeholder="区域类型" v-model="input1" clearable>
      </el-input>
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