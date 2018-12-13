<template>
  <div id="project">
    <div class="work-title">
      <i class="fa fa-product-hunt fa-2x" /><span>{{$t("message.project")}}</span>
      <hr />
    </div>
    <ul>
      <li>{{$t("message.pc")}}:橙子兄弟官网,武汉城市职业技术学院教务系统</li>
      <li>{{$t("message.h5")}}:城市合伙人系统, 一元秒杀活动</li>
      <li>{{$t("message.app")}}:云南省司法局,云学习助理</li>
      <li>{{$t("message.miniprogram")}} : 小骑手，发券宝</li>
    </ul>
    <ul id="off-web">
      <li>
        <div class="off-name"><a href="http://www.lkkids.com">橙子兄弟官方网站</a></div>
        <div>{{$t("message.pro1")}}</div>
        <div class="key-words">
          <span>flex</span>
          <span>animate.css</span>
          <span>bootstrap</span>
          <span>jquery</span>
          <span>css3</span>
        </div>
      </li>
      <li>
        <div class="off-name"><a href="javascript:;">武汉城市职业技术学院教务系统</a></div>
        <div>{{$t("message.pro2")}}</div>
        <div class="key-words">
            <span>sql</span>
            <span>zui</span>
            <span>jquery</span>
          </div>
      </li>
      <li>
        <div class="off-name"><a href="javascript:;">城市合伙人系统</a></div>
        <div>{{$t("message.pro3")}}</div>
        <div class="key-words">
          <span>vue</span>
          <span>axios</span>
          <span>less</span>
          <span>es6</span>
          <span>webpack</span>
        </div>
      </li>
      <li>
        <div class="off-name"><a href="javascript:;">云学习助理</a></div>
        <div>{{$t("message.pro4")}}</div>
        <div class="key-words">
          <span>app</span>
          <span>Hbuilder</span>
          <span>dcloud</span>
          <span>mui</span>
          <span>canvas</span>
        </div>
      </li>
      <li>
        <div class="off-name"><a href="javascript:;">小骑手</a></div>
        <div>{{$t("message.pro5")}}</div>
         <div class="key-words">
          <span>miniprogram</span>
          <span>蓝牙</span>
          <span>promise</span>
          <span>es6</span>
        </div>
      </li>  
    </ul>
  </div>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
      imgs: ['../src/assets/images/offweb1.jpg',
        '../src/assets/images/offweb2.jpg','../src/assets/images/offweb3.jpg'],
    }
  }
}
</script>
<style lang="stylus" scoped>
#project
  .work-title
    color #2D3649
    span
      font-size 24px
      font-weight 700
    hr
      height 2px
      background #2D3649
  #off-web
    li
      border 1px solid #dddddd
      padding 10px
      box-shadow 0 1px 2px rgba(0, 0, 0, .3)
      margin-top 10px
    .off-name
      padding-top 10px
      font-size 20px
    .key-words 
      margin-top 10px
      display flex
      align-items center
      justify-content space-between
      color #2D3649
</style>

