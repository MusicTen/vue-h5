// 防抖
export function _debounce(fn, delay = 200) {
	var timer
	return function() {
		var that = this
		var args = arguments
		if (timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(function() {
			timer = null
			fn.apply(that, args)
		}, delay)
	}
}
// 节流
export function _throttle(fn, interval = 200) {
	var last
	var timer
	return function() {
		var that = this
		var args = arguments
		var now = +new Date()
		if (last && now - last < interval) {
			clearTimeout(timer)
			timer = setTimeout(function() {
				last = now
				fn.apply(that, args)
			}, interval)
		} else {
			last = now
			fn.apply(that, args)
		}
	}
}
