<template>
  <div class="popup" ref="channelList" >
    <!-- better-scroll只处理容器的第一个子元素，其他的元素会被忽略，如果里面需要滚动的部分有好几部分。一定要拿一个元素把它包裹起来 -->
    <div>
      <div class="title">
        <span>长按进行编辑</span>
        <button v-if="!isEdit" @click="eidt">编辑</button>
        <span v-if="isEdit" class="done" @click="done">完成</span>
        <span v-if="!isEdit" class="last" @click="close">×</span>
      </div>
      <ul class="list">
        <li
          v-for="item in selected"
          :key="item.id"
          @touchstart="gotouchstart"
          @touchend="gotouchend"
        >
          {{item.name}}
          <span v-if="isEdit" @click="del(item.id)">×</span>
        </li>
        <li style="height: 0px;visibility: hidden;"></li>
        <li style="height: 0px;visibility: hidden;"></li>
        <li style="height: 0px;visibility: hidden;"></li>
      </ul>
      <div class="title">
        <span>点击添加更多频道</span>
      </div>
      <ul class="list">
        <li v-for="item in unselected" :key="item.id" @click="add(item.id)">{{item.name}}</li>
        <li style="height: 0px;visibility: hidden;"></li>
        <li style="height: 0px;visibility: hidden;"></li>
        <li style="height: 0px;visibility: hidden;"></li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      // selected: this.$store.state.CurrentNavList,
      // unselected: this.$store.getters.unselected,
      isEdit: false,
      startT: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.channelList, {
        startY: 0,
        click: true,
        scrollX: false, // 忽略横向滚动
        scrollY: true // 竖直方向的滚动
      });
    });
  },
  computed: {
    selected() {
      return this.$store.state.CurrentNavList;
    },
    unselected() {
      return this.$store.getters.unselected;
    }
    // 转移到store里统一处理
    // unselected: function() {
    // let that = this
    // let arr = []
    // let bl = null
    // that.$store.state.NavList.forEach(s=>{
    //     bl = true
    //     that.$store.state.CurrentNavList.forEach(i=>{
    //         if (i.id == s.id) {
    //             bl = false
    //         }
    //     })
    //     if (bl) {
    //         arr.push(s)
    //     }
    // })
    // return arr
    // }
  },
  methods: {
    eidt() {
      this.isEdit = true;
    },
    done() {
      this.isEdit = false;
    },
    close() {
      this.$emit("close"); // $emit的作用就是将事件进行向上派发
    },
    gotouchstart() {
      this.startT = new Date();
    },
    gotouchend() {
      if (new Date() - this.startT > 700) {
        this.isEdit = true;
      }
    },
    del(id) {
      console.log(id);
      this.$store.commit("del", id);
    },
    add(id) {
      this.$store.commit("add", id);
    }
  }
};
</script>
<style lang="scss" scoped>
.popup {
  width: 100%;
  height: calc(100vh - 200px);
  overflow: hidden;
  background-color: #fff;
  position: fixed;
  top: 104px;
  left: 0;
}
.title {
  width: 100%;
  height: 100px;
  line-height: 100px;
  box-sizing: border-box;
  padding: 0 10px;
  position: relative;
  border-bottom: 1px solid #f2f2f2;
  button {
    width: 100px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border-radius: 30px;
    border: none;
    outline: none;
    background-color: #519aff;
    color: #fff;
    position: absolute;
    top: 20px;
    right: 100px;
  }
  span:first-child {
    font-size: 32px;
    color: #626262;
  }
  .done {
    width: 120px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    position: absolute;
    top: 0;
    right: 10px;
  }
  .last {
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    font-size: 70px;
    color: #7f7f7f;
    position: absolute;
    top: 0;
    right: 10px;
  }
}
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 40px;
  box-sizing: border-box;
  // &:after {
  //     content: "";
  //     flex: 90px;
  // }
  li {
    width: 140px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    background-color: #f7f7f8;
    margin-top: 20px;
    font-size: 28px;
    border-radius: 8px;
    position: relative;
    span {
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      font-size: 30px;
      color: #fff;
      background-color: #999;
      border-radius: 50%;
      position: absolute;
      top: -10px;
      right: -10px;
    }
  }
}
ul:nth-child(2) {
  border-bottom: 10px solid #efeff0;
  li {
    color: #519aff;
  }
}
</style>
