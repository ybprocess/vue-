<template>
  <div id="wrap7">
    <div class="xin">
      <div class="new">新品首发</div>
      <div class="look">查看全部></div>
    </div>
    <div class="old_wrap">
      <div class="new_wrap">
        <div class="old" >
          <a href class="inner" v-for="(item, index) in newItemList" :key="index">
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
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      new BScroll ('.new_wrap', {
        scrollX: true
      })
      this.$store.dispatch('getImg')
    },
    computed : {
      ...mapState(['newItemList'])
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
   #wrap7
     width 750px
     height 772px
     .xin
       width 750px
       height 260px
       background-image url("/static/images/newProduct/bg.png")
       display flex
       flex-direction column
       .new
         font-size 37px
         font-weight normal
         width 150px
         height 47px
         margin auto
         line-height 47px
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
       .new_wrap
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
               white-space nowrap
               overflow hidden
               text-overflow ellipsis
             .boy
               display block
               margin-top 8px
               font-size 26px
               white-space nowrap
               overflow hidden
               text-overflow ellipsis
             .money
               color red
               margin-top 8px
               display block
               font-size 26px
</style>
