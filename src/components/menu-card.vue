<template>
  <el-row class="menu-card" type="flex" justify="start">
    <el-col 
      v-for="item in info" 
      :key="item._id" 
      style="flex:none;" 
      :style="{'margin-left':marginLeft+'px'}"
    >
      <el-card :body-style="{ padding: '0px' }">
        <router-link 
          :to="{name: 'detail'}" 
        >
          <img :src="item.product_pic_url" class="image" style="width: 232px;height: 232px;">
          <div style="padding: 14px;" class="menu-card-detail">
            <strong>{{item.title}}</strong>
            <span>26 评论</span>
            <router-link 
              :to="{name: 'space', query:{userId: item.userId}}"
              tag="em"
            >
            {{item.name}}
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
      default:() => [
      {
        "property": {
            "craft": "4-4",
            "flavor": "2-2",
            "hard": "3-3",
            "people": "3-4"
        },
        "_id": "5d615c301d42535eedb84f31",
        "title": "选论很具多文。",
        "product_pic_url": "https://s1.st.meishij.net/r/208/102/1025708/s1025708_156144940220181.jpg",
        "classify": "2-3",
        "userId": "5d613120ac558b4d879824b5",
        "name": "关羽"
      },
      {
        "property": {
            "craft": "1-3",
            "flavor": "4-3",
            "hard": "4-3",
            "people": "3-4"
        },
        "_id": "5d614c0635d5d65ea256ef62",
        "product_pic_url": "http://images.meishij.net/p/20100630/434fc001ead2246d84e3225336c47c0e.jpg",
        "title": "富顺豆花饭",
        "classify": "1-3",
        "userId": "5d613121ac558b4d879824bc",
        "name": "曹丕"
      }
      ]
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

