<template>
  <transition name="czy-fade">
    <div class="czy-loading-page" v-show="show">
      <div class="czy-loading-mask"></div>
      <div class="czy-loading-main">
        <img alt src="https://raw.githubusercontent.com/czyHz/czy-ui/master/docs/img/time.gif">
      </div>
    </div>
  </transition>
</template>
<script>
import COMMONS from '../../commons/commons'

export default {
  name: 'czy-loading-page',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: this.loading
    }
  },
  mounted() {
    COMMONS.afterOpen()
  },
  watch: {
    loading: function(val) {
      this.show = val
      if (this.show) {
        COMMONS.afterOpen()
      } else {
        COMMONS.beforeClose()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.czy-loading-page {
  z-index: 9999;
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  width: 100%;
  height: 100%;
  .czy-loading-mask {
    position: absolute;
    z-index: 1000;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .czy-loading-main {
    z-index: 1001;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    color: #777;
    p{
      margin-top: 20px;
    }
  }
}
</style>
