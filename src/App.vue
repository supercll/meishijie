<template>
  <div id="app">
    
    <el-container>
      <Header></Header>
      <el-main>
        <div class="main">
          <Recipe></Recipe>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
    
  </div>
</template>
<script>
import Header from '@/components/header'
import Recipe from '@/views/recipe-daquan/recipe'
export default {
  components: {
    Header,
    Recipe
  }
}
</script>

<style lang="stylus">
@import "./assets/css/index.styl";
@import "./assets/css/over-write.styl";

* 
  margin 0
  padding 0
body 
  background: #fae8c8;
.main
  width 990px
  margin 0 auto;
</style>
