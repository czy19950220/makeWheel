<template>
  <div class="content-box">
    <h2 class="demo-title">Button 按钮</h2>
    <p class="demo-introduction">按钮用于开始一个即时操作。</p>

    <czy-anchor>
      <czy-anchor-link href="button-simple" title="基础用法" />
      <czy-anchor-link href="button-disabled" title="禁用" />
      <czy-anchor-link href="button-circle" title="圆形按钮" />
      <czy-anchor-link href="button-customize" title="自定义颜色" />
      <czy-anchor-link href="button-block" title="block按钮" />
      <czy-anchor-link href="api" title="API" />
    </czy-anchor>

    <!-- 基础用法DEMO -->
    <czy-el-demo-block :height="315" :title="'基础用法'" id="button-simple">
      <template v-slot:demo>
        <div>
          <czy-button>Default</czy-button>
          <czy-button type="success">Success</czy-button>
          <czy-button type="primary">Primary</czy-button>
          <czy-button type="danger">Danger</czy-button>
          <czy-button type="warning">Warning</czy-button>
          <czy-button icon="czy-search" type="primary">Search</czy-button>
        </div>
        <div>
          <czy-button type="dashed">Dashed</czy-button>
          <czy-button type="dotted">Dotted</czy-button>
        </div>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(simple.code.html)}}</code>
      </template>
    </czy-el-demo-block>

    <!-- 禁用DEMO -->
    <czy-el-demo-block :height="168" :title="'禁用'" id="button-disabled">
      <template v-slot:demo>
        <czy-button disabled>Default</czy-button>
        <czy-button disabled type="primary">Primary</czy-button>
        <czy-button disabled type="dashed">Dashed</czy-button>
        <czy-button disabled type="danger">Danger</czy-button>
        <czy-button disabled type="warning">Warning</czy-button>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(disabled.code.html)}}</code>
      </template>
    </czy-el-demo-block>

    <!-- 圆形按钮DEMO -->
    <czy-el-demo-block :height="168" :title="'圆形按钮'" id="button-circle">
      <template v-slot:demo>
        <czy-button circle icon="czy-user"></czy-button>
        <czy-button circle icon="czy-heart-fill" type="primary"></czy-button>
        <czy-button circle type="dashed"></czy-button>
        <czy-button circle icon="czy-delete-fill" type="danger"></czy-button>
        <czy-button circle icon="czy-plus" type="warning"></czy-button>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(circle.code.html)}}</code>
      </template>
    </czy-el-demo-block>

    <!-- 自定义颜色DEMO -->
    <czy-el-demo-block
      :height="105"
      :title="'自定义颜色'"
      id="button-customize"
      introduction="自定义修改颜色，其type必须设置为customize"
    >
      <template v-slot:demo>
        <czy-button color="#2cbfbe" type="customize">customize</czy-button>
        <czy-button circle color="#2cbfbe" icon="czy-heart-fill" type="customize"></czy-button>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(customize.code.html)}}</code>
      </template>
    </czy-el-demo-block>

    <!-- block按钮DEMO -->
    <czy-el-demo-block :height="147" id="button-block" introduction="将使按钮适合其父宽度" title="block按钮">
      <template v-slot:demo>
        <czy-button block>Default</czy-button>
        <czy-button block type="primary">Primary</czy-button>
        <czy-button block type="dashed">Dashed</czy-button>
        <czy-button block color="#2cbfbe" type="customize">customize</czy-button>
      </template>
      <template v-slot:code>
        <code class="html">{{fCode(block.code.html)}}</code>
      </template>
    </czy-el-demo-block>

    <!-- API -->
    <div id="api">
      <h3 class="demo-table-title">API</h3>
      <P class="demo-table-introduction">属性说明如下：</P>
      <czy-table-simple :data="api" :type="'demo'" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'czyButtonDemo',
  data() {
    return {
      a: document.getElementById('router_view_box'),
      simple: {
        code: {
          html: `
          <div>
            <czy-button>Default</czy-button>
            <czy-button type="success">Success</czy-button>
            <czy-button type="primary">Primary</czy-button>
            <czy-button type="danger">Danger</czy-button>
            <czy-button type="warning">Warning</czy-button>
            <czy-button icon="czy-search" type="primary">Search</czy-button>
          </div>
          <div>
            <czy-button type="dashed">Dashed</czy-button>
            <czy-button type="dotted">Dotted</czy-button>
          </div>
          `
        }
      },
      disabled: {
        code: {
          html: `
          <czy-button disabled>Default</czy-button>
          <czy-button type="primary" disabled>Primary</czy-button>
          <czy-button type="dashed" disabled>Dashed</czy-button>
          <czy-button type="danger" disabled>Danger</czy-button>
          <czy-button type="warning" disabled>Warning</czy-button>
          `
        }
      },
      circle: {
        code: {
          html: `
          <czy-button circle czy="czy-user"></czy-button>
          <czy-button circle czy="czy-heart-fill" type="primary"></czy-button>
          <czy-button circle type="dashed"></czy-button>
          <czy-button circle czy="czy-delete-fill" type="danger"></czy-button>
          <czy-button circle czy="czy-plus" type="warning"></czy-button>
          `
        }
      },
      customize: {
        code: {
          html: `
          <czy-button color="#2cbfbe" type="customize">customize</czy-button>
          <czy-button color="#2cbfbe" circle czy="czy-heart-fill" type="customize"></czy-button>
          `
        }
      },
      block: {
        code: {
          html: `
          <czy-button block>Default</czy-button>
          <czy-button type="primary" block>Primary</czy-button>
          <czy-button type="dashed" block>Dashed</czy-button>
          <czy-button color="#2cbfbe" type="customize" block>customize</czy-button>
          `
        }
      },
      api: [
        {
          parameter: 'type',
          description: '设置按钮类型',
          dataTypes: 'String',
          optional:
            'default / primary / success / dashed / dotted / danger / warning / customize',
          default: 'default'
        },
        {
          parameter: 'animation',
          description: '是否开启点击动画效果',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'true'
        },
        {
          parameter: 'disabled',
          description: '是否禁用按钮',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false'
        },
        {
          parameter: 'circle',
          description: '是否圆形按钮',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false'
        },
        {
          parameter: 'czy',
          description: '图标类名',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'color',
          description: '自定义按钮颜色，必须将按钮类型设置为customize',
          dataTypes: 'String',
          optional: '',
          default: ''
        },
        {
          parameter: 'block',
          description: '将按钮宽度调整为其父宽度的选项',
          dataTypes: 'Boolean',
          optional: 'true/false',
          default: 'false'
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>

