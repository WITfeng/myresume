<template>
  <div id="right">
    <button class="exlan" @click="exLanguage">
      <i class="fa fa-exchange"></i>{{$t("message.language")}}
    </button>
    <work></work>
    <Project></Project>
    <Myself></Myself>
  </div>
</template>
<script>
import Work from './work.vue'
import Myself from './myself.vue'
import Project from './project.vue'
export default {
  components:{Work, Myself, Project},
  methods: {
    exLanguage () {
      if(window.localStorage.getItem('language') === 'cn') {
        this.$i18n.locale = 'en'
        window.localStorage.setItem('language', 'en')
      }else {
        this.$i18n.locale = 'cn'
        window.localStorage.setItem('language', 'cn')
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
#right  
  padding 40px
  background #ffffff
  width 80%
  .exlan
    position absolute
    right 10%
    color #2D3649
</style>
