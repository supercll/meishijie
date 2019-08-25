<template>
  <div class="edit">
    <div class="edit-item">
      <span class="label">修改头像</span>
      <upload-img 
        action="/api/user/avatar"
        :image-url="imageUrl"
        img-max-width="210"
        @res-url="(data) => {imageUrl = data.resImgUrl;}"
      ></upload-img>
      {{imageUrl}}
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
import UploadImg from '@/views/create/upload-img'
export default {
  components: {UploadImg},
  data(){
    return {
      imageUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
    }
  }
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