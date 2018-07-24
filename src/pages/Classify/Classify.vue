<template>
  <div id="wrap">
    <div class="top">
      购物车
    </div>
    <div class="top_j">
      <ul class="list">
        <li class="child">30天无忧退货</li>
        <li class="child">48小时快速退款</li>
        <li class="child">满88免邮费</li>
      </ul>
    </div>
    <div class="middle">
      <div class="middle_ware">
        <div class="shop">
          <img src="./images/shopcart.png"/>
        </div>
        <div class="text">
          购物车空空如也
          <a class="div0" @click="login">
            登陆
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods : {
      login () {
        this.$router.replace('/person')
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #wrap
    width 100%
    height 100%
    .top
      width 750px
      height 88px
      line-height 88px
      text-align center
      font-size 38px
      position absolute
      top 0
      left 0
      z-index 100
      background-color #fff
    .top_j
      width 750px
      height 70px
      z-index 100
      position absolute
      top 88px
      left 0
      .list
        width 750px
        height 70px
        list-style-type circle
        line-height 70px
        .child
          float left
          width 210px
          height 24px
          margin-left 40px
    .middle
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      background-color #f4f4f4
      .middle_ware
        position absolute
        top 0
        left 0
        bottom 0
        right 0
        margin auto
        width 750px
        height 300px
        /*background-color bisque*/
        text-align center
        .text
          font-size 28px
          color #7f7f7f
          margin-top -15px
          position relative
          .div0
            display block
            width 480px
            height 92px
            background-color #b4282d
            line-height 92px
            font-size 35px
            color #fff
            position absolute
            top 100%
            left 18%
            margin-top 30px








</style>
