<template>
  <div id="app">
    
    <el-container>
      <Header></Header>
      <el-main>
        <div class="main">
          <!-- <Recipe></Recipe> -->
          <!-- <Create></Create> -->
          <Space></Space>
        </div>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
    
  </div>
</template>
<script>
import Header from '@/components/header'
import Recipe from '@/views/recipe-daquan/recipe'
import Create from '@/views/create/create'
import Space from '@/views/user-space/space'
export default {
  components: {
    Header,
    Recipe,
    Create,
    Space
  }
}
</script>

<style lang="stylus">
* 
  margin 0
  padding 0
body 
  background: #fae8c8;
.main
  width 990px
  margin 0 auto;
</style>
