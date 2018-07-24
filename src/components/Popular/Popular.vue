<template>
  <div id="wrap8">
    <div class="xin">
      <div class="new">人气推荐，好物精选</div>
      <div class="look">查看全部></div>
    </div>
    <div class="old_wrap">
      <div class="new_wrap1">
        <div class="old">
          <a href class="inner" v-for="(item, index) in popularItemList">
            <div class="circle">
              <img :src="item.listPicUrl"/>
            </div>
            <span class="girl">{{item.name}}</span>
            <span class="boy">{{item.simpleDesc}}</span>
            <span class="money">￥ {{item.retailPrice}}</span>
          </a>
        </div>
      </div>
    </div>
    <div class="bgc"></div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    computed : {
      ...mapState(['popularItemList'])
    },
    mounted () {
      new BScroll ('.new_wrap1', {
        scrollX: true
      })
      this.$store.dispatch('getPop')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #wrap8
    width 750px
    height 772px
    .xin
      width 750px
      height 260px
      background-image url("/static/images/newProduct/bg.png")
      display flex
      flex-direction column
      .new
        font-size 33px
        font-weight normal
        width 310px
        height 47px
        margin auto
        line-height 47px
        text-align center
        margin-top 60px
      .look
        width 255px
        height 60px
        background-color #d8e5f1
        margin auto
        line-height 60px
        text-align center
        font-size 30px
        margin-bottom 80px
    .old_wrap
      .new_wrap1
        display flex
        overflow hidden
        .old
          margin-top 20px
          display flex
          .inner
            display block
            width 280px
            height 458px
            margin-left 20px
            .circle
              width 280px
              height 309px
              background-color #f4f4f4
              border-radius 30px
              img
                width 280px
                height 310px
            .girl
              display block
              font-size 26px
              color #333
              margin-top 20px
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
            .boy
              display block
              margin-top 8px
              font-size 26px
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
            .money
              color red
              margin-top 8px
              display block
              font-size 26px
    .bgc
      width 750px
      height 20px
      background-color #ededed

</style>
