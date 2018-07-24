<template>
  <div id="wrap12">
    <div class="xun" v-for="(item, index) in cateLists" :key="index">
      <div class="jujia">
        {{item.name}}
      </div>
      <div class="group">
        <div class="ul">
          <div class="li" v-for="(list, index) in item.itemList" :key="index">
            <div class="li-1">
              <img :src="list.primaryPicUrl"/>
              <div class="li-1-1">{{list.simpleDesc}}</div>
            </div>
            <div class="li-2">
              <span>满额减</span>
            </div>
            <span class="li-3">{{list.name}}</span>
            <span class="li-4">￥ {{list.retailPrice}}</span>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    mounted () {
      this.$store.dispatch('getList')
    },
    computed : {
      ...mapState(['cateLists'])

    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
   #wrap12
     width 750px
     border-bottom 1px solid black
     .xun
       width 750px
       .jujia
         width 750px
         height 120px
         background-color #fff
         font-size 32px
         text-align center
         line-height 120px
       .group
         width 750px
         .ul
           width 750px
           overflow hidden
           .li
             width 375px
             height 595px
             float left
             .li-1
               width 345px
               height 422px
               background-color #f4f4f4
               margin-left 15px
               img
                 width 345px
                 height 345px
               .li-1-1
                 width 345px
                 height 69px
                 background-color #f1ece2
                 /*text-align center*/
                 line-height 69px
                 color #9f8a60
                 overflow hidden
                 text-overflow ellipsis
                 white-space nowrap
             .li-2
               width 92px
               height 30px
               background-color #f48f18
               margin-left 20px
               margin-top 15px
               line-height 30px
               text-align center
               color #fff
             .li-3
               display block
               margin-left 20px
               margin-top 18px
               font-size 30px
             .li-4
               display block
               color #b4282d
               margin-left 20px
               margin-top 15px
               font-size 28px

</style>
