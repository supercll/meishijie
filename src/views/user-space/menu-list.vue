<template>
  <div class="menu-list">
    <!-- <div class="info-empty" v-if="!info.length">
			<div>
				<p>私房菜不要偷偷享用哦~~制作成菜谱与大家分享吧！</p>
        	<a href="">发布菜单</a>
			</div>
		</div>
    <div class="info-empty" v-if="!info.length">
			<div>
				<p>还没有发布作品</p>
			</div>
		</div> -->
    <menu-card  v-if="info.length" :margin-left="13" :info="info"></menu-card>
  </div>
  
</template>
<script>
import MenuCard from '@/components/menu-card.vue'
export default {
  components: {MenuCard},
  props: {
    info:{
      type: Array,
      default: () => []
    }
  }
}
</script>
