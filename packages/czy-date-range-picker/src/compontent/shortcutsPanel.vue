<template>
  <div class="date-picker-shortcuts-panel">
    <div class="date-picker-shortcuts-panel-left">
      <!-- 模块选择器 -->
      <ul class="periods">
        <li
          :class="{'active':periodsActive == item.value}"
          :key="'period' + index + item.value"
          @click="handlePeriod(item)"
          class="period"
          v-for="(item,index) in computedPeriods"
        >{{item.label}}</li>
      </ul>

      <!-- 范围选择器 -->
      <ul class="ranges">
        <li
          :class="{'active':rangesActive == item.value}"
          :key="'range' + index + item.value"
          @click="handleRanges(item)"
          class="range"
          v-for="(item,index) in ranges"
        >{{item.label}}</li>
      </ul>

      <!-- 输入框 -->
      <div>
        <czy-input
          :class="{'errorInput':startDateRules}"
          :height="28"
          @blur="startDateRules = handleDate(startDate)"
          pattern="frame"
          style="width:100px;margin-right:14px"
          v-model="startDate"
        />
        <czy-input
          :class="{'errorInput':endDateRules}"
          :height="28"
          @blur="endDateRules = handleDate(endDate)"
          pattern="frame"
          style="width:100px"
          v-model="endDate"
        />
      </div>

      <!-- 按钮 -->
      <czy-divider style="margin:12px 0" />
      <div style="margin-top:5px;text-align:right">
        <czy-button @click="cancel" style="height:28px">取消</czy-button>
        <czy-button @click="confirm" style="height:28px;margin-right:0" type="primary">确认</czy-button>
      </div>
    </div>

    <div class="date-picker-shortcuts-panel-right">
      <quarter-panel @change="input" v-if="periodsActive == 'quarter'" v-model="value" />
      <year-panel @change="input" v-if="periodsActive == 'year'" v-model="value" />
      <month-panel @change="input" v-if="periodsActive == 'month'" v-model="value" />
      <day-panel
        :type="periodsActive == 'week' ? 'week' : 'day'"
        @change="input"
        v-if="periodsActive == 'day' || periodsActive == 'week'"
        v-model="value"
      />
    </div>
  </div>
</template>
<script>
import yearPanel from './yearPanel'
import quarterPanel from './quarterPanel'
import monthPanel from './monthPanel'
import dayPanel from './dayPanel'

import { czyUiRules } from '../../../../public/js/czy-vue-ui-rules'
import { czyUiDate } from '../../../../public/js/czy-vue-ui-date'

