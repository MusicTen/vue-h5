<template>
  <div class="home">
    <Header></Header>
    <div class="scroll">
      <ul>
        <li v-for="(item, index) in nav" :class="{current: currentIdx == index}" :key="index" @click="switchNav(index)">{{ item }}</li>
      </ul>
    </div>
    <div v-if="!datas" class="skeleton">
      <!-- Displays if datas is not set.
        Options
        speed: Number - How many seconds between pulses of the loader.
        height / width: Number - size of the loader contents.
        primaryColor: String - The color of the elements.
        secondaryColor: String - The color of the pulser.
        animate: Boolean - Whether or not to display the pulser.
      -->
      <InstagramLoader :animate="false"></InstagramLoader>
      <InstagramLoader :animate="false"></InstagramLoader>
    </div>
    <div v-else>
      <Acircle v-for="(item, index) in datas" :key="index" :data="item"></Acircle>
    </div>
  </div>
</template>
<script>
import Header from "@/components/common/Header";
import Acircle from "@/components/content/acircle";
import { InstagramLoader } from "vue-content-loader"; // 骨架屏

export default {
  components: {
    Header,
    Acircle,
    InstagramLoader
  },
  data() {
    return {
      datas: null,
      nav: ['关注', '热门', '发现'],
      currentIdx: 0
    };
  },
  mounted() {
    // Just pretend this is an AJAX call. Use your imagination.
    setTimeout(() => {
      this.datas = [
        {
          circleName: "职场那些事er",
          circleImg:
            "https://img.awesomes.cn/thumbs/told/1502145019183-2769-1403.png",
          concernType: "职场人士",
          concernNum: "25万",
          topThreeImgs: [
            "https://img.awesomes.cn/thumbs/told/151009142408-2-1.jpg",
            "https://img.awesomes.cn/thumbs/told/1512573259656-1-1146.png",
            "https://img.awesomes.cn/ts/q5/8686520736.png"
          ],
          title: "这是我见过怼马云最恨的",
          summary:
            "马云谈996归根到底是希望员工倾注在工作上更多的经历，回头看马云的成长史，做老师的时候又花了多少精力在本职工作上呢？",
          imgs: [
            require("../assets/car/plan1.jpg"),
            require("../assets/car/plan2.jpg"),
            require("../assets/car/plan3.jpg"),
            require("../assets/car/plan4.jpg"),
            require("../assets/car/plan5.jpg"),
            require("../assets/car/plan7.jpg")
          ],
          publisher: "首席内幕官",
          publisherImg:
            "https://img.awesomes.cn/thumbs/told/1501194606870-2752-2679.png",
          hotcomment: {
            commentator: "我是一个杠精",
            comment: "马爸爸为我们证实了一个道理: 好好干本职工作是没有前途的。"
          },
          commentNum: 755,
          agreeNum: 255,
          shareNum: 126,
          collectNum: 36
        },
        {
          circleName: "单身那些事er",
          circleImg:
            "https://img.awesomes.cn/thumbs/told/1501659570879-2760-3572.png",
          concernType: "单身男女",
          concernNum: "21万",
          topThreeImgs: [
            "https://img.awesomes.cn/thumbs/told/1503873384793-2097-5604.png",
            "https://img.awesomes.cn/thumbs/told/151007151140-31-1.png",
            "https://img.awesomes.cn/thumbs/told/151113202902-26.jpg"
          ],
          title: "这是我见过怼马云最恨的",
          summary:
            "本来是想帮朋友吓跑相亲对象，没想到对方居然一开始就知道？？这样的相亲对象太沙(可)雕(爱)了！来感受一下hahahahahahaha",
          imgs: [
            require("../assets/car/plan1.jpg"),
            require("../assets/car/plan2.jpg"),
            require("../assets/car/plan3.jpg"),
            require("../assets/car/plan4.jpg"),
            require("../assets/car/plan5.jpg"),
            require("../assets/car/plan7.jpg")
          ],
          publisher: "皮咔皮咔皮卡丘",
          publisherImg:
            "https://img.awesomes.cn/thumbs/told/151113193658-77.jpg",
          hotcomment: {
            commentator: "我是一个杠精",
            comment: "马爸爸为我们证实了一个道理: 好好干本职工作是没有前途的。"
          },
          commentNum: 359,
          agreeNum: 137,
          shareNum: 86,
          collectNum: 49
        }
      ];
    }, 1000)
  },
  methods: {
    switchNav(idx) {
      this.currentIdx = idx
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
}
.scroll {
  ul {
    width: 66%;
    height: 80px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    li {
      width: 20%;
      line-height: 80px;
      text-align: center;
      font-size: 32px;
    }
    .current {
      border-bottom: 4px solid rgb(238, 14, 14);
    }
  }
}
.skeleton {
  padding: 15px;
}
</style>