<template>
  <div class="wrap-menuNavNewProduct">
    <swiper :options="swiperOption" ref="navList">
      <swiper-slide class="font-large">
        <router-link to="/home">首页</router-link>
      </swiper-slide>
      <swiper-slide class="font-large">
        <router-link to="/new">新品</router-link>
      </swiper-slide>
      <swiper-slide class="font-large">
        <router-link to="/channel/1">家务</router-link>
      </swiper-slide>
      <swiper-slide class="font-large">
        <router-link to="/channel/2">下厨</router-link>
      </swiper-slide>
      <swiper-slide class="font-large">
        <router-link to="/channel/3">家居服</router-link>
      </swiper-slide>
      <swiper-slide class="font-large">
        <router-link to="/channel/4">生活</router-link>
      </swiper-slide>
      <swiper-slide class="font-large">
        <router-link to="/channel/5">软装</router-link>
      </swiper-slide>
      <swiper-slide class="font-large">
        <router-link to="/channel/6">床品</router-link>
      </swiper-slide>
      <swiper-slide class="font-large">
        <router-link to="/channel/7">工作旅行</router-link>
      </swiper-slide>
      <swiper-slide class="font-large">
        <a href="###">了解LifeVC</a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          swiperOption: {
            // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            notNextTick: true,
            freeMode: true,
            // swiper configs 所有的配置同swiper官方api配置
            direction: 'horizontal', // 滑动的方向
            slidesPerView: 'auto'
          }
        }
      },
      created () {
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wrap-menuNavNewProduct
    background-color #FFFFFF
    position fixed
    top 1.86rem
    left 0
    z-index 5
    height 1.86rem
    width 100%
  .font-large
    width 3.1rem
    height 1.85rem
    text-align center
    & a
      text-align center
      font-family 'Microsoft YaHei'
      font-size .55rem
      font-weight bold
      width 100%
      height 1.8rem
      line-height 1.8rem
      display block
  .selected
    border-bottom .1rem solid #80b532
    color #80b532
</style>
