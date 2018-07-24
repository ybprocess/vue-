
import {
  REQUIRE_HEADER,
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
} from './mutation-types'

import {
  reqMainHeader,
  reqSwiper,
  reqTargetList,
  reqNewon,
  reqShopList,
  reqBanner,
  reqColumn,
  reqRecommend,
  reqTenfif,
  reqZhen,
  reqYan,
  reqMore,
  reqCate,
  reqPop
} from '../api/index'

export default {
   async getMainHeader ({commit}) {
     const result = await reqMainHeader()
     // console.log(result)
     if(result.code ===0){
       const headCates = result.data
       commit(REQUIRE_HEADER, {headCates})
     }
   },
  async getSwiper ({commit}, cb) {
     const result = await reqSwiper()
     // console.log(result)
     if(result.code === 0){
       const swiper = result.data
       commit(REQUIRE_SWIPER, {swiper})
       cb && cb()
     }
  },
  async getTargetList ({commit}) {
     const result = await reqTargetList()
     // console.log(result)
     if(result.code ===0){
       const targetList = result.data

       commit(REQUIRE_TARGETLIST, {targetList})
     }
  },
  async getImg ({commit}) {
     const result = await reqNewon()
     // console.log(result)
     if(result.code ===0 ){
       const newItemList = result.data
       commit(REQUIRE_NEWON, {newItemList})
     }
  },
  async getList({commit}) {
     const result = await reqShopList()
     // console.log(result)
     if(result.code === 0){
        const cateLists = result.data
        commit(REQUIRE_SHOPLIST, {cateLists})
     }
  },
  async getBanner({commit}) {
     const result = await reqBanner()
     // console.log(result)
     if(result.code === 0){
       const banner = result.data
       commit(REQUIRE_BANNER, {banner})
     }
  },
  async getColumn({commit}) {
     const result = await reqColumn()
     // console.log(result)
     if(result.code === 0) {
       const column = result.data
       commit(REQUIRE_COLUMN, {column})
     }
  },
  async getRecommend({commit}) {
     const result = await reqRecommend()
     // console.log(result)
     if(result.code === 0 ){
       const recommend = result.data
       commit(REQUIRE_RECOMMEND, {recommend})
     }
  },
  async getTenFif({commit}) {
     const result = await reqTenfif()
     // console.log(result)
     if(result.code === 0){
       const tenfifteens = result.data
       commit(REQUIRE_TENFIFE, {tenfifteens})
     }
  },
  async getZhen ({commit}) {
     const result = await reqZhen()
     // console.log(result)
     if (result.code === 0){
       const zhenpin = result.data
       commit(REQUIRE_ZHEN, {zhenpin})
     }
  },
  async getYan ({commit}) {
     const result = await reqYan()
     // console.log(result)
     if(result.code ===0 ){
        const yxLook = result.data
        commit(REQUIRE_YAN, {yxLook})
     }
  },
  async getMore ({commit}) {
     const result = await reqMore()
     // console.log(result)
     if(result.code ===0){
       const findMore = result.data
       commit(REQUIRE_MORE, {findMore})
     }
  },
  async getCate ({commit}, cb) {
     const result = await reqCate()
     // console.log(result)
     if(result.code === 0){
       const categorys = result.data
       commit(REQUIRE_CATE, {categorys})
       // debugger
       cb && cb()
     }
  },
  async getPop ({commit}, cb){
     const result = await reqPop()
     console.log(result)
     if(result.code === 0) {
       const popularItemList = result.data
       commit(REQUIRE_POP, {popularItemList})
       cb && cb()
     }
  }
}
