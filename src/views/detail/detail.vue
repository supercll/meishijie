<template>
  <div class="menu-detail">
    <detail-header :info="menuInfo"></detail-header>
    <detail-content :info="menuInfo"></detail-content>
  </div>
</template>
<script>
import DetailHeader from './detail-header'
import DetailContent from './detail-content'
export default {
  components: {DetailHeader, DetailContent},
  data(){
    return {
      menuInfo: {}
    }
  }
}
</script>
