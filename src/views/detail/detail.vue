<template>
  <div class="menu-detail">
    <detail-header></detail-header>
    <detail-content></detail-content>
  </div>
</template>
<script>
import DetailHeader from './detail-header'
import DetailContent from './detail-content'
export default {
  components: {DetailHeader, DetailContent},
  mounted(){
    let {menuId} = this.$route.query;
    if(!menuId) {
      this.$message({
        message:'没有对应的菜单',
        type: 'error'
      });
      return;
    }
    console.log(menuId)
  }
}
</script>
