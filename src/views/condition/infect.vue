<template>
  <div class="map">
    <div id="chart"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'infect',
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      const chart = echarts.init(document.getElementById('chart'))
      const option = {
        tooltip: {
          trigger: "item",
        },
        visualMap: {
          min: 0,
          max: 5000,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        series: [
          {
            name: "感染人数",
            type: "map",
            mapType: "重庆",
            roam: false,
            label: {
              normal: {
                show: true,
              },
              emphasis: {
                show: true,
              },
            },
            itemStyle: {
              normal: {
                borderWidth: 0.2 /* //区域边框宽度 */,
                borderColor: "#009fe8" /* //区域边框颜色 */,
                areaColor: "#ddd",
              }
            },
            showLegendSymbol: true,
            data: [
              { name: "渝北区", value: 4139 },
              { name: "巴南区", value: 1555 },
              { name: "沙坪坝区", value: 3455 },
              { name: "南岸区", value: 3444 },
              { name: "江北区", value: 2555 },
              { name: "北碚区", value: 2345 },
              { name: "渝中区", value: 1103 },
              { name: "九龙坡区", value: 5007 },
              { name: "大渡口区", value: 1004 }
            ],
          },
        ],
      }
      echarts.registerMap("重庆", require("../../assets/json/chongqing.json"))
      chart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.map {
  width: 100%;
  height: 100%;
}
#chart {
    height: 100%;
    width: 50%;
  }
</style>