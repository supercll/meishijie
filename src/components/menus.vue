<template>
  <el-menu :default-active="'0'" class="el-menu-demo" mode="horizontal" @select="handleSelect" :unique-opened='true'>
    <el-menu-item index="1">首页</el-menu-item>
    <el-submenu index="2" :unique-opened='true'>
      <template slot="title">
        <router-link :to="{name: 'recipe'}">菜谱大全</router-link>
      </template>
      <el-submenu 
        :index="item.parent_type" 
        v-for="item in classify" 
        :key="item.parent_type"
        :a="item.parent_type"
        :unique-opened='true'
      >
        <template slot="title">{{item.parent_name}}</template>
        <el-menu-item :unique-opened='true' :a="list.type" :index="list.type"  v-for="list in item.list" :key="list.type">{{list.name}}</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>
<script>
import {getClassify} from '@/service/api'
export default {
  name: 'menus',
  data(){
    return {
      //classify: []
    }
  },
  computed: {
    classify(){
      return this.$store.state.classify;
    }
  },
  methods: {
    handleSelect(key, keyPath){
      if(key == 1){
        this.$router.push({
          name: 'home'
        })
      }
    }
  },
  mounted(){
    this.$store.dispatch('classifyAction')
  }
}
</script>
<style lang="stylus">

</style>


