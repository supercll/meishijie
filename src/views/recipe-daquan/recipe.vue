<template>
  <div class="recipe">
    <!-- v-model="activeName" -->
    <el-tabs  type="border-card" @tab-click="handleClick">
      <el-tab-pane label="家常菜谱">
        <h3>家常菜谱</h3>
        <div class="recipe-link">
          <a href="" class="active">家常菜</a>
          <a href="">家常菜</a>
          <a href="">家常菜</a>
          <a href="">家常菜</a>
          <a href="">家常菜</a>
        </div>
      </el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    <h2>家常好味道，给你家一般的温暖</h2>
    <el-container>
      <el-aside width="220px" class="recipe-aside">
        <div class="filter-box">
          <h4>筛选</h4>
          <!-- v-model="activeName" -->
          <el-collapse  accordion>
            <el-collapse-item title="一致性 Consistency" name="1">
              <div class="filter-tags">
                <el-tag type="info">标签三</el-tag>
                <el-tag type="info">标签三</el-tag>
                <el-tag type="info">标签三</el-tag>
                <el-tag type="info">标签三</el-tag>
              </div>
            </el-collapse-item>
            <el-collapse-item title="一致性 Consistency" name="2">
                <div class="filter-tags">
                  <el-tag type="info">标签三</el-tag>
                  <el-tag type="info">标签三</el-tag>
                  <el-tag type="info">标签三</el-tag>
                  <el-tag type="info">标签三</el-tag>
                </div>
              </el-collapse-item>
          </el-collapse>
        </div>
      </el-aside>
      <el-main>
        <menu-card :info="meuns"></menu-card>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import MenuCard from '@/components/menu-card.vue'
export default {
  components: {MenuCard},
  data(){
    return {
      meuns: []
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>
<style lang="stylus">
  .recipe-link
    font-size 0;
    margin-top 5px
    a
      display inline-block
      font-size 12px
      padding 0px 8px
      height 28px
      line-height 28px
    .active 
      background #ff3232
      color #fff
  .recipe
    h2 
      text-align center
      line-height 150px
    .el-main
      padding 0
    .filter-box 
      background #fff
      padding 10px
      width 100%
      float left
  .recipe-aside
    
  .filter-tags 
    display flex
    flex-wrap wrap
    justify-content space-around
</style>

