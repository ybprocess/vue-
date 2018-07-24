
import {REQUIRE_HEADER} from './mutation-types'
import {
  REQUIRE_SWIPER,
  REQUIRE_TARGETLIST,
  REQUIRE_NEWON,
  REQUIRE_SHOPLIST,
  REQUIRE_BANNER,
  REQUIRE_COLUMN,
  REQUIRE_RECOMMEND,
  REQUIRE_TENFIFE,
  REQUIRE_ZHEN,
  REQUIRE_YAN,
  REQUIRE_MORE,
  REQUIRE_CATE,
  REQUIRE_POP
} from "./mutation-types";
import Vue from 'vue'

export default {
   [REQUIRE_HEADER] (state, {headCates}) {
      state.headCates = headCates
   },
   [REQUIRE_SWIPER] (state, {swiper}) {
      state.swiper = swiper
   },
   [REQUIRE_TARGETLIST] (state, {targetList}) {
     state.targetList = targetList
   },
   [REQUIRE_NEWON] (state, {newItemList}) {
     state.newItemList = newItemList
   },
  [REQUIRE_SHOPLIST] (state, {cateLists}) {
     state.cateLists = cateLists
  },
   [REQUIRE_BANNER] (state, {banner}){
     state.banner = banner
   },
   [REQUIRE_COLUMN] (state, {column}) {
     state.column = column
   },
   [REQUIRE_RECOMMEND] (state, {recommend}){
     state.recommend = recommend
   },
   [REQUIRE_TENFIFE] (state, {tenfifteens}) {
     state.tenfifteens = tenfifteens
   },
   [REQUIRE_ZHEN] (state, {zhenpin}) {
     state.zhenpin = zhenpin
   },
   [REQUIRE_YAN] (state, {yxLook}) {
     state.yxLook = yxLook
   },
   [REQUIRE_MORE] (state, {findMore}){
     state.findMore = findMore
   },
   [REQUIRE_CATE] (state, {categorys}) {
     state.categorys = categorys
   },
   [REQUIRE_POP] (state, {popularItemList}) {
     state.popularItemList = popularItemList
   }
}
