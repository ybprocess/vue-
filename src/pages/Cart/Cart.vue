<template>
  <div id="wrap">
     <div class="wrap">
       <div class="top">
         <div class="inner">
           <img src="./images/search.png" class="img"/>
           <span class="span0">搜索商品, 共9723款好物</span>
         </div>
       </div>
       <div class="navBar">
         <div class="sub" >
           <ul class="list" >
             <li @click="test(index)" v-for="(category, index) in categorys"
                 :key="index" :class="{on:changeColor(index)}">
               {{category.name}}
             </li>
           </ul>
         </div>
       </div>
       <div class="right">
         <div class="bigImg">
           <img src="./images/banner.jpg"/>
         </div>
         <div class="wrapper">
           <div class="txt">--推荐专区分类--</div>
           <div class="inner_sup" v-if="categorys[index]">
             <div class="head" v-for="(ite,i) in categorys[index].subCateList">
               <img :src="ite.bannerUrl"/>
               <div class="text">{{ite.name}}</div>
             </div>
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
    data () {
      return {
        index : 0
      }
    },
    computed : {
      ...mapState(['categorys'])
    },
    mounted () {
      console.log(this)
      //为了在获取数据之后，在实现滚动效果，所以在后面加上一个回调函数
      //如果不加上的话，不能实现滚动效果
      this.$store.dispatch('getCate',()=>{
        this.$nextTick(()=>{
//          debugger
          new BScroll('.sub', {
            scrollY : true

          })
        })

      })

    },
    methods:{
      test(index){
        this.index = index
        console.log(this.index)
        console.log(1111111111)
      },
      changeColor(i){
        return this.index === i
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #wrap
    width 100%
    .wrap
      width 100%
      overflow hidden
      position relative
      .top
        width 750px
        height 88px
        border .1px solid #fff
        border-bottom 1px solid #808080
        position absolute
        top 0
        left 0
        .inner
          width 690px
          height 56px
          background-color #ededed
          margin-left 30px
          margin-top 15px
          text-align center
          line-height 56px
          border-radius 10px
          .span0
            font-size 28px
      .navBar
        width 162px
        height 1334px
        float left
        .sub
          width 162px
          border-right 1px solid #808080
          overflow hidden
          position fixed
          top 87px
          bottom 0
          left 0
          .list
            width 162px
            list-style none
            border .1px solid #fff
            padding 0 0 100px
            li
              width 162px
              height 60px
              color #333
              text-align center
              line-height 50px
              font-size 28px
              margin-top 40px
              font-weight 500
              &.on
                color red
      .right
        width 588px
        height 100%
        float left
        position absolute
        top 87px
        right 0
        .bigImg
          width 528px
          height 192px
          margin auto
          margin-top 25px
        .wrapper
          width 528px
          height 100%
          margin auto
          .txt
            width 528px
            height 108px
            text-align center
            line-height 108px
            font-size 25px
            color #7f7f7f
          .inner_sup
            width 528px
            height 540px
            /*overflow hidden*/
            .head
              width 150px
              height 150px
              float left
              margin-right 20px
              margin-top 25px
              img
                width 100%
                height 100%
              .text
                width 150px
                height 72px
                text-align center
                line-height 36px
</style>
