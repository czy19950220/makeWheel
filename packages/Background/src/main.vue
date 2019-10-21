<template>
  <div>
    <span bgcolor="blue">深色背景</span>
    <div class="row">
      <template v-for="item in colorList">
        <div class="col-wrap" :key="item.name">
          <div :class="['col', 'bg-' + item.name,'shadow','shadow-'+ item.name, 'shadow-blur']">
            <div class="title">{{item.title}}</div>
            <div class="name">{{item.name}}</div>
          </div>
        </div>
      </template>
    </div>
    <span bgcolor="cyan" class="mt-15">浅色背景</span>
    <div class="row">
      <template v-for="item in colorList">
        <div class="col-wrap" :key="item.name">
          <div :class="['col', 'bg-' + item.name, 'light', 'shadow','shadow-'+ item.name, 'shadow-blur']">
            <div class="title">{{item.title}}</div>
            <div class="name">{{item.name}}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CzyBackground",
    data() {
      return {
        colorList: [{
          "title": "嫣红",
          "name": "red",
          "color": "#e54d42"
        },
          {
            "title": "桔橙",
            "name": "orange",
            "color": "#f37b1d"
          },
          {
            "title": "明黄",
            "name": "yellow",
            "color": "#fbbd08"
          },
          {
            "title": "橄榄",
            "name": "olive",
            "color": "#8dc63f"
          },
          {
            "title": "森绿",
            "name": "green",
            "color": "#39b54a"
          },
          {
            "title": "天青",
            "name": "cyan",
            "color": "#1cbbb4"
          },
          {
            "title": "海蓝",
            "name": "blue",
            "color": "#0081ff"
          },
          {
            "title": "姹紫",
            "name": "purple",
            "color": "#6739b6"
          },
          {
            "title": "木槿",
            "name": "mauve",
            "color": "#9c26b0"
          },
          {
            "title": "桃粉",
            "name": "pink",
            "color": "#e03997"
          },
          {
            "title": "棕褐",
            "name": "brown",
            "color": "#a5673f"
          },
          {
            "title": "玄灰",
            "name": "grey",
            "color": "#8799a3"
          },
          {
            "title": "草灰",
            "name": "gray",
            "color": "#aaaaaa"
          },
          {
            "title": "墨黑",
            "name": "black",
            "color": "#333333"
          },
          {
            "title": "雅白",
            "name": "white",
            "color": "#ffffff"
          }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
  .row {
    padding: 0.3rem;
    background: #fff;
    text-align: center;

    .col-wrap {
      flex-basis: 33.33%;
      width: 33.33%;
      padding: 0.2rem;

      .col {
        padding: 0.3rem;
        font-size: 0.32rem;
        border-radius: 0.06rem;

        .name {
          margin-top: .2rem;
          text-transform: Capitalize;
        }
      }
    }
  }
</style>