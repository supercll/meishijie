<template>
  <section class="detail-content">
    <div class="detail-materials">
      <p class=""><strong>“</strong>冬天吃火锅是最幸福的事。<strong>”</strong></p>
      <h2>用料</h2>
      <div class="detail-materials-box">
        <h3>主料</h3>
        <ul>
          <li class="" v-for="n in 5" :key="n">
            <h4>
              姜
            </h4>
            <span>20克</span>
          </li>
        </ul>
      </div>
    </div>

  </section>
</template>
<style lang="stylus">
.detail-content
  margin-top 20px
  h2 
    font-size: 24px;
    color: #333;
    height: 66px;
    line-height: 66px;
    border-bottom: 1px solid #eee;
    text-indent: 24px;
    font-family: Microsoft Yahei;
    display: block;
  .detail-materials
    background-color #fff
    > p 
      line-height: 24px;
      font-size: 14px;
      padding: 20px 24px 10px;
      color: #666;
    .detail-materials-box
      h3 
        width: 48px;
        height: 22px;
        color: #999;
        background: #f5f5f5;
        border: 1px solid #ddd;
        text-align: center;
        line-height: 24px;
        margin: 14px 5px 14px 25px;
        float: left;
      ul 
        float: left;
        width: 590px;
        li 
          float: left;
          width: 294px;
          border-right: 1px solid #eee;
          height: 54px;
          border-bottom: 1px solid #eee;
</style>

