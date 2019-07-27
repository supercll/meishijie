<template>
  <div class="space">
    <h2>欢迎来到我的美食空间</h2>
    <div class="user-info">
      <div class="user-avatar">
        <img :src="userInfo.avatar" alt="">
      </div>
      <div class="user-main">
        <h1>{{userInfo.name}}</h1>
        <span class="info">
          <em>{{userInfo.createdAt}}加入美食杰</em>
          |
          <a href="">编辑个人资料</a>
        </span>
        <div class="tools" v-if="!isOwner">
				  <a href="javascript:;" 
            :class="{
              'follow-at': !userInfo.isFollowing,
              'no-follow-at': userInfo.isFollowing
            }"
            @click="follow"
          > {{userInfo.isFollowing ? '已关注' : '+关注'}} </a>			
				  <!-- <a href="javascript;" class="no-follow-at"> 已关注 </a>			 -->
        </div>
      </div>

      <ul class="user-more-info">
        <li>
          <a href="">
            <span>关注</span>
            <strong>{{userInfo.following_len}}</strong>
          </a>
        </li>
        <li>
          <a href="">
            <span>粉丝</span>
            <strong>{{userInfo.follows_len}}</strong>
          </a>
        </li>
        <li>
          <a href="">
            <span>收藏</span>
            <strong>{{userInfo.collections_len}}</strong>
          </a>
        </li>
        <li>
          <a href="">
            <span>发布菜谱</span>
            <strong>{{userInfo.work_menus_len}}</strong>
          </a>
        </li>
      </ul>
    </div>

    <!-- v-model="activeName" -->
    <el-tabs v-model="activeName" class="user-nav"  @tab-click="handleClick">
      <el-tab-pane label="作品" name="works"></el-tab-pane>
      <el-tab-pane label="粉丝" name="fans"></el-tab-pane>
      <el-tab-pane label="关注" name="following"></el-tab-pane>
      <el-tab-pane label="收藏" name="collection"></el-tab-pane>
    </el-tabs>

    <div class="user-info-show">
      <!-- 作品 & 收藏 布局 -->
      <!-- <menu-card :margin-left="13"></menu-card> -->
      <!-- 粉丝 & 关注 布局 -->
      <!-- <Fans></Fans> -->
      <router-view :info="info"></router-view>
    </div>

  </div>
</template>
<script>
import MenuCard from '@/components/menu-card.vue'
import Fans from './fans'
import { userInfo, getMenus, toggleFollowing, following } from '@/service/api'

const getOtherInfo = {
  async works(params){  // 作品
    return (await getMenus(params)).data;
  },
  async following(params){  // 关注
    return (await following(params)).data;
  }
}

export default {
  components: {MenuCard, Fans},
  data(){
    return {
      activeName: 'works',
      isOwner: true,  // 是否是自己
      currentUserId: '',
      userInfo: {
        avatar: "",
        collections_len: 0,
        createdAt: "",
        following_len: 0,
        follows_len: 0,
        name: "",
        work_menus_len: 0,
        isFollowing: false,
        _id:''
      },
      info:[],
      getInfoUserId: '' // 需要获取的用户id
    }
  },
  async mounted(){
    
    
  },
  computed: {
    // userInfo(){
    //   return this.$store.state.userInfo;
    // }
  },
  watch: {
    $route: {
      async handler(){
        if(this.activeName !== this.$route.name){
          this.activeName = this.$route.name;
          
        }
        await this.getUserInfo();
        await this.getActiveNameData();
      },
      immediate: true
    },
  },
  methods: {
    async handleClick(tab, event) {
      const {name} = tab;
      this.$router.push({
        name: name,
        query: {
          ...this.$route.query
        }
      })
    },
    async getUserInfo(){
      let {userId} = this.$route.query;
      this.userId = this.$store.state.userInfo._id;
      if(!userId){
        userId = this.userId;
      }
      this.isOwner = userId === this.userId; // 是否是自己
      this.currentUserId = userId;
      // 如果不是自己，获取userInfo
      if(this.getInfoUserId !== userId) {
        console.log(1111111)
        let data = await userInfo({userId});
        this.userInfo = data.data;
      }
      this.getInfoUserId = userId;
    },
    async getActiveNameData(){
      console.log('this.getInfoUserId', this.getInfoUserId)
      let menuList = await getOtherInfo[this.activeName]({userId: this.getInfoUserId});
      this.info = menuList.list;
    },
    async follow(){ // 关注
      let data = await toggleFollowing({followUserId: this.userInfo._id});
      this.userInfo.isFollowing = data.data.isFollowing;
      this.userInfo.follows_len = data.data.follows_len;
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
      position relative
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
      .tools 
        position absolute
        right 20px
        top 20px
        vertical-align top;
        a
          display inline-block
          padding 3px 0
          width 50px
          color #fff
          text-align center
        a.follow-at
          background-color  #ff3232
        a.no-follow-at 
          background-color #999
          
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
    .info-empty
      width 100% 
      min-height inherit
      display flex
      align-items center
      justify-content:center;
      p 
        text-align center
        font-size 12px
      a 
        text-align center
        display block
        height 48px
        width 200px
        line-height 48px
        font-size 14px
        background #ff3232
        color #fff
        font-weight bold
        margin 0px auto
  .el-tabs__item.is-active 
    color: #ff3232;
  .el-tabs__active-bar
    background-color: #ff3232;
  .el-tabs__nav-wrap::after
    background-color: transparent;
</style>

