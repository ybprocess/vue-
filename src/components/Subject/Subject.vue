<template>
  <div id="wrap10">

    <div class="subject">
      <span>专题精选</span>
      <img src="./images/right.png"/>
    </div>

    <div class="lb">
      <div class="lut">
        <div class="page">
          <img src="./images/topic/01.jpg"/>
          <div class="hid">
            <span class="second">给毛孔来一次深度清洁</span>
            <span class="forth">107.1元起</span>
          </div>
          <span class="third">硅胶洁面仪，洗出会发光的素颜肌</span>
        </div>
        <div class="page">
          <img src="./images/topic/01.jpg"/>
          <div class="hid">
            <span class="second">给毛孔来一次深度清洁</span>
            <span class="forth">107.1元起</span>
          </div>
          <span class="third">硅胶洁面仪，洗出会发光的素颜肌</span>
        </div>
        <div class="page">
          <img src="./images/topic/01.jpg"/>
          <div class="hid">
            <span class="second">给毛孔来一次深度清洁</span>
            <span class="forth">107.1元起</span>
          </div>
          <span class="third">硅胶洁面仪，洗出会发光的素颜肌</span>
        </div>
        <div class="page">
          <img src="./images/topic/01.jpg"/>
          <div class="hid">
            <span class="second">给毛孔来一次深度清洁</span>
            <span class="forth">107.1元起</span>
          </div>
          <span class="third">硅胶洁面仪，洗出会发光的素颜肌</span>
        </div>
        <div class="page">
          <img src="./images/topic/01.jpg"/>
          <div class="hid">
            <span class="second">给毛孔来一次深度清洁</span>
            <span class="forth">107.1元起</span>
          </div>
          <span class="third">硅胶洁面仪，洗出会发光的素颜肌</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  export default {
    mounted () {
      new BScroll('.lb',{
        scrollX : true,
        click:true,
        probeType:2
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #wrap10
    width 750px
    height 550px
    .subject
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
    .lb
      display flex
      overflow hidden
      .lut
        display flex
//        /*overflow hidden*/
        .page
          width 600px
          height 450px
          margin-left 20px
          /*background pink*/
          img
            width 575px
            height 319px
          .hid
            overflow hidden
            .second
              float left
              font-size 30px
              font-weight 600
              margin-top 15px
            .forth
              float right
              color red
              margin-right 20px
              margin-top 15px
              font-size 30px
          .third
            display block
            font-size 25px
            margin-top 10px
            float left


</style>
