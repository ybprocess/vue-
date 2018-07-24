<template>
  <div class="login">
    <div class="top">
      <a href class="jia"></a>
      <a href class="wang"></a>
      <a href class="look">
        <span class="fir"></span>
        <span class="sec"></span>
      </a>
    </div>
    <div class="middle">
      <div class="inner">
        <div class="as">
          <img src="./images/logo.png"/>
        </div>
        <div class="txt">
          <div class="in">
            <input type="text" class="inp" placeholder="请输入手机号" v-model="phone" maxlength="11"/>
          </div>
          <div class="on">
            <input type="password" class="onp" placeholder="请输入密码" maxlength="6"/>
            <div class="circle"  @click="fgh">{{number>0  ? `已发送${number}s` : '请输入验证码'}}</div>
            <h1 ref="text"></h1>
          </div>
        </div>
        <div class="login">
          <div class="phone">
            <div class="group" >
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
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        phone : '',
        number : 0
      }
    },
    methods : {
      fgh () {
        this.isRight = /^1\d{10}$/.test(this.phone)
        this.$refs.text.textContent = this.phone ? (this.isRight ? '' : '手机号格式错误'):'输入手机号'
        if(this.phone) {
          if(this.number===0){
            this.number=30
            const Timer=setInterval(() => {
              this.number--
//            console.log(this.number)
              if(this.number<=0){
                clearInterval(Timer)
              }
            },1000)
          }
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .login
    width 750px
    height 100%
    position absolute
    top 0
    bottom 0
    .top
      width 750px
      height 87px
      position relative
      overflow hidden
      background-color #fafafa
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
    .middle
      width 750px
      height 916px
      position relative
      .inner
        width 750px
        height 100%
        position absolute
        top 16%
        left 0
        /*background-color #7e8c8d*/
        .as
          width 750px
          height 75px
          text-align center
          img
            width 192px
            height 64px
        .txt
          width 750px
          height 410px
          position relative
          .in
            width 670px
            height 80px
            border-bottom 1px solid #d4d4d4
            position absolute
            left 5%
            top 40%
            .inp
              width 100%
              height 64px
              font-size 35px
              outline none
          .on
            width 670px
            height 80px
            position absolute
            left 5%
            top 65%
            border-bottom 1px solid #d4d4d4
            .onp
              width 100%
              height 64px
              font-size 35px
              outline none
            .circle
              width 200px
              height 64px
              border 1px solid #333
              border-radius 10px
              position absolute
              top 0
              right 0
              text-align center
              line-height 64px
              font-size 32px
              color #ccc
            h1
              width 320px
              height 30px
              margin-top 20px
              color red
        .login
          width 750px
          height 380px
          position absolute
          top 54%
          left 0
          .phone
            width 670px
            height 94px
            background-color #b4282d
            border-radius 8px
            text-align center
            line-height 94px
            position absolute
            left 5%
            top 0
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
            border-radius 8px
            text-align center
            line-height 94px
            position absolute
            left 5%
            top 35%
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
            width 670px
            height 28px
            font-size 30px
            margin auto
            text-align center
            position absolute
            left 8%
            top 70%



</style>
