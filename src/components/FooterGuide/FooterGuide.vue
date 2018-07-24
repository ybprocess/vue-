<template>
  <footer>
    <div class="nav_bar" @click="goto('/main')">
      <span class="bar main" :class="{on: $route.path === '/main'}"></span>
      <span class="text" :class="{on: $route.path === '/main'}">首页</span>
    </div>
    <div class="nav_bar" @click="goto('/second')">
      <span class="bar second" :class="{on: $route.path === '/second'}"></span>
      <span class="text" :class="{on: $route.path === '/second'}">识物</span>
    </div>
    <div class="nav_bar" @click="goto('/cart')">
      <span class="bar cart" :class="{on: $route.path === '/cart'}"></span>
      <span class="text" :class="{on: $route.path === '/cart'}">分类</span>
    </div>
    <div class="nav_bar shop" @click="goto('/classify')">
      <span class="bar classify" :class="{on: $route.path === '/classify'}"></span>
      <span class="text" :class="{on: $route.path === '/classify'}">购物车</span>
    </div>
    <div class="nav_bar" @click="goto('/person')">
      <span class="bar person" :class="{on: $route.path === '/person'}"></span>
      <span class="text" :class="{on: $route.path === '/person'}">个人</span>
    </div>
  </footer>
</template>
<script>
  export default {
    methods : {
       goto (path) {
         this.$router.replace(path)
       }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  footer
    position fixed
    left 0
    bottom 0
    width 100%
    height (98/$rem)
    background-color #fafafa
    border-top 1px solid #d9d9d9
    display flex
    flex-direction row
    align-items center
    justify-content space-around
    .nav_bar
      text-align center
      display inline-block
      width (48/$rem)
      position relative
      &.shop
        width (72/$rem)
      .bar
        display inline-block
        background-image url("/static/images/footer.png")
        background-repeat no-repeat
        background-size (40/$rem 490/$rem)
        width (40/$rem)
        height (40/$rem)
        vertical-align top
        &.main
          background-position (0 -250/$rem)
          &.on
            background-position (0 -200/$rem)
        &.second
          background-position (0 -350/$rem)
          &.on
            background-position (0 -300/$rem)
        &.cart
          background-position (0 -150/$rem)
          &.on
            background-position (0 -100/$rem)
        &.classify
          background-position (0 -50/$rem)
          &.on
            background-position (0 0/$rem)
        &.person
          background-position (0 -450/$rem)
          &.on
            background-position (0 -400/$rem)
      .text
        font-size (24/$rem)
        text-align center
        display block
        color #666
        margin-top 10px
        &.on
          color #DA989B
</style>
