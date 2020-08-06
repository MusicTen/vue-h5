<template>
	<div class="text-container">
		<transition class="" name="slide" mode="out-in">
			<p class="text" :key="text.id">{{ text.val }}</p>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'TextScroll',
	props: {
		dataList: {
			type: Array,
			default() {
				return []
			}
		}
	},
	data() {
		return {
			count: 0, // 当前索引
			intervalId: null, // 定时器ID
			playTime: 3000 // 定时器执行间隔
		}
	},
	computed: {
		text() {
			return {
				id: this.count,
				val: this.dataList[this.count]
			}
		}
	},
	created() {
		this.intervalId = setInterval(() => {
			// 定义定时器
			this.getText()
		}, this.playTime)
  },
  /*
    *为什么用setInterval，而不是setTimeout
      setInterval是循环执行，setTimeout是延迟执行。我们这里要的是setTimeout循环执行。通过嵌套setTimeout可以实现循环，但是每次都会注册一个计时器，然后时间上也是需要等当前setTimeout执行完再延迟比如说两秒执行，实际上就不只2s。
    *什么情况下setTimeout嵌套可以解决 setInterval 解决不了的问题
      当计时器是高耗时的计算或者dom操作时，时间大于延迟时间
  */
	methods: {
		getText() {
			const len = this.dataList.length // 获取数组长度
			if (len === 0) {
				return // 当数组为空时，直接返回
			}
			if (this.count === len - 1) {
				// 当前为最后一个时
				this.count = 0 // 从第一个开始
			} else {
				this.count++ // 自增
			}
		}
	},
	destroyed() {
		clearInterval(this.intervalId) // 清除定时器
	}
}
</script>

<style scoped>
.text-container {
  height: 60px;
	line-height: 60px;
  font-size: 14px;
  background-color: skyblue;
	color: #fff;
  overflow: hidden;
}
.text {
	text-align: center;
	margin: auto 0;
}
.slide-enter-active,
.slide-leave-active {
	transition: all 1s;
}
.slide-enter {
	transform: translateY(40px);
}
.slide-leave-to {
	transform: translateY(-40px);
}
</style>
