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
    this.onScroll = throttle(300, this.scroll.bind(this))
    window.addEventListener('scroll', this.onScroll);
    this.waterfall = this.$refs.waterfall;
  },
  destroyed(){
    this.removeScroll();
  },
  methods: {
    scroll(ev){
      if(this.isLoading) return;
      if(this.waterfall.getBoundingClientRect().bottom < document.documentElement.clientHeight){
        this.isLoading = true;
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