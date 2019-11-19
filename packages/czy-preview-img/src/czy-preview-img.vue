<template>
  <transition name="czy-fade">
    <div class="czy-preview-img" v-if="show">
      <div class="czy-preview-img-topbar">
        <i @click="$emit('update:visible', false)" class="czyi czy-close_1"></i>
      </div>
      <div :style="imgBoxStyle" class="img-box">
        <img
          :class="{'img-height100':imgBoxStyleType === 1 && zoomType,'zoom-in':!zoomType,'zoom-out':zoomType}"
          :src="value ? value : list[listIndex]"
          :style="imgBoxStyle"
          @click="!zoomType ? zoomIn():zoomOut()"
          alt
          ref="img"
        />
      </div>

      <div class="czy-preview-img__container" v-if="list.length != 0">
        <div
          @click="arrowRight()"
          class="czy-preview-img__arrow czy-preview-img__arrow--right"
          v-show="listIndex != list.length-1"
        >
          <i class="czyi czy-right"></i>
        </div>
        <div
          @click="arrowLeft()"
          class="czy-preview-img__arrow czy-preview-img__arrow--left"
          v-show="listIndex != 0"
        >
          <i class="czyi czy-left"></i>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import COMMONS from '../../commons/commons'

export default {
  name: 'czy-preview-img',
  props: {
    value: {
      type: String,
      default: null
    },
    visible: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      show: this.visible,
      imgBoxStyle: {},
      imgBoxStyleType: 0,
      zoomType: false,

      listIndex: 0
    }
  },
  watch: {
    visible: function(val) {
      if (val) {
        this.afterOpen()
      } else {
        this.beforeClose()
      }

      let _this = this

      let img = new Image()
      img.src = this.value ? this.value : this.list[0]

      if (img.width == 0 || img.height == 0) {
        let timer = setInterval(() => {
          if (img.width != 0 && img.height != 0) {
            if (img.width === img.height) {
              _this.imgBoxStyleType = 0
            } else if (img.width < img.height) {
              _this.imgBoxStyleType = 1
            } else {
              _this.imgBoxStyleType = 2
            }

            _this.zoomOut()
            _this.show = val
            clearInterval(timer)
          }
        }, 100)
      } else {
        if (img.width === img.height) {
          this.imgBoxStyleType = 0
        } else if (img.width < img.height) {
          this.imgBoxStyleType = 1
        } else {
          this.imgBoxStyleType = 2
        }
        this.zoomOut()
        this.show = val
      }
    },
    listIndex: function(val) {
      let _this = this
      let img = new Image()
      img.src = this.list[val]

      if (img.width == 0 || img.height == 0) {
        let timer = setInterval(() => {
          if (img.width != 0 && img.height != 0) {
            if (img.width === img.height) {
              _this.imgBoxStyleType = 0
            } else if (img.width < img.height) {
              _this.imgBoxStyleType = 1
            } else {
              _this.imgBoxStyleType = 2
            }

            _this.zoomOut()
            clearInterval(timer)
          }
        }, 100)
      } else {
        if (img.width === img.height) {
          this.imgBoxStyleType = 0
        } else if (img.width < img.height) {
          this.imgBoxStyleType = 1
        } else {
          this.imgBoxStyleType = 2
        }
        this.zoomOut()
      }
    }
  },
  methods: {
    zoomIn() {
      this.zoomType = true
      switch (this.imgBoxStyleType) {
        case 0:
          this.imgBoxStyle = {
            width: 'auto',
            height: '100%',
            overflow: 'hidden'
          }
          break
        case 1:
          this.imgBoxStyle = {
            width: 'auto',
            height: '100%',
            overflow: 'hidden'
          }
          break
        case 2:
          this.imgBoxStyle = {
            width: '100%',
            height: 'auto',
            overflow: 'hidden'
          }
          break
      }
    },
    zoomOut() {
      this.zoomType = false
      switch (this.imgBoxStyleType) {
        case 0:
          this.imgBoxStyle = {
            width: '768px',
            height: '768px',
            overflow: 'hidden'
          }
          break
        case 1:
          this.imgBoxStyle = {
            width: 'auto',
            height: '768px',
            overflow: 'hidden'
          }
          break
        case 2:
          this.imgBoxStyle = {
            width: '768px',
            height: 'auto',
            overflow: 'hidden'
          }
          break
      }
    },
    keyCodeEsc(e) {
      if (e.keyCode == 27) {
        this.$emit('update:visible', false)
      }
    },
    afterOpen() {
      COMMONS.afterOpen()
      document.addEventListener('keyup', this.keyCodeEsc)

      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i] == (this.value ? this.value : this.list[0])) {
          this.listIndex = i
        }
      }
    },
    beforeClose() {
      COMMONS.beforeClose()
      document.removeEventListener('keyup', this.keyCodeEsc)
    },
    arrowRight() {
      this.listIndex++
      this.$emit('input', this.list[this.listIndex])
    },
    arrowLeft() {
      this.listIndex--
      this.$emit('input', this.list[this.listIndex])
    }
  }
}
</script>
<style lang="scss" scoped>
.czy-preview-img {
  z-index: 9990;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  .czy-preview-img-topbar {
    position: absolute;
    top: 0px;
    width: 100%;
    color: #fff;
    padding: 10px;
    i {
      cursor: pointer;
      float: right;
      color: rgba(255, 255, 255, 0.6);
      font-size: 24px;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: #fff;
      }
    }
  }
  .img-box {
    width: 768px;
    height: 768px;
    overflow: hidden;
    text-align: center;
    /*滚动条样式*/
    &::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 10px !important;
      /*高宽分别对应横竖滚动条的尺寸*/
      height: 5px !important;
    }

    &::-webkit-scrollbar-thumb {
      /* 滚动条里面小方块 */
      background: rgb(194, 194, 194) !important;
    }

    &::-webkit-scrollbar-track {
      /*滚动条里面轨道*/
      background: rgba(255, 255, 255, 0.082) !important;
    }
    img {
      object-fit: cover;
      width: auto;
      height: 100%;
    }
    .img-width100 {
      width: 100%;
      height: auto;
    }
    .img-height100 {
      height: 100%;
      width: auto;
    }
    .zoom-in {
      cursor: zoom-in;
    }
    .zoom-out {
      cursor: zoom-out;
    }
  }
  .czy-preview-img__container {
    .czy-preview-img__arrow {
      width: 56px;
      height: 56px;
      line-height: 56px;
      cursor: pointer;
      transition: 0.3s;
      border-radius: 50%;
      background: rgba(31, 45, 61, 0.23);
      color: #fff;
      position: absolute;
      top: 50%;
      z-index: 10;
      transform: translateY(-50%);
      text-align: center;
      font-size: 12px;
      &:hover {
        background: rgba(31, 45, 61, 0.35);
      }
      &.czy-preview-img__arrow--right {
        right: 32px;
      }
      &.czy-preview-img__arrow--left {
        left: 32px;
      }
    }
  }
}
</style>
