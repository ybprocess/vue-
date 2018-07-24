<template>
  <div id="wrap0">
    <div class="swiper-container" >
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="(item, index) in banner" :key="index">
          <img :src="item.picUrl"/>
          <div class="mask">
            <span class="span1">{{item.subTitle}}</span>
            <span class="span2">{{item.title}}</span>
            <span class="span3">{{item.desc}}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {

    computed : {
    ...mapState(['banner'])
    },

    mounted () {
      this.$store.dispatch('getBanner')
      this.$nextTick(function () {
        new Swiper('.swiper-container', {
          loop : true
        })
      })
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #wrap0
    margin-top 87px
    /*background-color #999*/
    .swiper-container
      display flex
      overflow hidden
      .swiper-wrapper
        display flex
        /*width 100%*/
        .swiper-slide
          width 690px
          height 433px
          margin-top 20px
          margin-left 15px
          position relative
          img
            width 690px
            height 385px
          .mask
            width 466px
            height 198px
            background-color rgba(255,255,255,0.9)
            position absolute
            top 0
            left 0
            bottom 35px
            right 0
            margin auto
            line-height 55px
            text-align center
            .span1
              display block
              color #7f7f7f
              font-size 20px
              margin-top 10px
            .span2
              display block
              color #333
              font-weight 700
              font-size 30px
            .span3
              display block
              color #333

</style>
