<template>
  <div class="main">
    <MainHeader/>

    <Swiper/>

    <Brand/>

    <Newon/>

    <Popular/>

    <Femail/>

    <Subject />

    <Home />

    <footer-guide />


  </div>
</template>
<script>
  import MainHeader from '../../components/MainHeader/MainHeader.vue'
  import FooterGuide from '../../components/FooterGuide/FooterGuide.vue'
  import Swiper from '../../components/Swiper/Swiper.vue'
  import Brand from '../../components/Brand/Brand.vue'
  import Newon from '../../components/Newon/Newon.vue'
  import Popular from '../../components/Popular/Popular.vue'
  import Femail from '../../components/Femail/Femail.vue'
  import Subject from '../../components/Subject/Subject.vue'
  import Home from '../../components/Home/Home.vue'

  export default {
    components : {
      MainHeader,
      FooterGuide,
      Swiper,
      Brand,
      Newon,
      Popular,
      Femail,
      Subject,
      Home,

    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  .main
    /*width 100%*/
    height 100%
    overflow hidden


</style>