export default {
  components: {
    yearPanel,
    quarterPanel,
    monthPanel,
    dayPanel
  },
  props: {
    value: {
      type: [Array, String],
      default: ''
    },
    periodsList: {
      type: Array,
      default: function() {
        return []
      }
    },
    // rangesList: {
    //   type: Array,
    //   default: function() {
    //     return [
    //       {
    //         key: 'lastweek',
    //         num: 7
    //       },
    //       {
    //         key: 'last30',
    //         num: 30
    //       },
    //       {
    //         key: 'last90',
    //         num: 90
    //       },
    //       {
    //         key: 'lastyear',
    //         num: 365
    //       }
    //     ]
    //   }
    // }
    allDate: {
      type: Array
    }
  },
  computed: {
    computedPeriods: function() {
      let list = []
      if (this.periodsList.length == 0) {
        return this.periods
      } else {
        for (let i = 0; i < this.periods.length; i++) {
          if (this.periodsList.indexOf(this.periods[i].value) > -1) {
            list.push(this.periods[i])
          }
        }
      }

      return list
    }
  },
  watch: {
    value: function(val) {
      this.startDate = val[0]
      this.endDate = val[1]
    }
  },
  data() {
    return {
      periodsActive: this.periodsList.length == 0 ? 'day' : this.periodsList[0],
      periods: [
        {
          value: 'day',
          label: '天'
        },
        {
          value: 'week',
          label: '周'
        },
        {
          value: 'month',
          label: '月'
        },
        {
          value: 'quarter',
          label: '季'
        },
        {
          value: 'year',
          label: '年'
        }
      ],

      rangesActive: 'custom',
      ranges: [
        // {
        //   value: 'lastweek',
        //   label: '最近一周'
        // },
        {
          value: 'last30',
          label: '最近一个月'
        },
        {
          value: 'last90',
          label: '最近三个月'
        },
        {
          value: 'lastyear',
          label: '最近一年'
        },
        {
          value: 'all',
          label: '全部时间'
        },
        {
          value: 'custom',
          label: '自定义'
        }
      ],

      startDate: this.value[0],
      endDate: this.value[1],

      startDateRules: false,
      endDateRules: false
    }
  },
  methods: {
    handlePeriod(item) {
      this.periodsActive = item.value

      switch (item.value) {
        case 'year':
          this.rangesActive = 'lastyear'
          this.input(czyUiDate.getLastDay(365))
          break
        case 'quarter':
          this.rangesActive = 'last90'
          this.input(czyUiDate.getLastDay(90))
          break
        case 'month':
          this.rangesActive = 'last30'
          this.input(czyUiDate.getLastDay(30))
          break
        case 'week':
          this.rangesActive = 'custom'
          this.input(czyUiDate.getSomeWeek(czyUiDate.getToday()))
          break
        case 'day':
          this.rangesActive = 'lastweek'
          this.input(czyUiDate.getLastDay(7))
          break
      }
    },
    handleRanges(item) {
      this.rangesActive = item.value
      switch (item.value) {
        case 'lastweek':
          this.input(czyUiDate.getLastDay(7))
          break
        case 'last30':
          this.input(czyUiDate.getLastDay(30))
          break
        case 'last90':
          this.input(czyUiDate.getLastDay(90))
          break
        case 'last180':
          this.input(czyUiDate.getLastDay(180))
          break
        case 'lastyear':
          this.input(czyUiDate.getLastDay(365))
          break
        case 'all':
          this.input(this.allDate)
          break
      }
    },
    handleDate(value) {
      this.rangesActive = 'custom'
      this.input([this.startDate, this.endDate])
      return !czyUiRules.rulesDate(value)
    },
    input(data) {
      this.$emit('input', data)
    },
    confirm() {
      this.$emit('confirm')
    },
    cancel() {
      this.$emit('cancel')
    }
  }
}
</script>
<style lang="scss">
.date-picker-shortcuts-panel {
  display: flex;
  // align-items: center;
  justify-content: center;
  .date-picker-shortcuts-panel-left {
    .periods {
      margin: 0 auto 8px;
      display: inline-flex;
      list-style: none;
      outline: none;
      min-width: 215px;
      .period {
        padding: 0 15px;
        margin: 0;
        background: #f5f5f5;
        color: $--color-primary;
        cursor: pointer;
        font-size: 13px;
        transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:first-child {
          border-radius: 4px 0 0 4px;
        }
        &:last-child {
          border-radius: 0 4px 4px 0;
        }
        &.active {
          background: $--color-primary;
          color: #fff;
        }
      }
    }

    .ranges {
      margin: 0 auto 8px;
      list-style: none;
      outline: none;
      .range {
        padding: 0 15px;
        margin-bottom: 8px;
        background: #f5f5f5;
        color: $--color-primary;
        cursor: pointer;
        font-size: 13px;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        border-radius: 4px;
        &.active {
          background: $--color-primary;
          color: #fff;
        }
      }
    }

    .errorInput {
      input {
        border: 1px solid $--color-danger !important;
        &:focus {
          border: 1px solid $--color-danger !important;
        }
        &:hover {
          border: 1px solid $--color-danger !important;
        }
      }
    }
  }
  .date-picker-shortcuts-panel-right {
    margin: 0 0 0 10px;
  }
}
</style>
