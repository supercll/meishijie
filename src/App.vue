<template>
  <div id="app">
    
    <el-container>
      <Header></Header>
      <el-main>
        <div class="main">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
    
  </div>
</template>
<script>
import Header from '@/components/header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="stylus">
body 
  background: #fae8c8;
.main
  width 990px
  margin 0 auto;
</style>
