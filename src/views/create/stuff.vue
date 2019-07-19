<template>
  <div class="stuff">
    <div class="clearfix">
      <div class="raw-item" v-for="(item,index) in raw_material" :key="index" >
        <el-input placeholder="请输入内容" style="width: 200px" v-model="item.name"></el-input>
        <el-input placeholder="请输入内容" style="width: 100px" v-model="item.specs"></el-input>
        <i class="delete-icon el-icon-close" :style="closeStyle" @click="deleteItem(index)"></i>
      </div>
    </div>
    <el-button @click="add" class="eaeaea" type="primary" size="medium" icon="el-icon-plus">增加一项</el-button>
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
  },
  data(){
    return {
      raw_material: (new Array(3)).fill(1).map((item) => {
          return cloneDeep(material_struct)
        }).concat(cloneDeep(this.material))
    }
  },
  computed: {
    closeStyle(){
      return {
        display: this.raw_material.length <= 1 ? 'none' : 'inline-block'
      }
    }
  },
  watch: {
    raw_material: {
      handler(){
        this.$emit('change-material', this.raw_material);
      },
      deep: true,
      immediate: true
    }
  },
  mounted(){
    
  },
  methods: {
    deleteItem(index){
      this.raw_material.splice(index, 1);
    },
    add(){
      this.raw_material.push(cloneDeep(material_struct));
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

