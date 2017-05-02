<template>
  <div class="footer-wrapper">
    <footer id="bottombar" class="footer">
      <ul id="footermenuNav">
        <li>
          <router-link to="/home" :class="{selected: isHome}">
            <div class="ico icon-home"></div>
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="/all">
            <div class="ico icon-list"></div>
            <span>全部产品</span>
          </router-link>
        </li>
        <li>
          <router-link to="/stroll">
            <div class="ico icon-stroll"></div>
            <span>闲逛</span>
          </router-link>
        </li>
        <li>
          <router-link to="/cartIndex">
            <div class="ico icon-cart"></div>
            <span>购物车</span>
          </router-link>
        </li>
        <li>
          <router-link to="/userCenter">
            <div class="ico icon-user"></div>
            <span>账户中心</span>
          </router-link>
        </li>
      </ul>
    </footer>
    <div class="download-wrap" v-show="isShow">
      <img src="./downloadTop.png">
      <a href="###" class="download"></a>
      <span class="close" @click="close"></span>
    </div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          isShow: true
        }
      },

      props: ['isHome'],

      methods: {
        close () {
          this.isShow = false
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #bottombar
    position fixed
    bottom 0
    z-index 100
    height 2.13rem
    width 100%
    background-color #f8f8f8
    border-top 1px solid #ddd
  #footermenuNav
    text-align center
    overflow hidden
    li
      float left
      width 20%
      position relative
      margin 0 auto
      &>a
        display block
        text-align center
        font-size: .1rem;
        &>span
          font-size .5rem
    .ico
      width 100%
      height 1.65rem
      line-height 1.65rem
      background-position center
      background-repeat no-repeat
      background-size 28%
      margin-bottom -.2rem
      font-size 1rem
    .selected
      color rgb(0, 156, 66)
  .download-wrap
    position fixed
    bottom 2.14rem
    left 0
    right 0
    height 2.77rem
    background url("./downloadBottom.png") no-repeat 0 0
    background-size 100%
    z-index 1000
    .close
      width 7%
      position absolute
      display block
      height 1rem
      right 0
      top 0
      bottom 36%
      z-index 1000
    img
      position absolute
      left 4.8%
      top -1.77rem
      width 15.5%
</style>
