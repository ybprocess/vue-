<template>
  <div id="wrap5">
    <div class="txt">十点一刻</div>

      <div class="wrap_a">
      <div class="lb">
        <div class="lbt" v-for="(item, index) in tenfifteens">
          <a href class="xy">--今日话题--</a>
          <a href class="ll">{{item.title}}</a>
          <a href class="wr">{{item.desc}}</a>
          <a href class="zy">
            <div class="inner">
              <div class="div0" v-for="(list, index) in item.participantAvatar" :key="index">
                <img :src="list ? list : './images/avatar.jpg'" alt=""/>
              </div>
              <span class="span0">{{item.participantNum}} 人参与话题</span>
            </div>
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
    computed : {
      ...mapState(['tenfifteens'])
    },
    mounted () {
      this.$store.dispatch('getTenFif')
      new BScroll('.wrap_a', {
        scrollX : true
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #wrap5
    width 750px
    .txt
      width 690px
      height 120px
      line-height 120px
      text-align center
      font-size 30px
    .wrap_a
      display flex
      margin-left 30px
      overflow hidden
      .lb
        display flex
        .lbt
          width 580px
          height 411px
          background-image url("/static/images/bg.png")
          background-repeat no-repeat
          margin-right 20px
          .xy
            display block
            width 580
            height 120px
            line-height 150px
            text-align center
            font-size 20px
          .ll
            display block
            width 100%
            height 100px
            text-align center
            line-height 70px
            font-size 35px
            color #333
            font-weight 700
          .wr
            display block
            width 100%
            height 42px
            line-height 10px
            text-align center
            font-size 30px
            color #222
          .zy
            display block
            width 100%
            height 75px
            position relative
            .inner
              width 248px
              height 48px
              position absolute
              top 0
              left 27%
              overflow hidden
              .div0
                float left
                width 48px
                height 48px
                border-radius 24px
                overflow hidden
                img
                  width 100%
                  height 100%
              .span0
                float right
                margin-top 15px


</style>
