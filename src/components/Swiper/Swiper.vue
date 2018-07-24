<template>
  <div id="wrap3">
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in swiper" :key="index">
        <img :src="item.picUrl">
      </div>

    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

  </div>
  <div class="back">
    <div class="grou">
      <img src="./images/icon/arrow.png"/>
      <span>网络自营品牌</span>
    </div>
    <div class="grou">
      <img src="./images/icon/arrow.png"/>
      <span>30天无忧退货</span>
    </div>
    <div class="grou">
      <img src="./images/icon/arrow.png"/>
      <span>48小时快速退款</span>
    </div>
  </div>
  <div id="left"></div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
       mounted () {
         this.$store.dispatch('getSwiper',()=>{
           this.$nextTick(function () {
             new Swiper ('.swiper-container', {
               loop: true,
               // 如果需要分页器
               pagination: {
                 el: '.swiper-pagination',
               }
             })
           })
         })
       },
       computed : {
         ...mapState(['swiper'])
       }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
 #wrap3
   height 495px
   .swiper-container
     margin-top 150px
     height: 400px;
     overflow: hidden;
     .swiper-wrapper
       height: 400px;
       .swiper-slide
         height: 400px;
         float: left;
         img
           width: 750px;
           height:400px;
   .back
     width 752px
     height 72px
     background-color #fff
     .grou
       float left
       margin-left 15px
       width 230px
       height 32px
       margin-top 15px
       /*line-height 32px*/
       img
         width 32px
         height 32px
         vertical-align middle
       span
         font-size 25px
         vertical-align middle
   #left
     width 750px
     height 20px
     background-color #ededed
</style>
