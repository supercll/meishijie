<template>
  <div class="home">
    <el-carousel :interval="5000" type="card" height="300px">
      <el-carousel-item v-for="item in 6" :key="item">
        <img src="https://s1.st.meishij.net/rs/208/102/1025708/n1025708_156144944939153.jpg" width="100%" height="300px" alt="">
      </el-carousel-item>
    </el-carousel>
    <div>
      <h2>内容精选</h2>
      <!-- :info='info' -->
      <menu-card :margin-left="13"></menu-card>
    </div>
  </div>
</template>

<script>
import MenuCard from '@/components/menu-card.vue'

export default {
  name: 'home',
  components: {
    MenuCard
  },
  data(){
    return {
      info: []
    }
  }
}
</script>
<style lang="stylus">
.home 
  h2
    text-align center
    padding 20px 0;

  .el-carousel__item h3 
    color #475669
    font-size 14px
    opacity 0.75
    line-height 200px
    margin 0
  

  .el-carousel__item:nth-child(2n) 
    background-color #99a9bf
  

  .el-carousel__item:nth-child(2n+1) 
    background-color #d3dce6
  
</style>

