<template>
  <div id="wrap4">
     <div class="wrap">
       <div class="tui">为你推荐</div>
       <a href class="ru">
         <div class="bgc" v-if="recommend.recommendBanner" :style="{backgroundImage:'url('+recommend.recommendBanner.picUrl+')'}"></div>
         <div class="content" v-if="recommend.recommendBanner">{{recommend.recommendBanner.nickname}}</div>
         <div class="txt">
           <div class="re">
             <span class="span1" v-if="recommend.recommendBanner">{{recommend.recommendBanner.title}}</span>
             <span class="span2" v-if="recommend.recommendBanner">{{recommend.recommendBanner.priceInfo}}元起</span>
           </div>
           <span class="span0" v-if="recommend.recommendBanner">{{recommend.recommendBanner.subtitle}}</span>
         </div>
       </a>
       <div v-for="(rec, index) in recommend.recommends" :key="index">
         <a href class="ding">
           <div class="tou">
             <div class="lef">
               <div class="mid">
                 <img :src="rec.avatar">
               </div>
               <span class="xin">{{rec.nickname}}</span>
             </div>
             <div class="text">{{rec.title}}</div>
             <div class="ly">{{rec.subtitle}}</div>
           </div>
           <div class="yu" :style="{backgroundImage:'url('+rec.picUrl+')'}">
             <div class="zq">{{rec.typeName}}</div>
           </div>
         </a>
       </div>
     </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {

    computed : {
      ...mapState(['recommend'])
    },

     mounted () {
       this.$store.dispatch('getRecommend')
     },

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #wrap4
    width 100%
    height 100%
    .wrap
      width 690px
      .tui
        width 690px
        height 120px
        line-height 120px
        text-align center
        font-size 35px
        margin-left 30px
      .ru
        width 690px
        height 574px
        display block
        margin-left 30px
        position relative
        .bgc
          width 688px
          height 386px
          background-image url("/static/images/99.jpeg")
          background-repeat no-repeat
          background-size cover
        .content
          width 130px
          height 36px
          position absolute
          left 30px
          top 20px
          background-color #fff
          border-radius 23px
          text-align center
          line-height 36px
          /*overflow hidden*/
        .txt
          width 686px
          height 184px
          overflow hidden
          border 1px solid #d9d9d9
          .re
            width 648px
            height 43px
            margin-left 20px
            margin-top 25px
            .span1
              display block
              float left
              font-size 36px
              color #333
            .span2
              display block
              float right
              font-size 36px
              color #333
          .span0
            display block
            width 100%
            font-size 28px
            margin-left 20px
            margin-top 10px
      .ding
        width 690px
        height 274px
        display block
        margin-left 30px
        margin-top 20px
        border 1px solid #d9d9d9
        overflow hidden
        .tou
          width 408px
          height 272px
          /*background-color #7e8c8d*/
          float left
          .lef
            width 358px
            height 48px
            overflow hidden
            margin-left 25px
            margin-top 30px
            .mid
              width 46px
              height 46px
              border-radius 23px
              overflow hidden
              float left
            .xin
              display block
              float left
              width 40px
              height 24px
              font-size 20px
              margin-left 10px
              margin-top 10px
          .text
            width 318px
            height 38px
            margin-left 15px
            margin-top 25px
            font-size 32px
            color #333
          .ly
            width 358px
            height 72px
            margin-left 15px
            color #7f7f7f
            margin-top 15px
            line-height 30px
        .yu
          width 280px
          height 272px
          background-image url("/static/images/369.jpeg")
          background-size cover
          float right
          position relative
          .zq
            width 202px
            height 36px
            background-color #fff
            position absolute
            top 0
            left 0
            border-radius 20px
            text-align center
            line-height 36px
            margin-top 10px
            margin-left 10px

</style>
