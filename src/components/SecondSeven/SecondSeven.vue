<template>
  <div id="wrap7">
    <div class="wrap">
      <div class="xuan">严选LOOK</div>
      <div class="inner">
        <img :src="yxLook.picUrl" class="img0"/>
        <div class="speck">
          <div class="tou">
            <div class="circle">
              <img :src="yxLook.avatar" alt="">
            </div>
            <span class="name" v-if="yxLook.nickName">{{yxLook.nickName}}</span>
          </div>
          <div class="content">
            {{yxLook.content}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed : {
      ...mapState(['yxLook'])
    },
    mounted () {
      this.$store.dispatch('getYan')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #wrap7
    width 100%
    .wrap
      width 750px
      height 946px
      .xuan
        width 690px
        height 120px
        line-height 120px
        text-align center
        font-size 35px
        margin-left 30px
      .inner
        width 750px
        height 826px
        .img0
          width 100%
          height 500px
        .speck
          width 750px
          height 318px
          .tou
            width 690px
            height 48px
            margin-left 30px
            margin-top 25px
            overflow hidden
            .circle
              width 48px
              height 48px
              border-radius 24px
              overflow hidden
              float left
            .name
              display block
              float left
              margin-top 10px
              margin-left 8px
          .content
            width 690px
            height 176px
            margin-left 30px
            margin-top 20px
            font-size 28px
            color #7f7f7f
            line-height 42px
</style>
