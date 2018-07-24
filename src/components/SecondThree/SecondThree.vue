<template>
  <div id="wrap3">
    <div class="wrap">
      <div class="ul">
        <div class="li" v-for="(item, index) in column" :key="index">
          <div class="li-7">
            <img :src="item.picUrl"/>
            <div class="mask">{{item.articleCount}}</div>
          </div>
          <span class="span0">{{item.title}}</span>
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
    mounted () {
      this.$store.dispatch('getColumn'),
      new BScroll('.wrap', {
        scrollX : true
      })
    },
    computed : {
      ...mapState(['column'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
   #wrap3
     width 750px
     height 100%
     .wrap
       display flex
       overflow hidden
       .ul
         height 230px
         display flex
         .li
           width 164px
           height 164px
           margin-left 20px
           .li-7
             width 164px
             height 164px
             position relative
             img
               width 100%
               height 100%
             .mask
               width 150px
               height 32px
               position absolute
               top 0
               left 10px
               text-align right
               color #fff
           .span0
             display inline-block
             width 184px
             height 24px
             font-size 25px
             font-weight 600
             line-height 24px
             text-align center
             margin-top 10px
     .bgc
       background-color #ededed
       width 750px
       height 20px
</style>
