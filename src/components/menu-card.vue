<template>
  <el-row class="menu-card" type="flex" justify="start">
    <el-col  v-for="(o) in 8" :key="o" style="flex:none;">
      <el-card :body-style="{ padding: '0px' }">
        <img src="http://site.meishij.net/r/52/75/2268802/a2268802_142217122916147.jpg" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <time class="time">123</time>
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>
<style lang="stylus">
.menu-card 
  flex-wrap wrap
  .el-col-24
    width auto
    margin-bottom 20px
    margin-left: 22px
</style>

