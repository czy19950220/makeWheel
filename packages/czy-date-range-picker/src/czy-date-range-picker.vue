<template>
  <div class="czy-date-range-picker" v-clickoutside="handleClose">
    <czy-button @click="show = !show" style="margin-bottom:0">
      <div class="czy-date-range-picker-editor">
        <i class="czyi czy-calendar"></i>
        <span class="czy-date-picker-editor-body">
          <span class="czy-date-picker-editor-span">{{value[0]}}</span>
          <span class="czy-date-picker-editor-range-separator">{{rangeSeparator}}</span>
          <span class="czy-date-picker-editor-span">{{value[1]}}</span>
        </span>
      </div>
    </czy-button>

    <transition name="drop-down">
      <div class="czy-date-picker-panel" v-show="show">
        <div class="popper__arrow" style="left:30px"></div>
        <shortcutsPanel
          :allDate="allDate"
          :periodsList="periods"
          @cancel="handleClose"
          @confirm="confirm"
          ref="shortcutsPanel"
          v-model="data"
        />
      </div>
    </transition>
  </div>
</template>
<script>
import clickoutside from '../../../public/js/clickoutside'
import shortcutsPanel from './compontent/shortcutsPanel'

import { czyUiDate } from '../../../public/js/czy-vue-ui-date'
export default {
  name: 'czy-date-range-picker',
  directives: { clickoutside },
  components: {
    shortcutsPanel
  },
  props: {
    value: {
      type: [Array, String],
      default: ''
    },
    rangeSeparator: {
      type: String,
      default: '-'
    },
    periods: {
      type: Array,
      default: function() {
        return []
      }
    },
    allDate: {
      type: Array,
      default: function() {
        return ['1970-01-01', czyUiDate.getToday()]
      }
    }
  },
  mounted() {
    if (this.data == '') {
      this.$emit('input', czyUiDate.getLastDay(30))
    }
  },
  watch: {
    value: function(val) {
      this.data = val
    }
  },
  data() {
    return {
      show: false,
      data: this.value
    }
  },
  methods: {
    create() {
      if (this.data == '') {
        this.$emit('input', czyUiDate.getLastDay(30))
      }
    },
    handleClose() {
      this.show = false
    },
    confirm() {
      this.$emit('input', this.data)
      this.$emit('change', this.data)
      this.handleClose()
    }
  }
}
</script>
<style lang="scss" scoped>
.czy-date-range-picker {
  display: inline-block;
  position: relative;
  .czy-date-range-picker-editor {
    .czy-date-picker-editor-body {
      position: relative;
      top: -1px;
    }
    .czy-date-picker-editor-span {
      display: inline-block;
      width: 120px;
      text-align: center;
    }
  }

  .czy-date-picker-panel {
    backface-visibility: hidden;
    z-index: 150;
    position: absolute;
    margin: 5px 0;
    margin-top: 12px;
    padding: 10px;
    border: 1px solid #e4e7ed;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 5px;
    line-height: 30px;
  }
}
</style>
