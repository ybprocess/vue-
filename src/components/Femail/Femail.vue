<template>
  <div id="wrap9">
    <div class="yanxuan">
      <div class="time">
        <div class="txt">严选限时购</div>
        <div class="jkl">
          <span class="first1">01</span>
          <span>:</span>
          <span class="first1">04</span>
          <span>:</span>
          <span class="first1">19</span>
        </div>
        <div class="uio">下一场 14:00 开始</div>
      </div>
      <div class="back">
        <img src="./images/limitTime/11.png"/>
      </div>
      <div class="mkl"></div>
    </div>
    <div class="fuli">
      <img src="./images/welfare/01.jpg"/>
    </div>
    <div class="mkh"></div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #wrap9
    width 750px
    height 700px
    position relative
    /*background-color yellowgreen*/
    .yanxuan
      width 750px
      height 380px
      position relative
      .time
        width 300px
        height 300px
        /*background-color yellowgreen*/
        position absolute
        bottom 0
        left 50px
        .txt
          color #333
          font-size 40px
          letter-spacing 5px
          margin-left 8px
        .jkl
          margin-top 20px
          .first1
            display inline-block
            width 62px
            height 56px
            background-color #444
            color #fff
            border-radius 34px
            line-height 56px
            text-align center
        .uio
          margin-top 20px
          margin-left 5px
      .back
        width 300px
        height 300px
        /*background-color antiquewhite*/
        position absolute
        top 0
        right 50px
      .mkl
        width 750px
        height 20px
        background-color #ededed
        position absolute
        bottom 0
        left 0
    .fuli
      width 720px
      height 300px
    .mkh
      width 750px
      height 20px
      background-color #ededed


</style>
