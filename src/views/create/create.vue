<template>
  <div>
    <h2>欢迎发布新菜谱，先介绍一下你的大作！</h2>
    <section class="create-introduce">
      <h5>标题</h5>
      <el-input class="create-input" placeholder="请输入内容"></el-input>
      <h5>自媒体标题</h5>
      <el-input class="create-input" placeholder="请输入内容"></el-input>
      <h5>属性</h5>
      <div>
        <el-select v-model="value" placeholder="请选择" v-for="n in 3"
            :key="n">
          <el-option
            v-for="item in 10"
            :key="item"
            :label="item"
            :value="item">
          </el-option>
        </el-select>
      </div>
      <h5>成品图 (328*440)</h5>
      <div class="upload-img-box clearfix">
        <div class="upload-img">
          <img src="https://s1.c.meishij.net/n/images/upload_big_img.png?_=1561906961" />
        </div>
        <el-input
          class="introduce-text"
          type="textarea"
          :rows="10"
          placeholder="请输入内容">
        </el-input>
      </div>
    </section>

    <h2>记录所有原材料</h2>
    <section class="create-introduce">
      <h5>主料</h5>
      <Stuff></Stuff>
      <h5>辅料</h5>
      <Stuff></Stuff>
    </section>

  </div>
</template>
<script>
import Stuff from './stuff'
export default {
  components: {Stuff}
}
</script>
<style lang="stylus">
.create-introduce 
  background-color #fff
  padding 20px

  h5 
    margin 20px 0

.create-input input
  width 446px
  line-height 22px
.upload-img-box 
  .upload-img
    float left
  .introduce-text
    float left
  .el-textarea
    width 60%
    margin-left 10px


</style>


