<template>
  <div id="wrap">
     <div class="wraps">
       <a href class="jia"></a>
       <a href class="wang"></a>
       <a href class="look">
         <span class="fir"></span>
         <span class="sec"></span>
       </a>
     </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  #wrap
    width 750px
    background-color #fafafa
    position fixed
    top 0
    left 0
    z-index 100
    .wraps
      width 750px
      height 87px
      position relative
      overflow hidden
      .jia
        width 48px
        display inline-block
        height 44px
        float left
        background-image url("/static/images/xb.png")
        background-position 0 -75px
        background-repeat no-repeat
        margin-top 20px
        margin-left 20px
      .wang
        /*display block*/
        width 172px
        height 54px
        position absolute
        top 0
        left 0
        bottom 0
        right 0
        margin auto
        background-image url("/static/images/xb.png")
        background-position 0 -128px
        background-repeat no-repeat
        background-size 172px 398px
      .look
        float right
        width 128px
        height 64px
        overflow hidden
        margin-top 10px
        .fir
          display inline-block
          width 64px
          height 64px
          background-position (0 -334/$rem)
          background-size (172/$rem 398/$rem)
          background-image url("/static/images/xb.png")
          float left
        .sec
          display inline-block
          width 64px
          height 64px
          background-position 0 0
          background-size 172/$rem 398/$rem
          background-image url("/static/images/xb.png")
          float right
</style>
