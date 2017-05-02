<template>
  <div class="header-wrapper">
    <div class="header-extra" v-if="showLogo">
      <div class="header-icon"></div>
      <router-link to="/all" class="header-search">
        <span class="header-typeimg"></span>
      </router-link>
    </div>
    <div class="header-content" v-else>
      <p class="header-title">{{title}}</p>
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        title: String,
        showLogo: Boolean
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .header-wrapper
    position fixed
    z-index 100
    top 0
    width 100%
    background-color #89be48
    .header-content
      text-align center
      height 1.86rem
      line-height 1.86rem
      font-weight bold
      font-size .9rem
      color #FFFFFF
    .header-extra
      position relative
      height 1.86rem
      .header-icon
        width 100%
        height 1.86rem
        background url("./title.png") no-repeat center
        background-size 50%
      .header-typeimg
        display block
        width 1.86rem
        height 1.86rem
        position absolute
        top 0
        right 0
        background url("./search.png") no-repeat center
        background-size 45%
</style>
