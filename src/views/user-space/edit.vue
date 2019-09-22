<template>
  <div class="edit">
    <div class="edit-item">
      <span class="label">修改头像</span>
      <upload-img></upload-img>
    </div>
    <div class="edit-item">
      <span class="label">修改名称</span>
      <div>
        <el-input class="create-input" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="edit-item">
      <span class="label">个人简介</span>
      <div>
        <el-input type="textarea" class="create-input" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div>
      <el-button 
      class="send" 
      type="primary" 
      size="medium"
    >保存</el-button>
    </div>
  </div>
</template>
<script>
import UploadImg from '@/components/upload-img'
export default {
  components: {UploadImg}
}
</script>
<style lang="stylus">
.edit
  background-color #fff
  padding 10px 0 20px 20px
  .edit-item 
    display flex
    margin-bottom 20px
    .label
      margin-right 10px
</style>