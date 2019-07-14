<template>
  <div class="login-page">

    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="登录" name="login">
        
      </el-tab-pane>
      <el-tab-pane label="注册" name="second">
        
      </el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
export default {
  data(){
    return {
      activeName: 'login'
    }
  },
  methods: {
    handleClick(){

    }
  }
}
</script>

<style lang="stylus">
.login-page
  width 500px
  height 300px
  background-color #fff
  margin 0 auto
  box-shadow: 0 0 25px #cac6c6;
  border-radius: 10px;
</style>

