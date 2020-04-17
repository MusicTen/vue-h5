// guage-option.js
export const option = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        show: true,
        feature: {
            mark: {
                show: true
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    series: [
        {
            name: "芝麻信用",
            type: "gauge",
            detail: {
                formatter: '{value}%'
            },
            data: [
                {
                    value: 90,
                    name: "信用分"
                }
            ]
        }
    ]
}