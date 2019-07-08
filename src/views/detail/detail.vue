<template>
  <div class="menu-detail">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <detail-header></detail-header>
    <detail-content></detail-content>
  </div>
</template>
<script>
import DetailHeader from './detail-header'
import DetailContent from './detail-content'
export default {
  components: {DetailHeader, DetailContent}
}
</script>
