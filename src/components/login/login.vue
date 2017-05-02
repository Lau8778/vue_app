<template>
  <div id="loginBg" class="acct-wrap">
    <div class="old_user_login">
      <label class="acct_top_back" @click="goBack"></label>
      <img src="./login-logo.png" class="acct_top_show">
    </div>
    <div class="bg-wrap">
      <div class="login_content">
        <h1>老用户登录</h1>
        <div id="wrap">
          <div v-show="isAccount">
            <form>
              <ul class="fm_list">
                <li class="multi">
                  <input type="tel" class="field_ipt" required="required"
                         maxlength="11" placeholder="请输入手机号">
                  <a href="###" class="fidld_skip">获取验证码</a>
                </li>
                <li>
                  <input type="text" class="field_ipt"
                         required="required" maxlength="10" placeholder="请输入手机验证码">
                </li>
              </ul>
              <div class="set_link">
                <p class="problem_contact_service">
                  遇到问题？请<a href="###">联系客服</a>
                </p>
                <a @click="switchLoginMethod">
                  <b></b>
                  <span>账号密码登录</span>
                </a>
              </div>
            </form>
          </div>
          <div v-show="!isAccount">
            <form>
              <ul class="fm_list">
                <li class="multi">
                  <input type="tel" class="field_ipt" required="required"
                         maxlength="11" placeholder="请输入手机号">
                </li>
                <li>
                  <input type="password" class="field_ipt"
                         required="required" maxlength="20" placeholder="请输入密码">
                  <a href="###" class="fidld_skip">忘记密码</a>
                </li>
              </ul>
              <div class="set_link">
                <p class="problem_contact_service">
                  遇到问题？请<a href="###">联系客服</a>
                </p>
                <a @click="switchLoginMethod">
                  <b></b>
                  <span>账号密码登录</span>
                </a>
              </div>
            </form>
          </div>
          <input type="button" class="btn_login" value="登录">
          <input type="button" class="btn_regisiter" value="注册">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      data () {
        return {
          isAccount: true
        }
      },

      methods: {
        goBack () {
          this.$router.back()
        },
        switchLoginMethod () {
          this.isAccount = !this.isAccount
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #loginBg
    font-family 'Microsoft YaHei'
    h1
      width 100%
      text-align center
      color #037049
      font-size .75rem
      line-height 3rem
      box-sizing border-box
      height 3.59rem
  .acct-wrap
    .old_user_login
      width 100%
      height 6rem
      background #fff
      position relative
      .acct_top_show
        width 5.1rem
        overflow hidden
        display block
        position absolute
        top 30%
        left 50%
        margin-left -2.55rem
      .acct_top_back
        width 1rem
        height 1rem
        display block
        border-radius 50%
        position absolute
        left .7rem
        top 1.8rem
        border 1px solid #3aad36
        &:after
          content ''
          display block
          width .6rem
          height .6rem
          border-left 1px solid #3aad36
          border-top 1px solid #3aad36
          position absolute
          left .36rem
          top .18rem
          -webkit-transform rotate(45deg)
          transform rotate(-45deg)
    .bg-wrap
      height 22.45rem
      background-color rgb(242, 242, 242)
      background url("./login-big-bg.jpg") no-repeat bottom
      background-size 100%
      .login_content
        width 100%
        height 13.85rem
        box-sizing border-box
  .fm_list
    li
      width 90%
      margin 0 auto
      height 2.15rem
      line-height 2.15rem
      border-bottom 1px solid #dbdbdb
      position relative
  .field_ipt
    font-size 16px
    width 100%
    background transparent
    position absolute
    left 0
    top 0
    height 100%
    box-sizing border-box
  .fidld_skip
    display inline-block
    position absolute
    right 0
    top 25%
    line-height 1.2rem
    font-size .62rem
    color #3aad36
    border 1px solid #3aad36
    border-radius .2rem
    padding 0 .8rem
  .set_link
    padding .5rem 0 .2rem
    text-align right
    height 2.1rem
    width 90%
    margin 0 auto
    font-size .58rem
    box-sizing border-box
    position relative
    & a
      color #3aad36
      letter-spacing .03rem
      font-size .56rem
      margin 0 0 .8rem
      & span
        float right
        line-height .8rem
        margin-right .5rem
      & b
        width .35rem
        height .35rem
        display block
        position absolute
        right 0
        top .66rem
        border-top 1px solid
        border-right 1px solid
        transform rotate(45deg)
        -webkit-transform rotate(45deg)
    .problem_contact_service
      float left
      color #666
      line-height .8rem
      & a
        text-decoration underline
  .btn_login, .btn_regisiter
    width 80%
    overflow hidden
    display block
    outline none
    text-align center
    font-size .73rem
    color #fff
    line-height 1.58rem
    letter-spacing 1rem
    text-indent 1rem
    box-sizing border-box
    border-radius .2rem
    border 1px solid #3aad36
  .btn_login
    margin 0 auto .6rem
    background-color #3aad36
  .btn_regisiter
    margin 10px auto 0
    background-color #8a8a8a
    opacity .5
</style>
