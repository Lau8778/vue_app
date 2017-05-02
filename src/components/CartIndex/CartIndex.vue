<template>
  <div class="cartIndex">
    <span class="btn-back">
      <label class="leftback"></label>
    </span>
    <my-header :title="title"></my-header>
    <div class="wrap-content">
      <div class="page-loadmore-wrapper">
        <div class="header-exchange-wrap">
          <div class="header-login-wrap">
            <div class="header-login">
              <a href="###" class="btn-login">登录</a>
              <span class="login-tip">
                你可以在登录后同步电脑与手机购物车中的商品
              </span>
            </div>
          </div>
          <div class="header-exchange">
            <input type="text" class="exch-ipt" maxlength="15" placeholder="礼品兑换处，请输入兑换码">
            <input type="button" class="exch-btn" value="兑换">
          </div>
        </div>
        <div id="wrap-nodata">
          <div id="carts-img">
            <img src="./shopCart.png" alt="购物车">
          </div>
          <div id="carts-text">
            <p>您的购物车还是空荡荡的呢</p>
          </div>
          <div id="carts-link">
            <router-link to="/home">
              赶紧去逛逛
            </router-link>
          </div>
        </div>
        <div class="wrap-cart-assem">
          <div class="cart-assem-title">
            <p>Rico.S为你精心推荐</p>
          </div>
          <div class="cart-assem-list">
            <swiper :options="swiperOption">
              <swiper-slide class="swiper-item">
                <div class="cart-assem-item">
                  <a href="###">
                    <img src="./cartItem01.gif">
                  </a>
                  <p class="title">LED随心粘橱柜灯</p>
                  <p class="price">￥25</p>
                </div>
              </swiper-slide>
              <swiper-slide  class="swiper-item">
                <div class="cart-assem-item">
                  <a href="###">
                    <img src="./cartItem02.jpg">
                  </a>
                  <p class="title">厨房防油污贴(3片装)</p>
                  <p class="price">￥15</p>
                </div>
              </swiper-slide>
              <swiper-slide  class="swiper-item">
                <div class="cart-assem-item">
                  <a href="###">
                    <img src="./cartItem03.jpg">
                  </a>
                  <p class="title">运动鞋增白剂</p>
                  <p class="price">￥25</p>
                </div>
              </swiper-slide>
              <swiper-slide  class="swiper-item">
                <div class="cart-assem-item">
                  <a href="###">
                    <img src="./cartItem04.jpg">
                  </a>
                  <p class="title">有机棉婴幼儿家居服</p>
                  <p class="price">￥49</p>
                </div>
              </swiper-slide>
              <swiper-slide  class="swiper-item">
                <div class="cart-assem-item">
                  <a href="###">
                    <img src="./cartItem05.jpg">
                  </a>
                  <p class="title">婴童植物洗衣皂</p>
                  <p class="price">￥19</p>
                </div>
              </swiper-slide>
              <swiper-slide  class="swiper-item">
                <div class="cart-assem-item">
                  <a href="###">
                    <img src="./cartItem06.jpg">
                  </a>
                  <p class="title">抽取式加厚食品保鲜袋</p>
                  <p class="price">￥5</p>
                </div>
              </swiper-slide>
              <swiper-slide  class="swiper-item">
                <div class="cart-assem-item">
                  <a href="###">
                    <img src="./cartItem07.jpg">
                  </a>
                  <p class="title">天然棕不伤锅清洁刷</p>
                  <p class="price">￥12</p>
                </div>
              </swiper-slide>
              <swiper-slide  class="swiper-item">
                <div class="cart-assem-item">
                  <a href="###">
                    <img src="./cartItem08.jpg">
                  </a>
                  <p class="title">全棉超柔加厚毛巾</p>
                  <p class="price">￥69</p>
                </div>
              </swiper-slide>
              <swiper-slide  class="swiper-item">
                <div class="cart-assem-item">
                  <a href="###">
                    <img src="./cartItem09.jpg">
                  </a>
                  <p class="title">LED随心粘橱柜灯</p>
                  <p class="price">￥25</p>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>

