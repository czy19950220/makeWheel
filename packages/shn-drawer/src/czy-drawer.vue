<template>
  <div class="czy-drawer">
    <transition name="czy-fade">
      <div
        @click="maskClosable && $emit('update:visible', false);close()"
        class="czy-drawer-mask"
        v-if="show && mask"
      ></div>
    </transition>
    <div
      :class="{'left':placement === 'left','right':placement === 'right'}"
      :style="{ width: width + 'px' }"
      class="czy-drawer-content"
    >
      <czy-loading :loading="loading"/>
      <div :id="'czy-drawer-content'+id" class="czy-drawer-content-block">
        <div class="czy-drawer-header" v-if="title != ''">{{title}}</div>
        <div class="czy-drawer-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import COMMONS from '../../commons/commons'

export default {
  name: 'czy-drawer',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'right'
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id: 0,
      show: this.visible,
      width: 0,
      observer: null,
    }
  },
  created() {
    this.id = Math.floor(Math.random() * 100000)
  },
  mounted() {
    let _this = this
    let element = document
      .getElementById('czy-drawer-content' + this.id)
      .getElementsByClassName('czy-drawer-content')[0]

    if (typeof element != 'undefined') {
      let MutationObserver =
        window.MutationObserver ||
        window.WebKitMutationObserver ||
        window.MozMutationObserver
      this.observer = new MutationObserver(mutationList => {
        setTimeout(() => {
          if (mutationList[0].target.offsetWidth != 0) {
            _this.width += mutationList[0].target.offsetWidth
          } else {
            _this.width = document.getElementById(
              'czy-drawer-content' + this.id
            ).offsetWidth
          }
        }, 350)
      })
      this.observer.observe(element, {
        attributes: true,
        attributeFilter: ['style'],
        attributeOldValue: false
      })
    }
  },
  watch: {
    visible: function(val) {
      this.show = val
      if (this.show) {
        this.width = document.getElementById(
          'czy-drawer-content' + this.id
        ).offsetWidth
        COMMONS.afterOpen()
      } else {
        this.width = 0
        if (document.getElementsByClassName('czy-drawer-mask').length == 1) {
          COMMONS.beforeClose()
        }
      }
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss" scoped>
.czy-drawer {
  .czy-drawer-mask {
    z-index: 199;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #00000557;
  }
  .right {
    right: 0;
    .czy-drawer-content-block {
      left: 0;
    }
  }
  .left {
    left: 0;
    .czy-drawer-content-block {
      right: 0;
    }
  }
  .czy-drawer-content {
    z-index: 200;
    position: fixed;
    top: 0;
    height: 100%;
    background: #fff;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
    transition: width 0.3s;
    overflow: hidden;
    .czy-drawer-content-block {
      position: absolute;
      top: 0;
      width: auto;
      min-width: 200px;
    }
    .czy-drawer-header {
      position: relative;
      padding: 16px 24px;
      border-bottom: 1px solid #e8e8e8;
      border-radius: 4px 4px 0 0;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
    }
    .czy-drawer-body {
      padding: 24px;
    }
  }
}
</style>

