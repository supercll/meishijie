<template>
  <div class="waterfall" ref="waterfall">
    <slot></slot>
    <div class="waterfall-loading" v-if="isLoading" ref='loading'>
      <i class="el-icon-loading"></i>
    </div>
  </div>
</template>
<script>
import { throttle } from 'throttle-debounce';
export default {
  name: 'Waterfall',
  data(){
    return {
      isLoading: false
    }
  },
  mounted(){
    // 使用函数节流，在一定时间范围内触发一次，防止频繁的触发带来的性能问题
    this.onScroll = throttle(300, this.scroll.bind(this))
    // 在滚动的过程中
    window.addEventListener('scroll', this.onScroll);
    this.waterfall = this.$refs.waterfall;
  },
  destroyed(){
    this.removeScroll();
  },
  methods: {
    scroll(ev){
      if(this.isLoading) return;
      // 如果元素的底部 < 可视区域的高度，说明进入到可视区域了。
      if(this.waterfall.getBoundingClientRect().bottom < document.documentElement.clientHeight){
        this.isLoading = true;
        // 通知外面已经进入到可视区域了
        this.$emit('view');
      }
    },
    removeScroll(){
      window.removeEventListener('scroll', this.onScroll);
    }
  }
}
</script>
<style lang="stylus">
.waterfall-loading
  width 100%
  height 20px
  text-align center
</style>