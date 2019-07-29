
<template>
  <div class="news">
    <MiniRefresh id="minirefresh"
      ref="minirefresh"
      :options="options"
      @pullingDown="onPullingDown"
      @pullingUp="onPullingUp">
      <ul slot="content">
        <li v-for="(item, index) in navLists" :key="index">{{item}}</li>
      </ul>
    </MiniRefresh>
  </div>
</template>
<script>
import MiniRefresh from "@/components/content/Minirefresh"
export default {
  name: 'Pullto',
  components: {
    MiniRefresh
  },
  data() {
    return {
      navLists: ["热点", "时政", "军事", "数码", "汽车", "娱乐", "国际", "地方", "笑话", "图片", "人文", "历史", "影视", "直播", "旅游"],
      options: {
        container: '#minirefresh',
        up: {
          isAuto: true,
          loadFull: {
            isEnable: true
          }
        }
      }
    }
  },
  methods: {
    onPullingDown() {
      setTimeout(() => {
        console.log('pulling down and load data')
        this.navLists.unshift('小视频' + Math.floor(Math.random() * 9))
        this.$refs.minirefresh.endDownLoading(true)
      }, 600)
    },
    onPullingUp() {
      setTimeout(() => {
        console.log('pulling up and load data')
        this.navLists.push('Vlog' + Math.floor(Math.random() * 9))
        this.$refs.minirefresh.endUpLoading(this.navLists.length >= 20)
      }, 600)
    }
  }
};
</script>
<style lang="scss" scoped>
.news {
  ul {
    // padding: 0 40px;
    li {
      width: 100%;
      height: 100px;
      line-height: 100px;
      text-align: center;
      font-size: 36px;
      color: #fff;
      margin-bottom: 40px;
      &:nth-child(even) {
        background-color: skyblue;
      }
      &:nth-child(odd) {
        background-color: pink;
      }
    }
  }
}
</style>