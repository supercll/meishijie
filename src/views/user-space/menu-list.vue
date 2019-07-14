<template>
  <div class="menu-list">
    <div class="info-empty">
			<div>
				<p>私房菜不要偷偷享用哦~~制作成菜谱与大家分享吧！</p>
				<a href="">发布菜单</a>
			</div>
		</div>
    <menu-card :margin-left="13"></menu-card>
  </div>
  
</template>
<script>
import MenuCard from '@/components/menu-card.vue'
export default {
  components: {MenuCard}
}
</script>
