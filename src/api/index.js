
import ajax from './ajax'

export const reqMainHeader = () => ajax('/headCateList')

export const reqSwiper = () => ajax('/focusList')

export const reqTargetList = () => ajax('/tagList')

export const reqNewon = () => ajax('/newItemList')

export const reqShopList = () => ajax('/cateList')

export const reqBanner = () => ajax('/banner')

export const reqColumn = () => ajax('/column')

export const reqRecommend = () => ajax('/recommend')

export const reqTenfif = () => ajax('/tenfifteen')

export const reqZhen = () => ajax('/zhenpin')

export const reqYan = () => ajax('/yxLook')

export const reqMore = () => ajax('/findMore')

export const reqCate = () => ajax('/categoryData')


export const reqPop = () => ajax('/popularItemList')
