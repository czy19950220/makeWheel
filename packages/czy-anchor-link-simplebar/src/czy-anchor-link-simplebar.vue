<template>
  <!--由于使用了插件，所以单独修改一下写了个该插件的组件-->
  <div
          :class="{'czy-anchor-link':!($slots.default),'czy-anchor-link-left':$parent.position == 'left'}"
          :id="'link-' + hrefTotal + '-' + hrefHeight"
          :title="title"
          @click="jump"
  >
    <span v-if="!($slots.default)">{{title}}</span>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'czy-anchor-link-simplebar',
    props: {
      href: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: 'Title'
      }
    },
    data() {
      return {
        hrefTotal: 0,
        hrefHeight: 0,
        totalArr:[]
      }
    },
    mounted() {
      this.hrefTotal = document.getElementById(this.href).offsetTop - 10
      this.hrefHeight =
        document.getElementById(this.href).clientHeight + this.hrefTotal
    },
    methods: {
      jump() {
        let total = document.getElementById(this.href).offsetTop - 10 //获取跳转锚点坐标
        let distance = document.getElementsByClassName('simplebar-content-wrapper')[0].scrollTop;
        let ispeed
        if (total > distance) {
          smoothDown()
        } else {
          smoothUp()
        }

        function smoothDown() {
          let timer = setInterval(() => {
            if (distance < total) {
              if (ispeed <= 5) {
                ispeed = 5
              } else {
                ispeed = Math.floor((total - distance) / 5)
              }
              distance += ispeed
              document.getElementsByClassName('simplebar-content-wrapper')[0].scrollTop = distance
            } else {
              document.getElementsByClassName('simplebar-content-wrapper')[0].scrollTop = total
              clearInterval(timer)
            }
          }, 16)
        }

        function smoothUp() {
          let timer = setInterval(() => {
            if (distance > total) {
              if (ispeed <= 5) {
                ispeed = 5
              } else {
                ispeed = Math.floor((distance - total) / 5)
              }
              distance -= ispeed
              document.getElementsByClassName('simplebar-content-wrapper')[0].scrollTop = distance
            } else {
              document.getElementsByClassName('simplebar-content-wrapper')[0].scrollTop = total
              clearInterval(timer)
            }
          }, 16)
        }

      }
    }
  }
</script>
<style lang="scss" scoped>
  .czy-anchor-link {
    cursor: pointer;
    display: block;
    position: relative;
    transition: all 0.3s;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 7px 0 7px 16px;
    line-height: 1.143;
    font-size: 12px;

    &:hover {
      color: $--color-primary;
    }
  }

  .czy-anchor-link-active {
    color: $--color-primary !important;
  }

  .czy-anchor-link-left {
    padding: 7px 16px 7px 0;
  }
</style>
