<template>
  <el-menu :default-active="'0'" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">
        <router-link :to="{name: 'recipe'}">菜谱大全</router-link>
      </template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">美食达人</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  name: 'menus',
  methods: {
    handleSelect(key, keyPath){
      console.log(key, keyPath)
      if(key == 1){
        this.$router.push({
          name: 'home'
        })
      }
    }
  }
}
</script>
<style lang="stylus">

</style>


