<template>
  <el-row class="menu-card" type="flex" justify="start">
    <el-col 
      v-for="item in info" 
      :key="item._id" 
      style="flex:none;" 
      :style="{'margin-left':marginLeft+'px'}"
    >
      <el-card :body-style="{ padding: '0px' }">
        <router-link>
          <img src="" class="image" style="width: 232px;height: 232px;">
          <div style="padding: 14px;" class="menu-card-detail">
            <strong>测试</strong>
            <span>0 评论</span>
            <router-link>
            测试
            </router-link>
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
    },
    info:{
      type: Array,
      default:() => []
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

