<template>
  <div class="minirefresh-wrap">
    <div class="minirefresh-scroll">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
import MiniRefreshTools from "minirefresh";
import "minirefresh/dist/debug/minirefresh.css";
// 引入默认主题
import 'minirefresh/dist/debug/themes/default/minirefresh.theme.default.js';
import 'minirefresh/dist/debug/themes/default/minirefresh.theme.default.css';
// 引入淘宝主题
// import 'minirefresh/dist/debug/themes/taobao/minirefresh.theme.taobao.js';
// import 'minirefresh/dist/debug/themes/taobao/minirefresh.theme.taobao.css';
// 引入类微信主题
// import 'minirefresh/dist/debug/themes/applet/minirefresh.theme.applet.js';
// import 'minirefresh/dist/debug/themes/applet/minirefresh.theme.applet.css';
// 引入drawer3d主题
// import 'minirefresh/dist/debug/themes/drawer3d/minirefresh.theme.drawer3d.js';
// import 'minirefresh/dist/debug/themes/drawer3d/minirefresh.theme.drawer3d.css';
// 引入drawerslider主题
// import 'minirefresh/dist/debug/themes/drawerslider/minirefresh.theme.drawerslider.js';
// import 'minirefresh/dist/debug/themes/drawerslider/minirefresh.theme.drawerslider.css';

const COMPONENT_NAME = "minirefrsh";

export default {
  name: COMPONENT_NAME,
  props: {
    title: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      minirefresh: null
    };
  },
  mounted() {
    setTimeout(() => {
      // 延时生成
      this.initMiniRefresh();
    }, 20);
  },
  methods: {
    initMiniRefresh() {
      // 暂时处理深复制
      this.miniRefresh = new MiniRefreshTools.theme.defaults(
        Object.assign(this.options, {
          down: Object.assign(this.options.down || {}, {
            callback: () => {
              this.$emit("pullingDown");
            }
          }),
          up: Object.assign(this.options.up || {}, {
            callback: () => {
              this.$emit("pullingUp");
            }
          })
        })
      );
    },
    triggerDownLoading(isShowLoading) {
      this.miniRefresh.triggerDownLoading(isShowLoading);
    },
    triggerUpLoading(isShowLoading) {
      this.miniRefresh.triggerUpLoading(isShowLoading);
    },
    endDownLoading(isSuccess, successTips) {
      this.miniRefresh.endDownLoading(isSuccess, successTips);
    },
    endUpLoading(isFinishUp) {
      this.miniRefresh.endUpLoading(isFinishUp);
    },
    resetUpLoading() {
      this.miniRefresh.resetUpLoading();
    },
    scrollTo(y, duration) {
      this.miniRefresh.scrollTo(y, duration);
    },
    refreshOptions(options) {
      this.miniRefresh.refreshOptions(options);
    }
  }
};
</script>

<style>
.minirefresh-scroll {
  background: #ffffff;
}
</style>