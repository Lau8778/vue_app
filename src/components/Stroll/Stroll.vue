<template>
  <div>
    <my-header :title="title"></my-header>
      <div class="page-loadmore-wrapper">
        <scroller
          :on-refresh="refresh"
          :on-infinite="infinite"
          refreshText="释放更新"
          noDataText="~没有更多了~"
          ref="myScroller">
        <div class="clearfix">
          <div class="stroll-all-item">
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./stroll01.jpg">
                  <span class="tag-new">new</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="###">多用途棕毛清洁刷</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">
                    ￥<b>9</b>
                    <span class="original">￥12</span>
                  </span>
                  <span class="comment">月销&nbsp;13780</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./stroll02.jpg">
                  <span class="tag-new">new</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="###">多用途棕毛清洁刷</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">
                    ￥<b>9</b>
                    <span class="original">￥12</span>
                  </span>
                  <span class="comment">月销&nbsp;13780</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./stroll03.jpg">
                  <span class="tag-new">new</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="###">多用途棕毛清洁刷</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">
                    ￥<b>9</b>
                    <span class="original">￥12</span>
                  </span>
                  <span class="comment">月销&nbsp;13780</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./stroll04.jpg">
                  <span class="tag-new">new</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="###">多用途棕毛清洁刷</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">
                    ￥<b>9</b>
                    <span class="original">￥12</span>
                  </span>
                  <span class="comment">月销&nbsp;13780</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./stroll05.jpg">
                  <span class="tag-new">new</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="###">多用途棕毛清洁刷</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">
                    ￥<b>9</b>
                    <span class="original">￥12</span>
                  </span>
                  <span class="comment">月销&nbsp;13780</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./stroll06.jpg">
                  <span class="tag-new">new</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="###">多用途棕毛清洁刷</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">
                    ￥<b>9</b>
                    <span class="original">￥12</span>
                  </span>
                  <span class="comment">月销&nbsp;13780</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./stroll07.jpg">
                  <span class="tag-new">new</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="###">多用途棕毛清洁刷</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">
                    ￥<b>9</b>
                    <span class="original">￥12</span>
                  </span>
                  <span class="comment">月销&nbsp;13780</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./stroll08.jpg">
                  <span class="tag-new">new</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="###">多用途棕毛清洁刷</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">
                    ￥<b>9</b>
                    <span class="original">￥12</span>
                  </span>
                  <span class="comment">月销&nbsp;13780</span>
                </div>
              </div>
            </div>
          </div>
          <div class="stroll-all-item">
            <div class="stroll-item">
              <div class="stroll-type-item clearfix">
                <div class="cat-menu-a">
                  <span>新价格</span>
                </div>
                <div class="cat-menu-a">
                  <span>今日新品</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./stroll09.jpg">
                  <span class="tag-new">new</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="###">多用途棕毛清洁刷</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">
                    ￥<b>9</b>
                    <span class="original">￥12</span>
                  </span>
                  <span class="comment">月销&nbsp;13780</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./stroll10.jpg">
                  <span class="tag-new">new</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="###">多用途棕毛清洁刷</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">
                    ￥<b>9</b>
                    <span class="original">￥12</span>
                  </span>
                  <span class="comment">月销&nbsp;13780</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./stroll11.jpg">
                  <span class="tag-new">new</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="###">多用途棕毛清洁刷</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">
                    ￥<b>9</b>
                    <span class="original">￥12</span>
                  </span>
                  <span class="comment">月销&nbsp;13780</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./stroll12.jpg">
                  <span class="tag-new">new</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="###">多用途棕毛清洁刷</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">
                    ￥<b>9</b>
                    <span class="original">￥12</span>
                  </span>
                  <span class="comment">月销&nbsp;13780</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./stroll13.jpg">
                  <span class="tag-new">new</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="###">多用途棕毛清洁刷</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">
                    ￥<b>9</b>
                    <span class="original">￥12</span>
                  </span>
                  <span class="comment">月销&nbsp;13780</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./stroll14.jpg">
                  <span class="tag-new">new</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="###">多用途棕毛清洁刷</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">
                    ￥<b>9</b>
                    <span class="original">￥12</span>
                  </span>
                  <span class="comment">月销&nbsp;13780</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./stroll15.jpg">
                  <span class="tag-new">new</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="###">多用途棕毛清洁刷</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">
                    ￥<b>9</b>
                    <span class="original">￥12</span>
                  </span>
                  <span class="comment">月销&nbsp;13780</span>
                </div>
              </div>
            </div>
            <div class="stroll-item">
              <div class="stroll-type-item">
                <div class="stroll-item-layer">
                  <img src="./stroll16.jpg">
                  <span class="tag-new">new</span>
                </div>
                <h3 class="stroll-item-title">
                  <a href="###">多用途棕毛清洁刷</a>
                </h3>
                <div class="stroll-price-bar">
                  <span class="price">
                    ￥<b>9</b>
                    <span class="original">￥12</span>
                  </span>
                  <span class="comment">月销&nbsp;13780</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </scroller>
      </div>
    <div class="toTop" @click="toTop"></div>
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
        title: '闲逛'
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
        console.log(this.$refs.myScroller.getPosition())
        this.$refs.myScroller.scrollTo(0, 0, true)
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
  .page-loadmore-wrapper
    font-size .5rem
    position absolute
    top 1.89rem
    bottom 0
    left 0
    width: 100%
    /* margin 1.89rem 0 2.13rem */
    .clearfix
      background-color #FFFFFF
      .stroll-all-item
        width 50%
        float left
        .stroll-item
          margin 3%
          width 94%
          clear both
          .stroll-type-item
            margin 0 1%
            .stroll-item-layer
              position relative
              border-radius .33rem
              overflow hidden
              .tag-new
                background-color: #79da87;
                max-width: 94%;
                overflow: hidden;
                display: inline-block;
                text-align: left;
                font-size: .4rem;
                color: #fff;
                line-height: .7rem;
                text-transform: uppercase;
                padding: 0 .25rem;
                position: absolute;
                left: 0;
                top: .4rem;
                z-index: 6;
                white-space: nowrap;
                word-break: keep-all;
                text-overflow: ellipsis;
            .stroll-item-title
              font-size .6rem
              font-weight 400
              padding .2rem 0 .1rem
              overflow hidden
              white-space nowrap
              word-break keep-all
              text-overflow ellipsis
            .stroll-price-bar
              text-align left
              width 100%
              font-size .5rem
              height .7rem
              overflow hidden
              .price
                font-size .78rem
                line-height .7rem
                display inline-block
                color #ff475d
                font-weight 400
                overflow hidden
                text-align left
                width auto
                .original
                  font-size .5rem
                  display inline-block
                  color #888
                  text-decoration line-through
                  margin-left 1px
              .comment
                font-size .6rem
                line-height .71rem
                overflow hidden
                float right
                display inline-block
                text-align right
                color #999
                white-space nowrap
                word-break keep-all
                text-overflow ellipsis
            img
              width 100%
            .cat-menu-a
              width 47%
              background-color #eaeaea
              border-radius .3rem
              vertical-align middle
              font-size .7rem
              color #4a4a4a
              padding .8rem .5%
              display inline-block
              margin 1%
              float left
              text-align center
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
  </style>
