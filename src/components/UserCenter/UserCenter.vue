<template>
  <div>
    <a href="###">
      <label class="editcart">设置</label>
    </a>
    <my-header :title="title"></my-header>
    <div class="uscenter-cont">
      <div class="acct-user-wrap">
        <div class="acct-nolog">
          <span class="state">您还未登录</span>
          <div class="btn-entry">
            <router-link to="/login" class="font-large">
              登录
            </router-link>
            <span class="split"></span>
            <router-link to="/register" class="font-large">
              注册
            </router-link>
          </div>
        </div>
      </div>
      <div class="dashboard-order">
        <ul>
          <li>
            <a href="###">
                <span class="item-icon">
                  <span id="ico1"></span>
                </span>
              <span class="item-title">待支付</span>
            </a>
          </li>
          <li>
            <a href="###">
                <span class="item-icon">
                  <span id="ico2"></span>
                </span>
              <span class="item-title">代发货</span>
            </a>
          </li>
          <li>
            <a href="###">
                <span class="item-icon">
                  <span id="ico3"></span>
                </span>
              <span class="item-title">代收货</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="###">
                <span class="item-icon">
                  <span id="ico4"></span>
                </span>
              <span class="item-title">待评论</span>
            </a>
          </li>
          <li>
            <a href="###">
                <span class="item-icon">
                  <span id="ico5"></span>
                </span>
              <span class="item-title">回复</span>
            </a>
          </li>
          <li>
            <a href="###">
                <span class="item-icon">
                  <span id="ico6"></span>
                </span>
              <span class="item-title">退换货</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="dashboard">
        <ul>
          <li>
            <a href="###">
              <img src="./ic_list_cm.png" class="item-i">
              <span class="item-title">我的订单</span>
              <span class="arr-r"></span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="###">
              <img src="./ic_coupon_cm.png" class="item-i">
              <span class="item-title">我的优惠券</span>
              <span class="arr-r"></span>
            </a>
          </li>
          <li>
            <a href="###">
              <img src="./ic_pig_cm.png" class="item-i">
              <span class="item-title">现金积分</span>
              <span class="arr-r"></span>
            </a>
          </li>
          <li>
            <a href="###">
              <img src="./ic_invoice.png" class="item-i">
              <span class="item-title">关于发票</span>
              <span class="arr-r"></span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="###">
              <img src="./i_gear_cm.png" class="item-i">
              <span class="item-title">密码和信息登录</span>
              <span class="arr-r"></span>
            </a>
          </li>
          <li>
            <a href="###">
              <img src="./i_dialoguebubble3_cm.png" class="item-i">
              <span class="item-title">老会员建议</span>
              <span class="arr-r"></span>
            </a>
          </li>
          <li>
            <a href="###">
              <img src="./i_customerservice_cm.png" class="item-i">
              <span class="item-title">客户服务</span>
              <span class="arr-r"></span>
            </a>
          </li>
          <li>
            <a href="###">
              <img src="./ic_currentnode_cm.png" class="item-i">
              <span class="item-title">地址管理</span>
              <span class="arr-r"></span>
            </a>
          </li>
          <li>
            <a href="###">
              <img src="./sms_cm.png" class="item-i">
              <span class="item-title">手机验证</span>
              <span class="arr-r"></span>
            </a>
          </li>
        </ul>
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
        title: '账户中心'
      }
    },

    components: {
      'my-header': myHeader,
      'my-footer': myFooter
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .clearfix:after
    content ''
    display block
    clear both
  .editcart
    font-size .79rem
    color #fff
    line-height 1.89rem
    margin-right 2%
    position fixed
    right 2%
    top 0
    z-index 101
  .uscenter-cont
    color #2e2e2e
    overflow hidden
    background-color rgb(242, 242, 242)
    margin 1.89rem 0 2.13rem
    .mint-loadmore-top
      margin-top -1.91rem
      text-align center
      height 1.89rem
      line-height 1.89rem
      font-size .5rem
    .acct-user-wrap
      width 100%
      height 4.18rem
      background url("./background.png") no-repeat
      background-size 100%
      .acct-nolog
        width 100%
        overflow hidden
        text-align center
        margin 0 auto
        padding .2rem 0 0
        .state
          display block
          color #222222
          font-size .7rem
          line-height 1.5rem
        .btn-entry
          font-size 0
          display inline-block
          color #009c42
          padding 0 0.65rem
          height 1.4rem
          line-height 1.4rem
          background rgba(255,255,255,0.4)
          border 1px solid #009c42
          border-radius .8rem
          margin .2rem auto 0
          & a
            display inline-block
            height 1.4rem
            color #009c42
            font-size .73rem
            padding 0 .28rem
          .split
            width .02rem
            height .6rem
            display inline-block
            border-left .02rem solid #009c42
            margin 0 .2rem
    .dashboard-order
      overflow hidden
      background-color #fff
      border-top 1px solid #eee
      margin 0 auto
      & ul
        width 100%
        height 2.3rem
        overflow hidden
        border-bottom 1px solid #eee
      & li
        width 33%
        height 1.2rem
        float left
        border-right 1px solid #dedede
        line-height 1rem
        margin .8rem 0 0
        a
          display block
          text-align center
          color #585858
          .item-icon
            display inline-block
            position relative
            span
              display inline-block
              height 1.5rem
              width 1.8rem
              background-size 95%
              background-repeat no-repeat
              background-position center 120%
            #ico1
              background-image url("./unpaid.png")
            #ico2
              background-image url("./deliver.png")
            #ico3
              background-image url("./take_delivery.png")
            #ico4
              background-image url("./wait_comment.png")
            #ico5
              background-image url("./reply.png")
              background-position -.2rem -.15rem
            #ico6
              background-image url("./exchange_goods.png")
          .item-title
            display inline-block
            vertical-align 56%
            font-size .5rem
            color #585858
            line-height 1.2rem
    .dashboard
      & ul
        margin-bottom .5rem
        li
          width 100%
          height 2.3rem
          overflow hidden
          background-color #fff
          border-bottom 1px solid #eee
          border-top 1px solid #eee
          margin -1px auto 0
          & a
            width 100%
            height 2.3rem
            display block
          .item-i
            width 1.15rem
            overflow hidden
            display inline-block
            float left
            margin .65rem .55rem 0
          .item-title
            display inline-block
            line-height 2.5rem
            float left
            font-size .6rem
            color #585858
          .arr-r
            width .4rem
            height .4rem
            display inline-block
            float right
            border-right 2px solid #bbb
            border-top 2px solid #bbb
            margin .9rem .4rem 0 0
            transform rotate(45deg)
            -webkit-transform rotate(45deg)
</style>
