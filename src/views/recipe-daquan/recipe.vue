<template>
  <div class="recipe">
    <!-- v-model="activeName" -->
    <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">

      <el-tab-pane 
        :label="item.parent_name" 
        v-for="item in classify" 
        :key="item.parent_type"
        :name="item.parent_type"
      >
        <h3>{{item.parent_name}}</h3>
        <div class="recipe-link">
          <router-link 
            :to="{name: 'recipe'}" 
            v-for="list in item.list" :key="list.type"
            :class="{active: classify_type === list.type}"
          >{{list.name}}</router-link>
        </div>
      </el-tab-pane>
    </el-tabs>
    <h2>家常好味道，给你家一般的温暖</h2>
    <el-container>
      <el-aside width="220px" class="recipe-aside">
        <div class="filter-box">
          <h4>筛选</h4>
          <!-- v-model="activeName" -->
          <el-collapse v-model="propertiesActvieNames">
            <el-collapse-item 
              v-for="item in properties"
              :key="item.parent_type"
              :title="item.parent_name" 
              :name="item.parent_type"
            >
              <div class="filter-tags">
                <el-tag 
                  type="info" 
                  v-for="option in item.list" 
                  :key="option.type" 
                  @click="selectProperyItem(item,option)"
                  :class="{'tag-selected': item.checkedType === option.type}"
                >
                  {{option.name}}
                </el-tag>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-aside>
      <el-main>
        <menu-card :info='menus'></menu-card>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import MenuCard from '@/components/menu-card.vue'
import {getProperty, getMenus} from '@/service/api'

export default {
  components: {MenuCard},
  data(){
    return {
      activeName: '1',
      classify_type: '',
      properties:[],
      propertiesActvieNames:[],
      menus:[],
      query:{} // 查询条件
    }
  },
  computed: {
    classify(){
      return this.$store.state.classify;
    }
  },
  async mounted(){  // 获取property
    let properties = await getProperty();
    this.properties = properties.data;
  },
  watch: {
    $route: {
      handler(){
        const {query} = this.$route;
        let classify = query.parent_type || "1";
        this.activeName = classify;
        if(query.classify_type) {
          this.classify_type = query.classify_type;
          this.parent_type = query.classify_type[0];
          classify = this.classify_type
        }
        this.getMenusByQuery(this.query = {...this.query, classify})
      },
      immediate: true
    }
  },
  methods: {
    handleClick(tab, event) {
      this.$router.push({
        query:{
          parent_type: this.activeName
        }
      })
    },
    selectProperyItem(item,option){
      console.log(item.checkedType)
      if(option.type === item.checkedType){
        item.checkedType = false;
      }else {
        this.$set(item, 'checkedType', option.type);
      }
      let property = 
      
      this.query = {
        ...this.query,
        property: {
          ...this.query.property,
          [option.title]: option.type
        }
      }
      if(!item.checkedType) {  // 如果没有了，则删除
        delete this.query.property[item.title];
      }
      this.getMenusByQuery(this.query);
    },
    /**  
     * classify 菜单分类，有子级穿子级，没有传父级
     * property:{craft:'4-2',hard: "4-4", flavor, pepole}
     * 可组合传入
    */
    async getMenusByQuery(params){
      let meuns = await getMenus(params);
      this.menus = meuns.data.list;
    }
  }
}
</script>
<style lang="stylus">
  .recipe-link
    font-size 0;
    margin-top 5px
    a
      display inline-block
      font-size 12px
      padding 0px 8px
      height 28px
      line-height 28px
    .active 
      background #ff3232
      color #fff
  .recipe
    h2 
      text-align center
      line-height 150px
    .el-main
      padding 0
    .filter-box 
      background #fff
      padding 10px
      width 100%
      float left
  .filter-tags 
    display flex
    flex-wrap wrap
    justify-content space-around
    .tag-selected
      background-color  #ff3232
      color #fff
</style>

