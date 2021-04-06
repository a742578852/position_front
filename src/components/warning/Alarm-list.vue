<template>
  <div>
    <div>
      <el-button type="primary" plain @click="area">区域人员报警</el-button>
      <el-button type="primary" plain @click="car">车辆报警</el-button>
      <el-button type="primary" plain @click="work">作业报警</el-button>
    </div>
    <div>
        <my-area v-if="this.isShow==1"></my-area>
        <my-car v-else-if="this.isShow==2"></my-car>
        <my-work v-else-if="this.isShow==3"></my-work>
        <my-area v-else></my-area>
    </div>
  </div>
</template>

<script>
import MyArea from './Area_alarm'
import MyCar from './Car-alarm'
import MyWork from './Work-alarm'
export default {
    data() {
        return {
            isShow: 1
        }
    },
    components: {
        MyArea,
        MyCar,
        MyWork
    },
    methods: {
        area() {
            this.isShow = 1
        },
        car(){
            this.isShow = 2
        },
        work(){
            this.isShow = 3
        }
    },
};
</script>

<style lang="scss" scoped>
</style>