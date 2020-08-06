<template>
	<div>
		<Header></Header>
		<div class="inputBox">
			<input type="text" v-model="query" placeholder="搁这儿输入..." />
			<img src="../assets/img/search.png" alt />
		</div>
    <div class="swiper-container1">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in tips" :key="index">{{ item }}</div>
      </div>
    </div>
		<text-scroll :dataList="tips"></text-scroll>
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
					<img :src="item.imgUrl" alt />
					<div class="aside">
						<h4>{{ item.title }}</h4>
						<p>
							<span>{{ item.from }}</span>
							<span>{{ item.createTime }}</span>
						</p>
					</div>
				</li>
			</transition-group>
		</div>
    <h3 class="hot">冷门推荐</h3>
    <div class="swiper-container2 swiper-no-swiping">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(v, i) in nameList" :key="i">
          <span>{{ v.name }}成功领取{{ v.value | Format }}元，打款已到账</span>{{ v.date }}
        </div>
      </div>
    </div>
	</div>
</template>
<script>
import Swiper from 'swiper'
import Header from '@/components/common/Header'
import TextScroll from '@/components/content/TextScroll'
import Velocity from 'velocity-animate'
export default {
	components: {
		Header, TextScroll
	},
	data() {
		return {
      query: '',
      tips: [
        '开源、免费、强大的触摸滑动插件',
        '面向手机、平板电脑等移动终端',
        '是架构移动终端网站的重要选择'
      ],
			dataList: [
				{
					imgUrl: require('../assets/img/car/plan2.jpg'),
					createTime: '2020-02-13',
					title: '凯迪拉克XT4  2018款 28T 两驱豪华型-前脸',
					from: '凯迪拉克官网'
				},
				{
					imgUrl: require('../assets/img/car/plan3.jpg'),
					createTime: '2020-03-13',
					title: '凯迪拉克XT4  2018款 28T 两驱豪华型-侧脸',
					from: '凯迪拉克官网'
				},
				{
					imgUrl: require('../assets/img/car/plan4.jpg'),
					createTime: '2020-04-13',
					title: '凯迪拉克XT4  2018款 28T 两驱豪华型-左侧',
					from: '凯迪拉克官网'
				},
				{
					imgUrl: require('../assets/img/car/plan5.jpg'),
					createTime: '2020-05-13',
					title: '凯迪拉克XT4  2018款 28T 两驱豪华型-右侧',
					from: '凯迪拉克官网'
				}
      ],
      nameList: [
        {
          name: '18848975581',
          value: '1232312321',
          date: '2020.03.21'
        },
        {
          name: '18848975582',
          value: '32312321',
          date: '2020.04.01'
        },
        {
          name: '18848975583',
          value: '82321',
          date: '2020.04.11'
        },
        {
          name: '18848975584',
          value: '1312321',
          date: '2020.04.13'
        },
        {
          name: '18848975585',
          value: '121231',
          date: '2020.04.15'
        },
        {
          name: '18848975587',
          value: '42123221',
          date: '2020.04.18'
        },
        {
          name: '18848975588',
          value: '321231',
          date: '2020.04.20'
        }
      ]
		}
	},
	computed: {
		computedList: function() {
			var vm = this
			return this.dataList.filter(function(item) {
				return item.title.indexOf(vm.query) !== -1
			})
		}
  },
  filters: {
    Format(value) {
      return (value / 10000).toFixed(2)
    }
  },
  mounted() {
    new Swiper(".swiper-container1", {
      loop: true,
      direction : 'vertical',
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      }
    }) 
    new Swiper(".swiper-container2", {
      loop: true,
      speed: 1000,
      direction: 'vertical',
      slidesPerView: 6,
      spaceBetween: 10,
      observer: true, //修改swiper自己或子元素时，自动初始化swiper 
      observeParents: true, //修改swiper的父元素时，自动初始化swiper
      autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
      }
    }) 
  },
	methods: {
		beforeEnter: function(el) {
			el.style.opacity = 0
			el.style.height = 0
		},
		enter: function(el, done) {
			var delay = el.dataset.index * 150
			setTimeout(function() {
				Velocity(el, { opacity: 1, height: '100%' }, { complete: done })
			}, delay)
		},
		leave: function(el, done) {
			var delay = el.dataset.index * 150
			setTimeout(function() {
				Velocity(el, { opacity: 0, height: 0 }, { complete: done })
			}, delay)
		}
	}
}
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
		&::-webkit-input-placeholder {
			/* WebKit browsers */
			color: rgb(190, 190, 190);
			font-size: 24px;
		}
	}
	img {
		width: 50px;
		height: 50px;
	}
}
.swiper-container1 {
	height: 1rem;
  overflow: hidden;
	background-color: pink;
  .swiper-wrapper {
    .swiper-slide {
      line-height: 1rem;
      text-align: center;
      font-size: .32rem;
      color: #fff;
    }
  }
}
.swiper-container2 {
  width: 100%;
  height: 5rem;
  padding: 0 0.25rem;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: hidden;
  .swiper-wrapper {
    height: 5rem;
    .swiper-slide {
      height: 0.5rem;
      border-radius: .5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #EBD3AC;
      font-size: 0.22rem;
      font-weight: bold;
      color: #9f3700;
      padding: 0 0.25rem;
      box-sizing: border-box;
      span {
        width: 80%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
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
