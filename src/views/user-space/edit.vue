<template>
  <div class="edit">
    <div class="edit-item">
      <span class="label">修改头像</span>
      <upload-img></upload-img>
    </div>
    <div class="edit-item">
      <span class="label">修改头像</span>
      <div>啦啦</div>
    </div>
    <div class="edit-item">
      <span class="label">修改头像</span>
      <div>啦啦</div>
    </div>
  </div>
</template>
<script>
import UploadImg from '@/views/create/upload-img'
export default {
  components: {uploadImg}
}
</script>
<style lang="stylus">
.edit
  height 300px
  background-color #fff
  .edit-item 
    display flex
    .label
      margin-right 10px
</style>