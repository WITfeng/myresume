<template>
  <div id="work">
    <div id="work-experience">
      <div class="work-title">
        <i class="fa fa-laptop fa-2x" /><span>{{$t("message.work")}}</span>
        <hr />
      </div>
      <ul class="work-list">
        <li>
          <a href="http://www.lkkids.com">橙子兄弟科技有限公司（2017.3~至今）</a>
          <br />
          {{$t("message.work1")}}
        </li>
        <br />
        <li>
          <a href="http://www.newhb.com">武汉新宏博科技有限公司（2016.5~2017.3）</a>
          <br />
          {{$t("message.work2")}}
        </li>
        <br />
        <!-- <li>
          <a href="http://www.qixiaokeji.com">七啸网络科技有限公司（2016.2~2017.4）实习</a>
          <br />
          {{$t("message.work3")}}
        </li> -->
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
#work
  .exlan
    position absolute
    right 10%
    color #2D3649
  i 
    margin-right 4px
  .work-title
    color #2D3649
    span
      font-size 24px
      font-weight 700
    hr
      height 2px
      background #2D3649
</style>
