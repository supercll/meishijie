<template>
  <div class="menu-detail">
    <detail-header :info="menuInfo"></detail-header>
    <detail-content :info="menuInfo"></detail-content>
  </div>
</template>
<script>
import DetailHeader from './detail-header'
import DetailContent from './detail-content'
import { menuInfo, toggleCollection } from '@/service/api'
export default {
  components: {DetailHeader, DetailContent},
  data(){
    return {
      menuInfo: {}
    }
  },
  async mounted(){
    let {menuId} = this.$route.query;
    if(!menuId) {
      this.$message({
        message:'没有对应的菜单',
        type: 'error'
      });
      return;
    }
    const data = await menuInfo({menuId});
    this.menuInfo = data.data.info;
  }
}
</script>
