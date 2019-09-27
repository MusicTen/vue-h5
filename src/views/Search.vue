<template>
  <div>
    <Header></Header>
    <div class="inputBox">
      <input type="text" v-model="query" placeholder="搁这儿输入...">
      <img src="../assets/img/search.png" alt>
    </div>
    <h3 class="hot">热门推荐</h3>
    <div class="content">
      <transition-group
        name="staggered-fade"
        tag="ul"
        v-bind:css="false"
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:leave="leave"
      >
        <li v-for="(item, index) in computedList" :key="item.title" :data-index="index">
          <img :src="item.imgUrl" alt>
          <div class="aside">
            <h4>{{item.title}}</h4>
            <p>
              <span>{{item.from}}</span>
              <span>{{item.createTime}}</span>
            </p>
          </div>
        </li>
      </transition-group>
    </div>
  </div>
</template>
<script>
import Header from "@/components/common/Header";
import Velocity from "velocity-animate";
export default {
  components: {
    Header
  },
  data() {
    return {
      query: "",
      dataList: [
        {
          imgUrl: require("../assets/img/car/plan2.jpg"),
          createTime: "2020-02-13",
          title: "凯迪拉克XT4  2018款 28T 两驱豪华型-前脸",
          from: "凯迪拉克官网"
        },
        {
          imgUrl: require("../assets/img/car/plan3.jpg"),
          createTime: "2020-03-13",
          title: "凯迪拉克XT4  2018款 28T 两驱豪华型-侧脸",
          from: "凯迪拉克官网"
        },
        {
          imgUrl: require("../assets/img/car/plan4.jpg"),
          createTime: "2020-04-13",
          title: "凯迪拉克XT4  2018款 28T 两驱豪华型-左侧",
          from: "凯迪拉克官网"
        },
        {
          imgUrl: require("../assets/img/car/plan5.jpg"),
          createTime: "2020-05-13",
          title: "凯迪拉克XT4  2018款 28T 两驱豪华型-右侧",
          from: "凯迪拉克官网"
        }
      ]
    };
  },
  computed: {
    computedList: function() {
      var vm = this;
      return this.dataList.filter(function(item) {
        return item.title.indexOf(vm.query) !== -1;
      });
    }
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 1, height: "100%" }, { complete: done });
      }, delay);
    },
    leave: function(el, done) {
      var delay = el.dataset.index * 150;
      setTimeout(function() {
        Velocity(el, { opacity: 0, height: 0 }, { complete: done });
      }, delay);
    }
  }
};
</script>
<style lang="scss" scoped>
.inputBox {
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 110px 10px 0;
  input {
    width: 80%;
    height: 70px;
    line-height: 70px;
    border: 2px solid rgb(190, 190, 190);
    font-size: 30px;
    border-radius: 40px;
    outline: none;
    padding-left: 40px;
    &::-webkit-input-placeholder { /* WebKit browsers */
      color: rgb(190, 190, 190);
      font-size: 24px;
    }
  }
  img {
    width: 50px;
    height: 50px;
  }
}
.hot {
  margin: 20px;
  padding-left: 8px;
  font-size: 32px;
  border-left: 8px solid #f1260b;
}
.content {
  padding: 0 20px;
  font-size: 30px;
  li {
    display: flex;
    border-bottom: 2px solid rgb(214, 214, 214);
    padding: 20px 10px;
    img {
      width: 180px;
      height: 120px;
      margin-right: 10px;
    }
    .aside {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      p {
        font-size: 26px;
        display: flex;
        justify-content: space-between;
        color: #999;
      }
    }
  }
}
</style>
