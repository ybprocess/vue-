<template>
  <div class="first">
    <div class="top">
      <img src="./image/top1.jpg"/>
      <img src="./image/top2.jpg"/>
    </div>
    <div class="bottom">
      <img src="./image/bottom.jpg"/>
      <a href="" id="mask"></a>
      <a id="mask1" @click="jump"></a>
      <!--<router-link to="/main" id="mask1"></router-link>-->
    </div>
  </div>
</template>
<script>
  export default {
     methods : {
       jump () {
         this.$router.replace('/main')
       }
     }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  body,html
    margin 0
    padding 0
  .first
    width 100%
    background-color #eee
    height 100%
    .top
      width 100%
      margin auto
      img
        width 100%
        vertical-align top
    .bottom
      width 100%
      margin auto
      position relative
      img
        width 100%
        vertical-align top
      #mask
        display block
        position absolute
        top (96/$rem)
        left (160/$rem)
        width (432/$rem)
        height (98/$rem)
      #mask1
        display block
        position absolute
        top (230/$rem)
        left (246/$rem)
        width (254/$rem)
        height (30/$rem)
</style>
