<template>
  <div class="person">
    <div class="top">
      <a href class="jia"></a>
      <a href class="wang"></a>
      <a href class="look">
        <span class="fir"></span>
        <span class="sec"></span>
      </a>
    </div>
    <div class="bottom">
      <div class="logo">
        <div class="img"></div>
        <div class="phone" @click="jump">
          <div class="group">
            <span class="phone_x"></span>
            <span class="nub">手机号码登陆</span>
          </div>
        </div>
        <div class="mail">
          <div class="group">
            <span class="phone_x"></span>
            <span class="nub">邮箱账号登陆</span>
          </div>
        </div>
        <div class="regist">手机号快速注册
          <img src="./images/right.png"/>
        </div>
      </div>
      <div class="login">
        <div class="wchat">
          <img src="./images/wechat.png"/>
          <span class="span0">微信</span>
        </div>
        <div class="qq">
          <img src="./images/qq.png"/>
          <span class="span0">微信</span>
        </div>
        <div class="wei">
          <img src="./images/weibo.png"/>
          <span class="span0">微信</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods : {
      jump () {
        this.$router.replace('/login')
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .person
    width 750px
    height 1334px

    .top
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
    .bottom
      width 750px
      height 1246px
      background-color #f2f5f4
      position relative
      .logo
        width 750px
        height 700px
        position relative
        .img
          width 750px
          height 410px
          background-image url("/static/images/logo1.png")
          background-repeat no-repeat
          background-size 268px 90px
          background-position center
        .phone
          width 670px
          height 94px
          background-color #b4282d
          position absolute
          top 60%
          left 5%
          border-radius 8px
          text-align center
          line-height 94px
          .group
            position absolute
            top 0
            left 35%
            overflow hidden
            .phone_x
              display block
              background-image url("/static/images/xb1.png")
              background-position 0 -50px
              width 40px
              height 40px
              float left
              margin-top 25px
              margin-right 10px
            .nub
              float left
              color #fff
              font-size 30px
              .login
                width 750px
                height 290px
        .mail
          width 668px
          height 92px
          border 1px solid #b4282d
          position absolute
          top 78%
          left 5%
          border-radius 8px
          text-align center
          line-height 94px
          .group
            position absolute
            top 0
            left 35%
            overflow hidden
            .phone_x
              display block
              background-image url("/static/images/xb1.png")
              background-position 0 0
              width 40px
              height 40px
              float left
              margin-top 25px
              margin-right 10px
            .nub
              float left
              color #b4282d
              font-size 30px
              .login
                width 750px
                height 290px
        .regist
          position absolute
          top 97%
          left 35%
          font-size 30px
      .login
        width 750px
        height 40px
        position absolute
        left 0
        bottom 6%
        overflow hidden
        text-align center
        /*text-align center*/

        .wchat
          width 184px
          height 40px
          text-align center
          border-right 1px solid #979797
          display inline-block
          img
            vertical-align middle
          .span0
            vertical-align middle
            font-size 30px
        .qq
          width 184px
          height 40px
          text-align center
          border-right 1px solid #979797
          display inline-block
          img
            vertical-align middle
          .span0
            vertical-align middle
            font-size 30px
        .wei
          width 184px
          height 40px
          text-align center
          display inline-block
          img
            vertical-align middle
          .span0
            vertical-align middle
            font-size 30px

          /*line-height 40px*/

        /*margin auto*/

          /*margin auto*/
</style>
