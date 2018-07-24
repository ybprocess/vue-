<template>
  <div id="wrap8">
     <div class="title">
       <div class="line"></div>
       更多精彩
       <div class="line1"></div>
     </div>
     <div class="content" v-for="(item, index) in findMore" :key="index">
       <div class="bgc">
         <img :src="item.itemPicUrl" alt="">
       </div>
       <div class="txt">{{item.subtitle}}</div>
     </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed : {
      ...mapState(['findMore'])
    },
    mounted () {
      this.$store.dispatch('getMore')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #wrap8
    width 100%
    background-color rgba(0,0,0,0.2)
    .title
      width 690px
      height 140px
      margin-left 30px
      text-align center
      line-height 140px
      font-size 30px
      color #333
      position relative
      .line
        width 260px
        height 2px
        background-color rgba(221,153,153,0.6)
        position absolute
        top 50%
        left 0
      .line1
        width 260px
        height 2px
        background-color rgba(221,153,153,0.6)
        position absolute
        top 50%
        right 0
    .content
      width 690px
      height 500px
      margin-left 30px
      background-color #fff
      margin-bottom 20px
      border .1px solid #fff
      .bgc
        width 642px
        height 360px
        margin-left 25px
        margin-top 25px
        img
          width 100%
          height 100%
      .txt
        width 642px
        height 90px
        line-height 45px
        text-align left
        margin-left 25px
        font-size 28px
        text-overflow ellipsis
        color #333
</style>
