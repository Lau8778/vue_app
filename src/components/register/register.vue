<template>
  <div id="loginBg" class="acct-wrap">
    <div class="old_user_login">
      <label class="acct_top_back" @click="goBack"></label>
      <img src="./login-logo.png" class="acct_top_show">
    </div>
    <div class="bg-wrap">
      <div class="login_content">
        <h1>新用户注册</h1>
        <div id="wrap">
          <div>
            <form id="reset-form" ref="myForm">
              <ul class="fm_list">
                <li class="multi">
                  <input type="tel" class="field_ipt" required="required"
                         maxlength="11" placeholder="请输入手机号" ref="telNumber">
                </li>
                <li class="multi">
                  <input type="text" class="field_ipt" required="required" ref="pwd"
                         maxlength="20" placeholder="请设置6-20位密码,包含字母、数字或符号">
                </li>
                <li class="multi">
                  <input type="text" class="field_ipt" required="required"
                         maxlength="10" placeholder="请输入图形验证码" style="width: 70%;">
                  <div class="verifycode_img">
                    <img src="http://account.lifevc.com/Account/NewVerifyCode?t=1493518899828" style="width: 20%">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAM1BMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlkqvaGAAAAEHRSTlMAv4DvMCBAz3BgnxDfj69Q1PbwmQAAAXZJREFUSMelVe2ChCAIJPGr1Or9n/Y0duWSLdq7+bXJDIzIKtxhNid4kEhxXV3/mvYznKAbrMvmUmAHfsS2irLCRChD+iOMpfFZcOQIFiQsNrpJACeB8Uee+TN/6tlZ8HJaPvEjgBS0YKjB5RRxyGWlAFIY0wXmC0FXbBwwnEAKugJTN1T5K1wI2DRzlqZWBLDVrJ4LRNAEsNa206+y7xl0geslkJcHFKJ057QLz3Mr4H8HbCUm6mmAR8h0WGxUQ6EBQTaqYKM+0RZ0UJ9oz/AQfxHYbwX++wruO8G7ziNYEgSeVQUzzcRC56eCmKTDZwKkWXJ0AejY3jMx0YhoYN78rE+enWTavV4gc7v0v0SkAvwOWOXQkGzwLYXujp/yOyebCjcKeRuXuoD20k/exTgsTREvZgiJPyroCRJw6z7weR8tYAc3LdHFPNtwxAK/+N7QUuYs8qEmxlSRXx9obtoX8z4gm6QcaQnMDsXCE3gfjYmeyP/FD9AJGvpG5XjtAAAAAElFTkSuQmCC" style="width: 5%">
                  </div>
                </li>
                <li>
                  <input type="text" id="loginVerifyCode" class="field_ipt" ref="code"
                         required="required" maxlength="10" placeholder="请输入手机验证码">
                  <transition name="fade">
                    <span class="telAlert" v-show="haveTel">请先输入手机号</span>
                  </transition>
                  <transition name="fade">
                    <span class="sendSuccess" v-show="sendSuccess">发送成功，请在1分钟内输入</span>
                  </transition>
                  <button class="disabled" disabled="disabled" v-show="isSuccess">获取验证码&nbsp;{{time}}s</button>
                  <button class="fidld_skip" v-show="!isSuccess" @click.prevent="sendCode" ref="codeBtn">获取验证码</button>
                </li>
              </ul>
              <div class="set_link">
                <p class="problem_contact_service">
                  遇到问题？请<a href="###">联系客服</a>
                </p>
              </div>
            </form>
          </div>
          <div></div>
          <input type="button" class="btn_regisiter" value="注册" @click="register">
          <input type="button" class="btn_login" value="登录">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    // 引入官方推荐使用的axios来发送ajax请求
    import axios from 'axios'
    export default {
      data () {
        return {
          haveTel: false,
          sendSuccess: false,
          isSuccess: false,
          time: 60
        }
      },

      methods: {
        goBack () {
          this.$router.back()
        },
        sendCode () {
          const number = this.$refs.telNumber.value
          if (!number.trim()) { // 没有输入手机号
            this.haveTel = true
            setTimeout(() => {
              this.haveTel = false
            }, 2500)
            return
          }
          const url = `http://localhost:3000/sever/sendcode/?number=${number}`
          axios.get(url)
            .then((response) => {
              this.isSuccess = true
              var remainder = 60
              setInterval(() => {
                remainder--
                this.time = remainder
                if (remainder === 0) {
                  this.isSuccess = false
                  return
                }
              }, 1000)
              if (response.data.code === 1) { // 发送成功
                this.sendSuccess = true
                setTimeout(() => {
                  this.sendSuccess = false
                }, 2500)
              }
            })
        },
        register () {
          const url = 'http://localhost:3000/sever/regist'
          const number = this.$refs.telNumber.value
          const pwd = this.$refs.pwd.value
          const code = this.$refs.code.value
          const data = {
            number: number,
            pwd: pwd,
            code: code
          }
          axios.post(url, JSON.stringify(data))
           .then((response) => {
             switch (response.data.code) {
               case 0:
                 window.alert('新用户注册失败')
                 break
               case 1:
                 window.alert('新用户注册成功')
                 break
               case 2:
                 window.console.log('验证码错误')
                 break
             }
           })
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
      height 2.2rem
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
  .fade-enter-active, .fade-leave-active /* 进入中和离开时 */
    transition opacity .6s
  .fade-enter, .fade-leave-active /* 进入前和离开时 */
    opacity 0
  .fm_list
    li
      width 90%
      margin 0 auto
      height 2.15rem
      line-height 2.15rem
      border-bottom 1px solid #dbdbdb
      position relative
      .telAlert, .sendSuccess
        display block
        width 4.3rem
        height 1.4rem
        border-radius .2rem
        position absolute
        top -1.2rem
        left 50%
        margin-left -2.2rem
        background-color rgba(0, 0, 0, .7)
        color #FFFFFF
        text-align center
        font-size .5rem
        line-height 1.3rem
      .sendSuccess
        width 8rem
        margin-left -4rem
  .field_ipt
    font-size 16px
    width 100%
    background transparent
    position absolute
    left 0
    top 0
    height 100%
    box-sizing border-box
  .fidld_skip, .disabled
    background-color transparent
    position absolute
    right 0
    top 25%
    line-height 1.2rem
    font-size .62rem
    color #3aad36
    border 1px solid #3aad36
    border-radius .2rem
    padding 0 .8rem
  .disabled
    background-color #b8b8b8
    color #ebebeb
    border none
  .verifycode_img
    position absolute
    right -70%
    width 100%
    top 0
    img
      vertical-align middle
      margin-right .5rem
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
      color #666
      line-height .8rem
      width 100%
      text-align center
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
    margin 0 auto .5rem
    background-color #8a8a8a
    border none
    opacity .5
  .btn_regisiter
    margin 0 auto .6rem
    background-color #3aad36
    opacity 1
</style>
