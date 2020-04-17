// guage-option.js
export const option = {
	radar: [
		{
			indicator: [
				{ text: '品牌', max: 100 },
				{ text: '内容', max: 100 },
				{ text: '可用性', max: 100 },
				{ text: '功能', max: 100 }
			],
			radius: 80
		}
	],
	series: [
		{
      center: ['50%'],
			type: 'radar',
			tooltip: {
				trigger: 'item'
			},
			areaStyle: {},
			data: [
				{
					value: [60, 73, 85, 40],
					name: '某软件'
				}
			]
		}
	]
}
