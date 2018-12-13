<template>
  <div id="app">
    <div id="cover"></div>
    <div id="content">
      <left></left>
      <right></right>
    </div>
  </div>
</template>
<script>
import Left from './components/left.vue'
import Right from './components/right.vue'
export default {
  components:{Left,Right}
}
</script>
<style lang="stylus" scoped>
  #app{
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    overflow scroll
    #cover{
      position fixed
      left 0
      right 0
      top 0
      bottom 0
      background-color #999
      opacity .7
      z-index -1
    }
    #content {
      width 90%
      margin-left 5%
      margin-right 5%
      margin-top 50px
      margin-bottom 50px
      display flex 
      justify-content flex-start
      align-items stretch
    }
  }
</style>
