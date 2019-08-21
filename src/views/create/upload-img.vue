<template>
  <el-upload
    class="avatar-uploader"
    :action="action"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
    >
    <img :src="url" />
  </el-upload>
</template>
<script>
export default {
  props:{
    action: String,
    maxSize: {
      type: Number,
      default: 2
    }, // 2M
    imageUrl: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      url: this.imageUrl
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      if(res.code === 1){
        this.$message({
          message: res.mes,
          type: 'warning'
        });
        return;
      }
      this.url = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < this.maxSize;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
  }
}
</script>