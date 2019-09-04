<template>
  <div class="menu-detail">
    <detail-header :info="menuInfo"></detail-header>
    <detail-content :info="menuInfo"></detail-content>
    <Comment></Comment>
  </div>
</template>
<script>
import DetailHeader from './detail-header'
import DetailContent from './detail-content'
import Comment from './comment'
import { menuInfo, toggleCollection } from '@/service/api'
export default {
  components: {DetailHeader, DetailContent, Comment}
}
</script>
