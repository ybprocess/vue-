<template>
  <div id="wrap1">
    <header>
      <img src="./images/logo.png"/>
      <div id="head">
        <img src="./images/search.png"/>
        <span class="text">搜索商品,共97565款好物</span>
      </div>
    </header>
    <div class="scroll">
      <div class="scroll-container">
          <div class="list">
            <div class="tab active">
              <span class="txt">推荐</span>
            </div>
            <div class="tab" v-for="(headCate, index) in headCates" :key="index">
              <span class="txt">{{headCate.name}}</span>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    computed : {
      ...mapState(['headCates'])
    },
    mounted () {
      this.$store.dispatch('getMainHeader')
      new BScroll ('.scroll-container', {
        scrollX: true
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #wrap1
    position fixed
    top 0
    left 0
    width 100%
    z-index 100
    background-color #fff
    /*background-color yellowgreen*/
    header
      display flex
      align-items center
      padding (16/$rem 30/$rem)
      #head
        display flex
        flex-grow 2
        align-items center
        justify-content center
        height: (56/$rem)
        font-size: (26/$rem)
        background-color: #ededed
        border-radius 12px
        .text
          color #7e8c8d
    .scroll
      background #fff
      .scroll-container
        display flex
        overflow hidden
        /*width 750px*/
        .list
          display flex
          flex-shrink 0
          margin-left 20px
          .tab
            margin 0 40px
            margin-top 20px
            &.active
              border-bottom 4px solid red
            .txt
              font-size 30px
              font-weight 600
              color black
</style>
