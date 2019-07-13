<template>
  <el-row class="menu-card" type="flex" justify="start">
    <el-col  v-for="(o) in 8" :key="o" style="flex:none;" :style="{'margin-left':marginLeft+'px'}">
      <el-card :body-style="{ padding: '0px' }">
        <router-link :to="{name: 'detail', query:{menuId: o}}">
          <img src="http://site.meishij.net/r/52/75/2268802/a2268802_142217122916147.jpg" class="image">
          <div style="padding: 14px;" class="menu-card-detail">
            <strong>好吃的汉堡</strong>
            <span>26 评论</span>
            <em>XXXXX</em>
          </div>
        </router-link>
        
      </el-card>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'menu-card',
  props:{
    marginLeft: {
      type: Number,
      default: 22
    }
  }
}
</script>

<style lang="stylus">
.menu-card 
  flex-wrap wrap
  .el-col-24
    width auto
    margin-bottom 20px
    margin-left: 22px
    
  .menu-card-detail
    > *
      display block
    strong 
      height 24px
      line-height 24px
      font-size 14px
      font-weight bold
      color #333
    span 
      height 26px
      line-height 26px
      font-size 12px
      color #999
    em 
      height 23px
      line-height 23px
      font-size 12px
      color #ff3232
</style>

