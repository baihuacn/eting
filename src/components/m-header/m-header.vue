<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text">ETing</h1>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable.styl"
  @import "~common/stylus/mixin.styl"

  .m-header
    position: relative
    height: 44px
    text-align: center
    color: $color-theme
    font-size: 0
    .icon
      display: inline-block
      vertical-align: top
      margin-top: 8px
      width: 28px
      height: 28px
      margin-right: 6px
      bg-image('logo')
      background-size: 28px 28px
      background-repeat: no-repeat
    .text
      display: inline-block
      vertical-align: top
      line-height: 44px
      font-size: $font-size-large
</style>