<script>
  // 引入子组件
  import myHeader from '../../components/header/header'
  import myFooter from '../../components/footer/footer'

  export default {
    data () {
      return {
        title: '购物车',
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

    methods: {
    },

    components: {
      'my-header': myHeader,
      'my-footer': myFooter
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .btn-back
    display block
    width 10%
    height 1.78rem
    position absolute
    top 0
    left 0
    background-color #89be48
    z-index 101
    .leftback
      display block
      width .5rem
      height 1.3rem
      background url("./btnLeftBack.png") no-repeat
      position absolute
      top .3rem
      left 25%

  .wrap-content
    background-color rgb(242, 242, 242)
  .header-login-wrap
    width 100%
    background-color #f0fae6
    padding .4rem 0 .24rem
    .header-login
      width 74%
      min-height 1.4rem
      display table
      overflow hidden
      margin 0 auto
      padding 0 0 0 21%
      position relative
      .btn-login
        width 18%
        height 1.3rem
        display block
        background #fff
        border 1px solid #8bc146
        text-align center
        font-size .7rem
        color #88c13e
        line-height 1.3rem
        margin 0
        position absolute
        left 0
        top 0
      .login-tip
        width 100%
        display table-cell
        text-align left
        vertical-align middle
        font-size .6rem
        color #333
        line-height .7rem
  .page-loadmore-wrapper
    background-color #F2F2F2
    padding-bottom 3.1rem
    .header-exchange-wrap
      width 100%
      height 3.5rem
      background-color #fff
      padding 0 0 .2rem
      border-bottom 1px solid #f2f2f2
      .header-exchange
        width 93%
        height 1.3rem
        overflow hidden
        margin .2rem
        position relative
        .exch-ipt
          padding-left 10px
          width 80%
          height 1.2rem
          line-height 1.4rem
          display inline-block
          border 1px solid #e7e7e7
          background #fff
          text-align center
          font-size .5rem
        .exch-btn
          width 20%
          height 1.3rem
          line-height 1.3rem
          display inline-block
          background #fff
          text-align center
          font-size .7rem
          color #6fbd00
          letter-spacing .1rem
          text-indent .2rem
          position absolute
          right 0
          top 0
          z-index 3
          border 1px solid #6fbd00
  .wrap-cart-assem
    position fixed
    bottom 1rem
    width 100%
    overflow hidden
    background-color #fff
    border-bottom .05rem solid #f2f2f2
    margin .5rem auto 0
    .cart-assem-title
      width 94%
      overflow hidden
      border-bottom .05rem solid #ccc
      text-align left
      font-size .76rem
      color #333
      line-height 1rem
      margin 0 auto
      padding .4rem 3%
    .cart-assem-list
      width 100%
      max-height 6rem
      margin 0 auto
      padding .7rem 0 1.3rem
      .title, .price
        width 100%
        overflow hidden
        display block
        text-align left
        font-size .48rem
        color #333
        line-height 1rem
        font-weight 400
        text-overflow ellipsis
        white-space nowrap
        word-break keep-all
      .swiper-item
        width 3.71rem
        overflow hidden
        vertical-align top
        text-align left
        margin 0 .25rem
        img
          width 100%
  #wrap-nodata
    #carts-img
      margin: 0 auto;
      text-align: center;
      padding-left: 1rem;
      padding-top: .6rem;
      box-sizing: border-box;
      img
        max-width 6.2rem
        vertical-align middle
    #carts-text
      text-align center
      font-size .7rem
      color rgb(102, 102, 102)
      line-height 1.23rem
    #carts-link
      text-align center
      &>a
        border .05rem solid rgb(137, 190, 72)
        padding 0.3rem .7rem
        display inline-block
        border-radius .3rem
        font-size .65rem
        letter-spacing .05rem
        margin-top .3rem
        color rgb(137, 190, 72)
</style>
