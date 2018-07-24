<template>
  <div id="wrap4">
    <div class="brand">
      <span>品牌制造商提供</span>
      <img src="./images/right.png"/>
    </div>
    <div class="container">
      <!--这里要判断以下list是否有数据，如果不判断的话会报错-->
      <div class="div0" v-if="list" v-for="(list, index) in arrList" :key="index">
        <span>{{list.name}}</span>
        <span>{{list.floorPrice}}元起</span>
        <img :src="list.picUrl"/>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed : {
      ...mapState(['targetList']),
      arrList () {
        let arr = []
        for(let i=0; i<4; i++){
           arr.push(this.targetList[i])
        }
        return arr
      }
    },
    mounted () {
      this.$store.dispatch('getTargetList')
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #wrap4
    width 750px
    height 606px
    margin-bottom 20px
    .brand
      width 750px
      height 110px
      line-height 110px
      text-align center
      span
        width 224px
        height 42px
        font-size 33px
        font-weight 500
        vertical-align bottom
      img
        vertical-align middle
        margin-left 5px
    .container
      width 750px
      height 476px
      .div0
        width 360px
        height 236px
        float left
        margin-left 10px
        background-color #f4f4f4
        position relative
        &.div1
          margin-top 10px
        span
          display block
          color #333
          font-size 25px
          margin-top 20px
          margin-left 15px
        img
          position absolute
          top 0
          left 0
          width 360px
          height 236px


</style>
