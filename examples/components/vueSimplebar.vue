<template>
  <div class="content-box">
    <czy-backtop :visibilityHeight="300"/>

    <h2 class="demo-title">SimplebarVue</h2>
    <p class="demo-introduction">SimpleBar does only one thing: replace the browser's default scrollbar with a custom
      CSS-styled one without losing performances. Unlike some popular plugins, SimpleBar doesn't mimic scroll with
      Javascript, causing janks and strange scrolling behaviours... You keep the awesomeness of native scrolling...with
      a custom scrollbar!
      SimpleBar does NOT implement a custom scroll behaviour. It keeps the native overflow: auto scroll and only replace
      the scrollbar visual appearance.</p>

    <div class="demo-tip">
      <p>该插件的作者是Grsmto，附上github地址</p>
      <p>
        <a href="https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue"
           target="_blank">https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue</a>
        <img alt class="github-img" href="https://github.com/Grsmto/simplebar/tree/master/packages/simplebar-vue"
             src="https://img.shields.io/github/stars/Grsmto/simplebar.svg?style=social&label=Star&maxAge=2592000"/>
      </p>
    </div>
    <!-- 安装 -->
    <h3 class="demo-table-title">安装</h3>
    <p class="demo-introduction">推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
    <div class="demo-code-block">
      <p>npm install simplebar --save</p>
      <czy-divider/>
      <p>main.js里面使用</p>
      <p>import simplebar from 'simplebar-vue';</p>
      <p>import 'simplebar/dist/simplebar.min.css';</p>
      <p>Set data-simplebar on the element you want your custom scrollbar. You're done.</p>
      <p v-text="code"></p>
    </div>
    <!-- 基础用法DEMO -->
    <czy-el-demo-block :height="88" :title="'基础用法'" id="vue-draag-resize-simple">
      <template v-slot:demo>
        <div style="height:200px;width: 200px;border: 1px solid black" data-simplebar>
          <div style="width: 50%;height: 100px;background: #003a8c;"></div>
          <div style="width: 100%;height: 100px;background: #5e6d82;"></div>
          <div style="width: 150%;height: 100px;background: #9a6e3a;"></div>
          <div style="width: 200%;height: 100px;background: #50bfff;"></div>
          <div style="width: 250%;height: 100px;background: #ff0000;"></div>
          <div style="width: 200%;height: 100px;background: #003a8c;"></div>
          <div style="width: 150%;height: 100px;background: #5e6d82;"></div>
          <div style="width: 100%;height: 100px;background: #9a6e3a;"></div>
          <div style="width: 50%;height: 100px;background: #50bfff;"></div>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
        <code class="javascript"></code>
      </template>
    </czy-el-demo-block>
  </div>
</template>

<script>
  export default {
    name: "vueSimplebar",
    data() {
      return {
        code: `<div data-simplebar></div>`,
        simple: {
          code: {
            html: `
            <div class="content-box"> </div>
            `
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>