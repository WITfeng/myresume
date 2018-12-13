<template>
  <div id="left">
    <img class="user-head" src="../assets/images/header.jpg" />
    <div id="name">{{$t('message.name')}}</div>
    <div id="career">{{$t('message.career')}}</div>
    <div class="base-info">
      <div class="info-title">{{$t('message.info')}}</div>
      <div id="age"><i class="fa fa-calendar"></i>{{$t('message.age')}}</div>
      <div id="sex"><i class="fa fa-user"></i>{{$t('message.sex')}}</div>
      <div id="localtion"><i class="fa fa-map-marker"></i>{{$t('message.location')}}</div>
      <div id="speciality"><i class="fa fa-graduation-cap"></i>{{$t('message.speciality')}}</div>
      <div id="collage"><i class="fa fa-home"></i>{{$t('message.collage')}}</div>
    </div>
    <div class="base-info">
      <div class="info-title">{{$t('message.skills')}}</div>
      <span id="javascript"><img src="../assets/images/javascript.png" />javascript</span>
      <span id="es6"><img src="../assets/images/es6.png" />es6</span>
      <span id="css"><img src="../assets/images/css.png" />css</span>
      <span id="Hbuilder"><img src="../assets/images/h5.png" />Hbuilder</span>
      <span id="vue"><img src="../assets/images/vue.png" />vue</span>
      <span id="jquery"><img src="../assets/images/jQuery.png" />jquery</span>
      <span id="bootstrap"><img src="../assets/images/bootstrap.png" />bootstrap</span>   
      <span id="webpack"><img src="../assets/images/webpack.png" />webpack</span>
      <span id="less"><img src="../assets/images/less.png" />less</span>
      <span id="sass"><img src="../assets/images/sass.png" />sass</span>
      <span id="stylus"><img src="../assets/images/stylus.png" />stylus</span>
      <span id="react"><img src="../assets/images/react.png" />react</span>
    </div>
    <div class="base-info">
      <div class="info-title">{{$t('message.contact')}}</div>
      <div id="phone"><i class="fa fa-phone"/>{{$t('message.phone')}}</div>
      <div id="email"><i class="fa fa-envelope-square"/>{{$t('message.email')}}</div>
      <div id="tencet"><i class="fa fa-qq"/>{{$t('message.qq')}}</div>
      <div id="wechat"><i class="fa fa-wechat"/>{{$t('message.wechat')}}</div>
      <img class="wechat-qcrode" src="../assets/images/wechat.jpg" />
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
#left
  background #2D3649
  width 20%
  min-width 180px
  padding 20px
  color #ffffff
  box-sizing border-box
  i
    margin-right 4px
  .user-head
    border-radius 50%
    width 60%
    margin-left 20%
  #name
    margin-top 10px
    font-size 25px
    text-align center
    font-weight 300
  #career
    font-size 15px
    text-align center
    margin-top 10px
  .base-info
    margin 10px
    text-align left 
    line-height 25px
    color #ffffff
    margin-bottom 25px
    span
      display flex
      align-items center
      justify-content flex-start
      margin-top 5px
      img 
        width 20px
        height 20px
        margin-right 10px
    .info-title
      border 1px solid #ffffff
      padding 5px
      text-align center
    .wechat-qcrode 
      width 80%
      margin-top 10px
</style>
