<template>
  <div
    :style="{margin:margin}"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"
    class="czy-img-card inline-block"
    @click="$emit('click')"
  >
    <div :style="{height:imgBoxHeight + 'px'}" class="czy-img-card__imgbox">
      <slot name="img"/>
    </div>
    <div class="czy-img-card__content clearfloat">
      <div class="czy-img-card__content__title_box">
        <div :title="title" class="czy-img-card__title">{{title}}</div>
        <div class="czy-img-card__slot">
          <slot name="one"/>
        </div>
      </div>
      <div class="czy-img-card__slot_two">
        <div class="czy-img-card__slot border-top">
          <slot name="two"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'czy-img-card',
  props: {
    imgBoxHeight: {
      type: Number,
      default: 200
    },
    margin: {
      type: String,
      default: '0'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      data: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.czy-img-card {
  position: relative;
  cursor: pointer;
  max-width: 216px;
  background: #fff;
  border-radius: 6px;
  border: 1px solid #ebedf0;
  transition: all 0.2s linear;
  text-align: left;
  overflow: hidden;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    .czy-img-card__content {
      .czy-img-card__content__title_box {
        .czy-img-card__slot {
          top: 55px;
        }
      }
    }
  }
  .czy-img-card__imgbox {
    overflow: hidden;
    background: #000d;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .czy-img-card__content {
    position: relative;
    padding: 0 10px;
    .czy-img-card__slot {
      position: relative;
      transition: all 0.2s linear;
      background: #fff;
    }
    .czy-img-card__slot_two {
      padding-top: 55px;
      .czy-img-card__slot {
        z-index: 1;
        padding: 8px 0;
      }
    }
    .czy-img-card__content__title_box {
      width: -webkit-calc(100% - 20px);
      width: -moz-calc(100% - 20px);
      width: calc(100% - 20px);
      position: absolute;
      .czy-img-card__title {
        margin: 8px 0 0;
        font-size: 12px;
        color: #555;
        height: 40px;
        line-height: 20px;
        overflow: hidden;
      }
      .czy-img-card__slot {
        position: absolute;
        width: 100%;
        top: 30px;
        padding: 3px 0;
      }
    }
  }
}
</style>
