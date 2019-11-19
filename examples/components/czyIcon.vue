<template>
  <div class="content-box">
    <h2 class="demo-title">czy 图标</h2>
    <p class="demo-introduction">语义化的矢量图形。</p>

    <czy-anchor>
      <czy-anchor-link href="czy-simple" title="使用方法"/>
      <czy-anchor-link href="czy-ofen-list" title="常用图标"/>
      <czy-anchor-link href="czy-list" title="图标集合"/>
    </czy-anchor>

    <div class="demo-tip">
      <p>该项目使用 Ant Design 官方图标库</p>
      <p>
        <a
                href="https://www.czyi.cn/collections/detail?spm=a313x.7781069.1998910419.de12df413&cid=9402"
                target="_blank"
        >https://www.czyi.cn/collections/detail?spm=a313x.7781069.1998910419.de12df413&cid=9402</a>
      </p>
    </div>

    <czy-backtop :visibilityHeight="300"/>

    <div class="czy-czy" id="czy-simple">
      <!-- 使用方法DEMO -->
      <czy-el-demo-block
              :height="294"
              :introduction="'直接通过设置类名为 iconfont，icon-iconName 来使用即可。例如：'"
              :title="'使用方法'"
      >
        <template v-slot:demo>
          <i class="czyi czy-calendar-check" style="margin: 0 20px;"></i>
          <i class="czyi czy-share" style="margin: 0 20px;"></i>
          <i class="czyi czy-search" style="margin: 0 20px;"></i>
          <i class="czyi czy-star-fill" style="margin: 0 20px;"></i>
          <i class="czyi czy-edit-fill" style="margin: 0 20px;"></i>
          <i class="czyi czy-alipay" style="margin: 0 20px;"></i>
          <i class="czyi czy-taobao" style="margin: 0 20px;"></i>
          <i class="czyi czy-QQ" style="margin: 0 20px;"></i>
          <i class="czyi czy-weibo" style="margin: 0 20px;"></i>
          <i class="czyi czy-wechat-fill" style="margin: 0 20px;"></i>
          <i class="czyi czy-github-fill" style="margin: 0 20px;"></i>
        </template>
        <template v-slot:code>
          <code class="html">{{fCode(simple.code.html)}}</code>
        </template>
      </czy-el-demo-block>

      <!-- 常用图标 -->
      <div id="czy-ofen-list">
        <h3 class="demo-table-title">常用图标</h3>
        <ul class="czy-list">
          <li
                  :class="{'rigth_block':index % 5 === 4}"
                  :key="item"
                  v-for="(item,index) in ofen_icon_list"
          >
            <div>
              <i :class="item" class="czyi"></i>
              <p class="czy-name">{{item}}</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- 图标集合 -->
      <div id="czy-list">
        <h3 class="demo-table-title">图标集合</h3>
        <ul class="czy-list">
          <li
                  :class="{'rigth_block':index % 5 === 4}"
                  :key="item"
                  v-for="(item,index) in icon_list"
          >
            <div>
              <i :class="item" class="czyi"></i>
              <p class="czy-name">{{item}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'czyIcon',
    data() {
      return {
        //基础用法DEMO
        simple: {
          code: {
            html: `
          <i class="czyi czy-calendar-check"></i>
          <i class="czyi czy-share"></i>
          <i class="czyi czy-search"></i>
          <i class="czyi czy-star-fill"></i>
          <i class="czyi czy-edit-fill"></i>
          <i class="czyi czy-alipay"></i>
          <i class="czyi czy-taobao"></i>
          <i class="czyi czy-QQ"></i>
          <i class="czyi czy-weibo"></i>
          <i class="czyi czy-wechat-fill"></i>
          <i class="czyi czy-github-fill"></i>

          `
          }
        },
        ofen_icon_list: [
          'czy-reload',
          'czy-message',
          'czy-poweroff',
          'czy-setting',
          'czy-eye',
          'czy-export',
          'czy-location',
          'czy-edit-square',
          'czy-play-square',
          'czy-adduser',
          'czy-addteam',
          'czy-user',
          'czy-steam',
          'czy-file-image',
          'czy-file-unknown',
          'czy-file',
          'czy-like',
          'czy-unlike',
          'czy-cloud-upload',
          'czy-cloud-download',
          'czy-mail',
          'czy-heart',
          'czy-star',
          'czy-right',
          'czy-left',
          'czy-up',
          'czy-down',
          'czy-question',
          'czy-close_1',
          'czy-close',
          'czy-line',
          'czy-drag',
          'czy-folder-fill',
          'czy-cloud-fill',
          'czy-star-fill',
          'czy-eye-fill',
          'czy-like-fill',
          'czy-unlike-fill',
          'czy-zoomout',
          'czy-zoomin',
          'czy-plus'
        ],
        icon_list: [
          'czy-xiaochengxu',
          'czy-muyingwanju',
          'czy-steam-fill',
          'czy-close_1',
          'czy-check-circle',
          'czy-CI',
          'czy-Dollar',
          'czy-compass',
          'czy-close-circle',
          'czy-frown',
          'czy-info-circle',
          'czy-left-circle',
          'czy-down-circle',
          'czy-EURO',
          'czy-copyright',
          'czy-minus-circle',
          'czy-meh',
          'czy-plus-circle',
          'czy-play-circle',
          'czy-question-circle',
          'czy-Pound',
          'czy-right-circle',
          'czy-smile',
          'czy-trademark',
          'czy-time-circle',
          'czy-timeout',
          'czy-earth',
          'czy-YUAN',
          'czy-up-circle',
          'czy-warning-circle',
          'czy-sync',
          'czy-transaction',
          'czy-undo',
          'czy-redo',
          'czy-reload',
          'czy-reloadtime',
          'czy-message',
          'czy-dashboard',
          'czy-issuesclose',
          'czy-poweroff',
          'czy-logout',
          'czy-piechart',
          'czy-setting',
          'czy-eye',
          'czy-location',
          'czy-edit-square',
          'czy-export',
          'czy-save',
          'czy-Import',
          'czy-appstore',
          'czy-close-square',
          'czy-down-square',
          'czy-layout',
          'czy-left-square',
          'czy-play-square',
          'czy-control',
          'czy-codelibrary',
          'czy-detail',
          'czy-minus-square',
          'czy-plus-square',
          'czy-right-square',
          'czy-project',
          'czy-wallet',
          'czy-up-square',
          'czy-calculator',
          'czy-interation',
          'czy-check-square',
          'czy-border',
          'czy-border-outer',
          'czy-border-top',
          'czy-border-bottom',
          'czy-border-left',
          'czy-border-right',
          'czy-border-inner',
          'czy-border-verticle',
          'czy-border-horizontal',
          'czy-radius-bottomleft',
          'czy-radius-bottomright',
          'czy-radius-upleft',
          'czy-radius-upright',
          'czy-radius-setting',
          'czy-adduser',
          'czy-deleteteam',
          'czy-deleteuser',
          'czy-addteam',
          'czy-user',
          'czy-team',
          'czy-areachart',
          'czy-linechart',
          'czy-barchart',
          'czy-pointmap',
          'czy-container',
          'czy-database',
          'czy-sever',
          'czy-mobile',
          'czy-tablet',
          'czy-redenvelope',
          'czy-book',
          'czy-filedone',
          'czy-reconciliation',
          'czy-file-exception',
          'czy-filesync',
          'czy-filesearch',
          'czy-solution',
          'czy-fileprotect',
          'czy-file-add',
          'czy-file-excel',
          'czy-file-exclamation',
          'czy-file-pdf',
          'czy-file-image',
          'czy-file-markdown',
          'czy-file-unknown',
          'czy-file-ppt',
          'czy-file-word',
          'czy-file',
          'czy-file-zip',
          'czy-file-text',
          'czy-file-copy',
          'czy-snippets',
          'czy-audit',
          'czy-diff',
          'czy-Batchfolding',
          'czy-securityscan',
          'czy-propertysafety',
          'czy-safetycertificate',
          'czy-insurance',
          'czy-alert',
          'czy-delete',
          'czy-hourglass',
          'czy-bulb',
          'czy-experiment',
          'czy-bell',
          'czy-trophy',
          'czy-rest',
          'czy-USB',
          'czy-skin',
          'czy-home',
          'czy-bank',
          'czy-filter',
          'czy-funnelplot',
          'czy-like',
          'czy-unlike',
          'czy-unlock',
          'czy-lock',
          'czy-customerservice',
          'czy-flag',
          'czy-moneycollect',
          'czy-medicinebox',
          'czy-shop',
          'czy-rocket',
          'czy-shopping',
          'czy-folder',
          'czy-folder-open',
          'czy-folder-add',
          'czy-deploymentunit',
          'czy-accountbook',
          'czy-contacts',
          'czy-carryout',
          'czy-calendar-check',
          'czy-calendar',
          'czy-scan',
          'czy-select',
          'czy-boxplot',
          'czy-build',
          'czy-sliders',
          'czy-laptop',
          'czy-barcode',
          'czy-camera',
          'czy-cluster',
          'czy-gateway',
          'czy-car',
          'czy-printer',
          'czy-read',
          'czy-cloud-server',
          'czy-cloud-upload',
          'czy-cloud',
          'czy-cloud-download',
          'czy-cloud-sync',
          'czy-video',
          'czy-notification',
          'czy-sound',
          'czy-radarchart',
          'czy-qrcode',
          'czy-fund',
          'czy-image',
          'czy-mail',
          'czy-table',
          'czy-idcard',
          'czy-creditcard',
          'czy-heart',
          'czy-block',
          'czy-error',
          'czy-star',
          'czy-gold',
          'czy-heatmap',
          'czy-wifi',
          'czy-attachment',
          'czy-edit',
          'czy-key',
          'czy-api',
          'czy-disconnect',
          'czy-highlight',
          'czy-monitor',
          'czy-link',
          'czy-man',
          'czy-percentage',
          'czy-pushpin',
          'czy-phone',
          'czy-shake',
          'czy-tag',
          'czy-wrench',
          'czy-tags',
          'czy-scissor',
          'czy-mr',
          'czy-share',
          'czy-branches',
          'czy-fork',
          'czy-shrink',
          'czy-arrawsalt',
          'czy-verticalright',
          'czy-verticalleft',
          'czy-right',
          'czy-left',
          'czy-up',
          'czy-down',
          'czy-fullscreen',
          'czy-fullscreen-exit',
          'czy-doubleleft',
          'czy-doubleright',
          'czy-arrowright',
          'czy-arrowup',
          'czy-arrowleft',
          'czy-arrowdown',
          'czy-upload',
          'czy-colum-height',
          'czy-vertical-align-botto',
          'czy-vertical-align-middl',
          'czy-totop',
          'czy-vertical-align-top',
          'czy-download',
          'czy-sort-descending',
          'czy-sort-ascending',
          'czy-fall',
          'czy-swap',
          'czy-stock',
          'czy-rise',
          'czy-indent',
          'czy-outdent',
          'czy-menu',
          'czy-unorderedlist',
          'czy-orderedlist',
          'czy-align-right',
          'czy-align-center',
          'czy-align-left',
          'czy-pic-center',
          'czy-pic-right',
          'czy-pic-left',
          'czy-bold',
          'czy-font-colors',
          'czy-exclaimination',
          'czy-font-size',
          'czy-infomation',
          'czy-line-height',
          'czy-strikethrough',
          'czy-underline',
          'czy-number',
          'czy-italic',
          'czy-code',
          'czy-column-width',
          'czy-check',
          'czy-ellipsis',
          'czy-dash',
          'czy-close',
          'czy-enter',
          'czy-line',
          'czy-minus',
          'czy-question',
          'czy-rollback',
          'czy-small-dash',
          'czy-pause',
          'czy-bg-colors',
          'czy-crown',
          'czy-drag',
          'czy-desktop',
          'czy-gift',
          'czy-stop',
          'czy-fire',
          'czy-thunderbolt',
          'czy-check-circle-fill',
          'czy-left-circle-fill',
          'czy-down-circle-fill',
          'czy-minus-circle-fill',
          'czy-close-circle-fill',
          'czy-info-circle-fill',
          'czy-up-circle-fill',
          'czy-right-circle-fill',
          'czy-plus-circle-fill',
          'czy-question-circle-fill',
          'czy-EURO-circle-fill',
          'czy-frown-fill',
          'czy-copyright-circle-fil',
          'czy-CI-circle-fill',
          'czy-compass-fill',
          'czy-Dollar-circle-fill',
          'czy-poweroff-circle-fill',
          'czy-meh-fill',
          'czy-play-circle-fill',
          'czy-Pound-circle-fill',
          'czy-smile-fill',
          'czy-stop-fill',
          'czy-warning-circle-fill',
          'czy-time-circle-fill',
          'czy-trademark-circle-fil',
          'czy-YUAN-circle-fill',
          'czy-heart-fill',
          'czy-piechart-circle-fil',
          'czy-dashboard-fill',
          'czy-message-fill',
          'czy-check-square-fill',
          'czy-down-square-fill',
          'czy-minus-square-fill',
          'czy-close-square-fill',
          'czy-codelibrary-fill',
          'czy-left-square-fill',
          'czy-play-square-fill',
          'czy-up-square-fill',
          'czy-right-square-fill',
          'czy-plus-square-fill',
          'czy-accountbook-fill',
          'czy-carryout-fill',
          'czy-calendar-fill',
          'czy-calculator-fill',
          'czy-interation-fill',
          'czy-project-fill',
          'czy-detail-fill',
          'czy-save-fill',
          'czy-wallet-fill',
          'czy-control-fill',
          'czy-layout-fill',
          'czy-appstore-fill',
          'czy-mobile-fill',
          'czy-tablet-fill',
          'czy-book-fill',
          'czy-redenvelope-fill',
          'czy-safetycertificate-f',
          'czy-propertysafety-fill',
          'czy-insurance-fill',
          'czy-securityscan-fill',
          'czy-file-exclamation-fil',
          'czy-file-add-fill',
          'czy-file-fill',
          'czy-file-excel-fill',
          'czy-file-markdown-fill',
          'czy-file-text-fill',
          'czy-file-ppt-fill',
          'czy-file-unknown-fill',
          'czy-file-word-fill',
          'czy-file-zip-fill',
          'czy-file-pdf-fill',
          'czy-file-image-fill',
          'czy-diff-fill',
          'czy-file-copy-fill',
          'czy-snippets-fill',
          'czy-batchfolding-fill',
          'czy-reconciliation-fill',
          'czy-folder-add-fill',
          'czy-folder-fill',
          'czy-folder-open-fill',
          'czy-database-fill',
          'czy-container-fill',
          'czy-sever-fill',
          'czy-calendar-check-fill',
          'czy-image-fill',
          'czy-idcard-fill',
          'czy-creditcard-fill',
          'czy-fund-fill',
          'czy-read-fill',
          'czy-contacts-fill',
          'czy-delete-fill',
          'czy-notification-fill',
          'czy-flag-fill',
          'czy-moneycollect-fill',
          'czy-medicinebox-fill',
          'czy-rest-fill',
          'czy-shopping-fill',
          'czy-skin-fill',
          'czy-video-fill',
          'czy-sound-fill',
          'czy-bulb-fill',
          'czy-bell-fill',
          'czy-filter-fill',
          'czy-fire-fill',
          'czy-funnelplot-fill',
          'czy-gift-fill',
          'czy-hourglass-fill',
          'czy-home-fill',
          'czy-trophy-fill',
          'czy-location-fill',
          'czy-cloud-fill',
          'czy-customerservice-fill',
          'czy-experiment-fill',
          'czy-eye-fill',
          'czy-like-fill',
          'czy-lock-fill',
          'czy-unlike-fill',
          'czy-star-fill',
          'czy-unlock-fill',
          'czy-alert-fill',
          'czy-api-fill',
          'czy-highlight-fill',
          'czy-phone-fill',
          'czy-edit-fill',
          'czy-pushpin-fill',
          'czy-rocket-fill',
          'czy-thunderbolt-fill',
          'czy-tag-fill',
          'czy-wrench-fill',
          'czy-tags-fill',
          'czy-bank-fill',
          'czy-camera-fill',
          'czy-error-fill',
          'czy-crown-fill',
          'czy-mail-fill',
          'czy-car-fill',
          'czy-printer-fill',
          'czy-shop-fill',
          'czy-setting-fill',
          'czy-USB-fill',
          'czy-golden-fill',
          'czy-build-fill',
          'czy-boxplot-fill',
          'czy-sliders-fill',
          'czy-alibaba',
          'czy-alibabacloud',
          'czy-antdesign',
          'czy-ant-cloud',
          'czy-behance',
          'czy-googleplus',
          'czy-medium',
          'czy-google',
          'czy-IE',
          'czy-amazon',
          'czy-slack',
          'czy-alipay',
          'czy-taobao',
          'czy-zhihu',
          'czy-HTML',
          'czy-linkedin',
          'czy-yahoo',
          'czy-facebook',
          'czy-skype',
          'czy-CodeSandbox',
          'czy-chrome',
          'czy-codepen',
          'czy-aliwangwang',
          'czy-apple',
          'czy-android',
          'czy-sketch',
          'czy-Gitlab',
          'czy-dribbble',
          'czy-instagram',
          'czy-reddit',
          'czy-windows',
          'czy-yuque',
          'czy-Youtube',
          'czy-Gitlab-fill',
          'czy-dropbox',
          'czy-dingtalk',
          'czy-android-fill',
          'czy-apple-fill',
          'czy-HTML-fill',
          'czy-windows-fill',
          'czy-QQ',
          'czy-twitter',
          'czy-skype-fill',
          'czy-weibo',
          'czy-yuque-fill',
          'czy-Youtube-fill',
          'czy-yahoo-fill',
          'czy-wechat-fill',
          'czy-chrome-fill',
          'czy-alipay-circle-fill',
          'czy-aliwangwang-fill',
          'czy-behance-circle-fill',
          'czy-amazon-circle-fill',
          'czy-codepen-circle-fill',
          'czy-CodeSandbox-circle-f',
          'czy-dropbox-circle-fill',
          'czy-github-fill',
          'czy-dribbble-circle-fill',
          'czy-googleplus-circle-f',
          'czy-medium-circle-fill',
          'czy-QQ-circle-fill',
          'czy-IE-circle-fill',
          'czy-google-circle-fill',
          'czy-dingtalk-circle-fill',
          'czy-sketch-circle-fill',
          'czy-slack-circle-fill',
          'czy-twitter-circle-fill',
          'czy-taobao-circle-fill',
          'czy-weibo-circle-fill',
          'czy-zhihu-circle-fill',
          'czy-reddit-circle-fill',
          'czy-alipay-square-fill',
          'czy-dingtalk-square-fill',
          'czy-CodeSandbox-square-f',
          'czy-behance-square-fill',
          'czy-amazon-square-fill',
          'czy-codepen-square-fill',
          'czy-dribbble-square-fill',
          'czy-dropbox-square-fill',
          'czy-facebook-fill',
          'czy-googleplus-square-f',
          'czy-google-square-fill',
          'czy-instagram-fill',
          'czy-IE-square-fill',
          'czy-medium-square-fill',
          'czy-linkedin-fill',
          'czy-QQ-square-fill',
          'czy-reddit-square-fill',
          'czy-twitter-square-fill',
          'czy-sketch-square-fill',
          'czy-slack-square-fill',
          'czy-taobao-square-fill',
          'czy-weibo-square-fill',
          'czy-zhihu-square-fill',
          'czy-zoomout',
          'czy-apartment',
          'czy-audio',
          'czy-audio-fill',
          'czy-robot',
          'czy-zoomin',
          'czy-robot-fill',
          'czy-bug-fill',
          'czy-bug',
          'czy-audiostatic',
          'czy-comment',
          'czy-signal-fill',
          'czy-verified',
          'czy-shortcut-fill',
          'czy-videocameraadd',
          'czy-switchuser',
          'czy-whatsapp',
          'czy-appstoreadd',
          'czy-caret-down',
          'czy-backward',
          'czy-caret-up',
          'czy-caret-right',
          'czy-caret-left',
          'czy-fast-backward',
          'czy-forward',
          'czy-fast-forward',
          'czy-search',
          'czy-retweet',
          'czy-login',
          'czy-step-backward',
          'czy-step-forward',
          'czy-swap-right',
          'czy-swap-left',
          'czy-woman',
          'czy-steam',
          'czy-plus',
          'czy-eyeclose-fill',
          'czy-eye-close',
          'czy-clear',
          'czy-collapse',
          'czy-expand',
          'czy-deletecolumn',
          'czy-merge-cells',
          'czy-subnode',
          'czy-rotate-left',
          'czy-rotate-right',
          'czy-insertrowbelow',
          'czy-insertrowabove',
          'czy-table1',
          'czy-solit-cells',
          'czy-formatpainter',
          'czy-insertrowright',
          'czy-formatpainter-fill',
          'czy-insertrowleft',
          'czy-translate',
          'czy-deleterow',
          'czy-sisternode',
          'czy-Field-number',
          'czy-Field-String',
          'czy-Function',
          'czy-Field-time',
          'czy-GIF',
          'czy-Partition',
          'czy-index',
          'czy-Storedprocedure',
          'czy-Field-Binary',
          'czy-Console-SQL',
          'czy-icon-test',
          'czy-aim',
          'czy-compress',
          'czy-expend',
          'czy-folder-view',
          'czy-file-GIF',
          'czy-group',
          'czy-send',
          'czy-Report',
          'czy-View',
          'czy-shortcut',
          'czy-ungroup'
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .czy-czy {
    i {
      font-size: 28px;
    }

    .czy-list {
      width: 100%;
      overflow: hidden;
      list-style: none;
      padding: 0 !important;
      border: 1px solid #eaeefb;
      border-radius: 4px;

      .rigth_block {
        border-right: 0 !important;
      }

      li {
        float: left;
        width: 20%;
        text-align: center;
        height: 166px;
        color: #666;
        font-size: 13px;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.15s ease-in-out;

        &:hover {
          background: #409eff;

          div {
            color: #fff;
          }

          i {
            color: #fff;
            font-size: 40px;
          }
        }

        div {
          font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
          Microsoft YaHei, SimSun, sans-serif;
          color: #99a9bf;
          transition: all 0.15s ease-in-out;

          i {
            font-size: 32px;
            color: #606266;
            transition: all 0.15s ease-in-out;
          }

          .czy-name {
            padding: 20px 0;
            height: 1em;
          }
        }
      }
    }
  }
</style>

