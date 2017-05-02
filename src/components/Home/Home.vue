<template>
  <div>
    <my-header :show-logo="true"></my-header>
    <nav-bar></nav-bar>
    <div class="scoll-wrapper" @touchend="touchEnd">
      <!--下拉刷新-->
      <scroller
        :on-refresh="refresh"
        :on-infinite="infinite"
        refreshText="释放更新"
        noDataText="~没有更多了~"
        ref="myScroller">
        <!--轮播图-->
        <div class="item-banner">
          <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide>
              <a href="###">
                <img src="./carousel01.jpg">
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="###">
                <img src="./carousel02.jpg">
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="###">
                <img src="./carousel03.jpg">
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="###">
                <img src="./carousel04.jpg">
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="###">
                <img src="./carousel05.jpg">
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="###">
                <img src="./carousel06.jpg">
              </a>
            </swiper-slide>
            <swiper-slide>
              <a href="###">
                <img src="./carousel07.jpg">
              </a>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
        <!--懒加载-->
        <div class="item-combo" v-for="url in imgs">
          <div class="img-wrap">
            <img v-lazy="url">
          </div>
        </div>
        <router-view></router-view>
      </scroller>
    </div>
    <div class="toTop" @click="toTop" v-show="showTop" ref="topBtn"></div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  // 引入子组件
  import myHeader from '../../components/header/header'
  import navBar from '../../components/navBar/navBar'
  import myFooter from '../../components/footer/footer'

  export default {
    data () {
      return {
        swiperOption: {
          // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
          autoplay: 3000, // 自动切换的时间间隔
          direction: 'horizontal', // 滑动的方向
          autoplayDisableOnInteraction: false, // 用户操作swiper之后是否禁止autoplay
          pagination: '.swiper-pagination',
          paginationType: 'bullets', // 分页器
          paginationClickable: true,
          paginationBulletRender: function (swiper) {
            return '<span class="' + 'swiper-pagination-bullet' + '">' + '</span>'
          },
          loop: true
        },
        imgs: [
          'http://i.lifevccdn.com/upload/combinationchart/e561e13a48f64df3a6305cc4bd72935d_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/a008b4c6187745fc91a1747e6b4ccf6a_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/5c0c88d22a094db7a917860ea4a11fee_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/f25dcc347506441b887434a6bfa0a725_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/be62a37a54604cf08f1aac1f976daf59_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/f4d7598b89f9454ea9d19342e2035e7b_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/68f1b5429f9a4afeaba9ae5ee0647dd6_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/5b4c149ee304400c895f4ce9576cdd36_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/33ca81e7d3bd49cc90891ad0378c9e69_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/a912b875ab4e48f09d0709202deb20da_d1242x0.jpg',
          'http://i.lifevccdn.com/upload/combinationchart/f16ef8f7d66f4a12a646480982a053f1_d1242x0.jpg'
        ],
        showTop: false
      }
    },

    methods: {
      refresh: function (done) {
        /* var self = this */
        setTimeout(function () {
          /* var start = self.top - 1
          for (var i = start; i > start - 10; i--) {
            self.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          self.top = self.top - 10 */
          done()
        }, 1500)
      },

      infinite: function (done) {
        setTimeout(function () {
          var start = self.bottom + 1
          for (var i = start; i < start + 10; i++) {
            self.items.push(i + ' - keep walking, be 2 with you.')
          }
          self.bottom = self.bottom + 10
          done(true)
        }, 1500)
      },
      toTop () {
        /* console.log(this.$refs.myScroller.getPosition())
        console.log('rect.top---' + this.$refs.toTop.getBoundingClientRect().top) */
        this.$refs.myScroller.scrollTo(0, 0, false)
        this.showTop = false
      },

      touchEnd () {
        const height = document.documentElement.clientHeight
        /* const reacTop = this.$refs.topBtn.getBoundingClientRect().top */
        const positionTop = this.$refs.myScroller.getPosition().top
        if (positionTop >= 0.8 * height) {
          this.showTop = true
        } else {
          this.showTop = false
        }
      }
    },

    components: {
      'my-footer': myFooter,
      'nav-bar': navBar,
      'my-header': myHeader
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .scoll-wrapper
    width 100%
    position absolute
    top 3.72rem
    bottom 0rem
    left 0
    background-color rgb(242,242,242)
  .item-banner
    position relative
    overflow hidden
    height 10.6rem
    & a
      display block
      width 100%
      height 10.7rem
      img
        width 100%
    .swiper-pagination
      text-align center
      width 100%
      position absolute
      bottom 10px
      left 0
      .swiper-pagination-bullet
        display inline-block
        width .35rem
        height .35rem
        margin 0 .2rem
        background-color #FFFFFF
        border-radius 50%
      .swiper-pagination-bullet-active
        background-color #89be48!important
  .item-combo
    margin-bottom .5rem
    .img-wrap
      img
        width 100%
  .toTop
    width 1.4rem
    height 1.4rem
    display block
    overflow hidden
    background-color rgba(0,0,0,.8)
    border-radius 50%
    color #fff
    position fixed
    right 2%
    bottom 3rem
    z-index 99
  .toTop:after
    content ''
    display block
    width .6rem
    height .6rem
    transform rotate(-45deg)
    position relative
    top 35%
    left 27%
    border-top .1rem solid #dfdfdf
    border-right .1rem solid #dfdfdf
  .loading-layer
    height 1rem!important
    line-height  1rem!important
    color #888888!important
    font-size .5rem!important
</style>
