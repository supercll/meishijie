<template>
  <div class="stuff">
    <div class="clearfix">
      <div class="raw-item" v-for="(item,index) in 3" :key="index" >
        <el-input placeholder="请输入内容" style="width: 200px" ></el-input>
        <el-input placeholder="请输入内容" style="width: 100px" ></el-input>
        <i class="delete-icon el-icon-close"></i>
      </div>
    </div>
    <el-button  class="eaeaea" type="primary" size="medium" icon="el-icon-plus">增加一项</el-button>
  </div>
</template>
<script>
import {cloneDeep} from 'lodash';

const material_struct = {
  name: '',
  specs: ''
}

export default {
  props: {
    type: {
      type: String,
      default: 'main' // 主料 main | 辅料 accessories
    },
    material: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="stylus">
.delete-icon 
  background-color #ccc
  border-radius 50%
  color #fff
  :hover
    background: #ff3232;
    color: #fff;
.raw-item
  float left
  margin-right 65px
  margin-bottom 20px
  .el-input 
    margin-right 5px
</style>

