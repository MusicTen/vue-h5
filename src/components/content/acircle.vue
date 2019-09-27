<template>
  <div>
    <ul v-for="(sub, idx) in this.data" :key="idx">
      <li class="post" @click="seeDetails(idx, sub.type)">
        <div class="top">
          <img class="portrait" :src="sub.circleImg" alt>
          <ul>
            <li v-for="(item,index) in sub.topThreeImgs" :key="index">
              <img :src="item" alt>
            </li>
          </ul>
          <div class="name">
            <h5>{{sub.circleName}}</h5>
            <p>{{sub.concernNum}}{{sub.concernType}}关注</p>
          </div>
        </div>
        <div class="post-content">
          <h5>{{sub.title}}</h5>
          <p>{{sub.summary}}</p>
          <ul>
            <li v-for="(item,index) in sub.imgs" :key="index">
              <img :src="item" alt>
            </li>
          </ul>
          <div class="release">
            <img :src="sub.publisherImg" alt>
            <span>{{sub.publisher}}</span>发布
          </div>
        </div>
        <div class="hotcomment">
          <div class="zan">
            <span>热评</span>
            <span>1197赞</span>
          </div>
          <p>
            <span>{{sub.hotcomment.commentator}}</span>
            ：{{sub.hotcomment.comment}}
          </p>
        </div>
        <div class="tab">
          <ul>
            <li>&#x2660; {{sub.commentNum}}</li>
            <li>&#x2665; {{sub.agreeNum}}</li>
            <li>&#x2666; {{sub.shareNum}}</li>
            <li>&#x2663; {{sub.collectNum}}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: Array,
    isDetail: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    console.log('acircle', this.data);
  },
  methods: {
    seeDetails(idx, type) {
      if (!this.isDetail) {
        this.$router.push({path: '/detail', query: {idx: idx, type: type}});
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.post {
  color: #434343;
  border-bottom: 20px solid #f0f3f5;
}
.top {
  width: 100%;
  height: 160px;
  background-color: #fafafa;
  padding: 30px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  .portrait {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    float: left;
    margin-right: 10px;
  }
  ul {
    float: right;
    padding-top: 10px;
    margin-right: 10px;
    li {
      position: relative;
      z-index: 1;
      float: left;
      img {
        width: 60px;
        height: 60px;
        border: 2px solid #e7e7e7;
        border-radius: 50%;
      }
    }
    li:first-child {
      z-index: 2;
      transform: translateX(10px);
    }
    li:last-child {
      z-index: 0;
      transform: translateX(-10px);
    }
    &::after {
      content: "";
      width: 30px;
      height: 30px;
      border-top: 6px solid #ddd;
      border-right: 6px solid #ddd;
      position: absolute;
      top: 54px;
      right: 20px;
      transform: rotate(45deg);
    }
  }
  .name {
    h5 {
      width: 60%;
      white-space: nowrap;
      font-size: 30px;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 4px 0 10px 0;
    }
    p {
      font-size: 24px;
      color: #21b119;
    }
  }
}
.post-content {
  padding: 0 15px;
  font-size: 30px;
  h5 {
    padding: 10px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    font-size: 28px;
    display: -webkit-box;
    text-align: justify;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  ul {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 32%;
      margin-bottom: 10px;
      border: 1px solid #ddd;
      img {
        width: 100%;
        height: 160px;
        object-fit: cover;
        display: block;
      }
    }
  }
  .release {
    height: 50px;
    line-height: 50px;
    display: flex;
    align-items: center;
    color: #c6c6c6;
    padding: 10px 0;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    span {
      margin: 0 5px;
      color: #4b4b4b;
      font-weight: 600;
    }
  }
}
.hotcomment {
  margin: 0 15px;
  padding: 10px;
  background-color: #fafafa;
  font-size: 28px;
  .zan {
    height: 40px;
    line-height: 40px;
    margin-bottom: 10px;
    span:first-child {
      width: 80px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 5px;
      float: left;
      color: #000;
      font-weight: 800;
      background-color: #ffe411;
    }
    span:last-child {
      float: right;
      color: #cacaca;
    }
  }
  p {
    line-height: 40px;
    span {
      color: #04a9f4;
    }
  }
}
.tab {
  height: 80px;
  line-height: 80px;
  box-sizing: border-box;
  margin: 15px;
  border-top: 1px solid #ddd;
  ul {
    display: flex;
    flex: 4;
    li {
      flex: 1;
      text-align: center;
      font-size: 30px;
    }
  }
}
</style>
