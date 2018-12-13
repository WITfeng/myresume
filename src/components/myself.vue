<template>
  <div id="myself">
    <div class="work-title">
      <i class="fa fa-id-badge fa-2x" /><span>{{$t("message.myself")}}</span>
      <hr />
    </div>
    <ul>
      <li>{{$t("message.myself1")}}</li>
      <li>{{$t("message.myself2")}}</li>
      <li>{{$t("message.myself3")}}</li>
      <li>{{$t("message.myself4")}}</li>
      <li>{{$t("message.myself5")}}</li>
      <li>{{$t("message.myself6")}}件</li>
      <li>{{$t("message.myself7")}}</li>
      <li>{{$t("message.myself8")}}</li>
      <li>{{$t("message.myself9")}}</li>
      <li>{{$t("message.myself10")}}</li>
      <li>{{$t("message.myself11")}}</li>
      <li>{{$t("message.myself12")}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
#myself
    margin-top 20px
    .work-title
      color #2D3649
      span
        font-size 24px
        font-weight 700
      hr
        height 2px
        background #2D3649
</style>
