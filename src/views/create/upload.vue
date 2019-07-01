<template>
  <div class="step clearfix">
    <div class="step-number">1.</div>
    <div class="upload-box">
      <img src="https://s1.c.meishij.net/n/images/upload_step_img.png" alt="">
    </div>
    <el-input
      class="introduce-text"
      type="textarea"
      :rows="8"
      placeholder="请输入内容">
    </el-input>
  </div>
</template>
<style lang="stylus">
.step
  margin-bottom 20px
  > div
    float left
  .step-number
    height 180px
    width 100px
    font-size 60px
    color #aaa
    font-family Arial, Helvetica, sans-serif
    font-weight bold
    vertical-align top
    line-height 180px
  .introduce-text
    width 60%
    margin-left 40px
  .upload-box
    img 
      vertical-align top
</style>

