<template>
  <div class="post">
    <div class="top">
      <img class="portrait" :src="this.data.circleImg" alt>
      <ul>
        <li v-for="(item,index) in this.data.topThreeImgs" :key="index">
          <img :src="item" alt>
        </li>
      </ul>
      <div class="name">
        <h5>{{this.data.circleName}}</h5>
        <p>{{this.data.concernNum}}{{this.data.concernType}}关注</p>
      </div>
    </div>
    <div class="content">
      <h5>{{this.data.title}}</h5>
      <p>{{this.data.summary}}</p>
      <ul>
        <li v-for="(item,index) in this.data.imgs" :key="index">
          <img :src="item" alt>
        </li>
      </ul>
      <div class="release">
        <img :src="this.data.publisherImg" alt>
        <span>{{this.data.publisher}}</span>发布
      </div>
    </div>
    <div class="hotcomment">
      <div class="zan">
        <span>热评</span>
        <span>1197赞</span>
      </div>
      <p>
        <span>{{this.data.hotcomment.commentator}}</span>
        ：{{this.data.hotcomment.comment}}
      </p>
    </div>
    <div class="tab">
      <ul>
        <li>&#x2660; {{this.data.commentNum}}</li>
        <li>&#x2665; {{this.data.agreeNum}}</li>
        <li>&#x2666; {{this.data.shareNum}}</li>
        <li>&#x2663; {{this.data.collectNum}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: Object
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    console.log(this.data);
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
  height: 120px;
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
    padding-top: 5px;
    margin-right: -10px;
    li {
      position: relative;
      z-index: 1;
      float: left;
      img {
        width: 30px;
        height: 30px;
        border: 1px solid #e7e7e7;
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
      width: 15px;
      height: 15px;
      border-top: 3px solid #ddd;
      border-right: 3px solid #ddd;
      position: absolute;
      top: 27px;
      right: 20px;
      transform: rotate(45deg);
    }
  }
  .name {
    h5 {
      width: 60%;
      white-space: nowrap;
      font-size: 16px;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding: 4px 0 8px 0;
    }
    p {
      font-size: 12px;
      color: #21b119;
    }
  }
}
.content {
  padding: 0 15px;
  font-size: 16px;
  h5 {
    padding-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
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
      margin-bottom: 5px;
      border: 1px solid #ddd;
      img {
        width: 100%;
        height: 80px;
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
    img {
      width: 30px;
      height: 30px;
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
  font-size: 14px;
  .zan {
    height: 30px;
    line-height: 30px;
    margin-bottom: 10px;
    span:first-child {
      width: 50px;
      height: 30px;
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
    line-height: 18px;
    span {
      color: #04a9f4;
    }
  }
}
.tab {
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  margin: 15px;
  border-top: 1px solid #ddd;
  ul {
    display: flex;
    flex: 4;
    li {
      flex: 1;
      text-align: center;
      font-size: 20px;
    }
  }
}
</style>
