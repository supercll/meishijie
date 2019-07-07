<template>
  <div class="space">
    <h2>欢迎来到我的美食空间</h2>
    <div class="user-info">
      <div class="user-avatar">
        <img src="https://s1.c.meishij.net/images/default/tx2_3.png" alt="">
      </div>
      <div class="user-main">
        <h1>辣手摧js</h1>
        <span class="info">
          <em>2019-06-15加入美食杰</em>
          |
          <a href="">编辑个人资料</a>
        </span>
      </div>
      <ul class="user-more-info">
        <li>
          <a href="">
            <span>关注</span>
            <strong>1</strong>
          </a>
        </li>
        <li>
          <a href="">
            <span>粉丝</span>
            <strong>1</strong>
          </a>
        </li>
        <li>
          <a href="">
            <span>收藏</span>
            <strong>1</strong>
          </a>
        </li>
        <li>
          <a href="">
            <span>发布菜谱</span>
            <strong>1</strong>
          </a>
        </li>
      </ul>
    </div>

    <!-- v-model="activeName" -->
    <el-tabs class="user-nav"  @tab-click="handleClick">
      <el-tab-pane label="作品" name="first"></el-tab-pane>
      <el-tab-pane label="我的粉丝" name="second"></el-tab-pane>
      <el-tab-pane label="我的关注" name="third"></el-tab-pane>
      <el-tab-pane label="收藏" name="fourth"></el-tab-pane>
    </el-tabs>

    <div class="user-info-show">
      <!-- 作品 & 收藏 布局 -->
      <!-- <menu-card :margin-left="13"></menu-card> -->
      <!-- 粉丝 & 关注 布局 -->
      <Fans></Fans>
    </div>

  </div>
</template>
<script>
import MenuCard from '@/components/menu-card.vue'
import Fans from './fans'
export default {
  components: {MenuCard, Fans},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="stylus">
.space
  
  h2
    text-align center
    margin 20px 0
  .user-info
    height 210px
    background-color #fff
    display flex
    .user-avatar
      width 210px
      height 210px
      
      img 
        width 100%
        height 100% 
    .user-main
      width 570px
      padding 20px
      h1
        font-size 24px
        color #333
        line-height 44px
      .info  
        font-size 12px
        line-height 22px
        color #999
        a
          color #999
    .user-more-info
      width 190px
      overflow hidden
      padding-top 20px
      li
        width 81px
        height 81px
        border-radius 32px
        border-bottom-right-radius 0
        margin 0px 8px 8px 0px
        float left
        a
          display block
          height 81px
          width 81px
          box-shadow 0px 0px 6px rgba(0,0,0,0.05) inset
          border-radius 32px
          border-bottom-right-radius 0

          span 
            color #999
            line-height 20px
            display block
            padding-left 14px
            padding-top 14px

          strong 
            display block
            font-size 18px
            color #ff3232
            font-family Microsoft Yahei
            padding-left 14px
            line-height 32px

  .user-nav
    margin 20px 0 20px 0
  .user-info-show
    min-height 300px
    background #fff
    padding-top 20px
  .el-tabs__item.is-active 
    color: #ff3232;
  .el-tabs__active-bar
    background-color: #ff3232;
  .el-tabs__nav-wrap::after
    background-color: transparent;
</style>

