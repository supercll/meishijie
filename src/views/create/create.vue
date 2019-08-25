<template>
  <div class="create">
    <h2>欢迎发布新菜谱，先介绍一下你的大作！</h2>
    <section class="create-introduce">
      <h5>标题</h5>
      <el-input class="create-input" placeholder="请输入内容"></el-input>
      <h5>属性</h5>
      <div>
        <el-select
          v-for="item in properties"
          :key="item.parent_type"
          :value="1"
        >
          <el-option
            v-for="option in item.list"
            :key="option.type"
            :label="option.name"
            :value="1"
          >
          </el-option>
        </el-select>
      </div>
      <h5>菜谱分类</h5>
      <div>
        <el-select placeholder="请选择菜谱分类">
          <el-option-group
            v-for="group in classify"
            :key="group.parent_type"
            :label="group.parent_name">
            <el-option
              v-for="item in group.list"
              :key="item.type"
              :label="item.name"
              :value="item.type">
            </el-option>
          </el-option-group>
        </el-select>
      </div>
      <h5>成品图 (328*440)</h5>
      <div class="upload-img-box clearfix">
        <div class="upload-img">
          <upload-img
            action="/api/menu/product/upload"
            :image-url="product_pic_url"
          ></upload-img>
        </div>
        <el-input
          class="introduce-text"
          type="textarea"
          :rows="10"
          placeholder="请输入内容">
        </el-input>
      </div>
    </section>

    <h2>记录所有原材料</h2>
    <section class="create-introduce">
      <h5>主料</h5>
      <Stuff 
        type="main"
      ></Stuff>
      <h5>辅料</h5>
      <Stuff 
        type="accessories"
      ></Stuff>
    </section>

    <h2>开始写步骤了！能否简单易学就看你怎么写了，加油！</h2>
    <section class="create-introduce">
      <Upload 
        v-for="(item) in steps" 
        :key="item.inter_id"
      ></Upload>
      <el-button 
        class="eaeaea add-step-button" 
        type="primary" 
        size="medium" 
        icon="el-icon-plus"
      >增加一步</el-button>
      <h5>烹饪小技巧</h5>
      <el-input
        class="introduce-text"
        type="textarea"
        :rows="8"
        placeholder="分享下你做这道菜的过程中的心得和小技巧吧！">
      </el-input>
    </section>

    <el-button 
      class="send" 
      type="primary" 
      size="medium" 
      :icon="loading_icon"
    >搞定，提交审核</el-button>

  </div>
</template>
<script>
import Stuff from './stuff'
import Upload from './upload'
import UploadImg from './upload-img'
import createMockMenuPublishData from '@/mock/publish'
import properties from "@/mock/properties"
import classify from "@/mock/classify"
import userInfo from '@/mock/userInfo';

const properties_placeholder = { "craft": "请选择工艺", "flavor": "请选择口味", "hard": "请选择难度", "people": "请选择人数" };
const step_struct = {
  img_url: '',
  describe: '',
}
// 向后端发送的数据
const backData = {
  title: '',  // 标题
  product_pic_url: '', // 成品图URL
  product_story: '', // 成品图故事
  property: {
    craft: 0,  // 工艺 enum: [1,2,3,4],
    flavor: 0,  // 口味  enum: [1,2,3,4],
    hard: 0,   // 难度 enum: [1,2,3,4],
    pepole: 0  // pepole 人数: [1,2,3,4],
  },  // 属性
  raw_material: { // 料
    main_material: [{name: '',specs: ''}], // 主料
    accessories_material: [{name: '',specs: ''}], // 辅料
  },
  steps: [{img_url: '',describe: '',}], // 步骤
  classify: '', // 菜谱分类
  skill: '',
}
export default {
  name: 'create',
  components: {Stuff,Upload,UploadImg},
  properties_placeholder,
  data(){
    return {
      title: '',  // 标题
      product_pic_url: '', // 成品图URL
      product_story: '', // 成品图故事
      properties: properties,  // 属性
      raw_material: {
        main_material:[],  // 主料
        accessories_material: [] // 辅料
      },
      product_pic_url: 'https://s1.c.meishij.net/n/images/upload_big_img.png?_=1561906961',
      // 步骤
      steps: Array(3).fill(1).map(item => Object.assign({inter_id: Math.random()}, step_struct)),
      // 小技巧
      skill: '',
      classify: classify,
      loading_icon: ''
    }
  },
  mounted(){
    
  },
  computed:{
    userInfo(){
      return userInfo;
    }
  },
  methods:{
  }
}
</script>
<style lang="stylus">

.create-introduce 
  background-color #fff
  padding 20px

  .add-step-button
    margin-left 100px

.create
  width 100%
  h2
    text-align center
    margin 20px 0
  .send
    // ff3232()
    height: 70px;
    width: 220px;
    background #ff3232
    color #fff
    border none
    margin 20px auto
    display block
    

  h5 
    margin 20px 0

.create-input input
  width 446px
  line-height 22px
.upload-img-box 
  .upload-img
    float left
  .introduce-text
    float left
  .el-textarea
    width 60%
    margin-left 10px



</style>


