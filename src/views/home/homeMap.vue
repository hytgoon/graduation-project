<template>
  <div class="home-map">
    <div class="home-center">
      <div id="chart"></div>
    </div>
    <div class="home-chart">
      <div id="one" class="home-chart-item"></div>
      <div id="two" class="home-chart-item"></div>
      <div class="home-chart-bottom">
        <div id="three" class="home-chart-bottom-item"></div>
        <div id="four" class="home-chart-bottom-item"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { pillar, line, sector } from './service/echart'

export default {
  name: 'homeMap',
  data() {
    return {
      pillar,
      line,
      sector,
    }
  },
  mounted() {
    this.initCharts()
    this.initMapChart()
  },
  methods: {
    initCharts() {
      const chartOne = echarts.init(document.getElementById('one'))
      const optionsOne = this.line
      chartOne.setOption(optionsOne)

      const chartTwo = echarts.init(document.getElementById('two'))
      const optionsTwo = this.pillar
      optionsTwo.title.text = '感染区域'
      chartTwo.setOption(optionsTwo)

      const chartThree = echarts.init(document.getElementById('three'))
      const optionsThree = this.sector
      optionsThree.series[0].data = [
        { value: 1048, name: '确诊' },
        { value: 735, name: '治愈' },
      ]
      chartThree.setOption(optionsThree)

      const chartFour = echarts.init(document.getElementById('four'))
      const optionsFour = this.sector
      optionsFour.series[0].data = [
        { value: 148, name: '死亡' },
        { value: 735, name: '治愈' },
      ]
      chartFour.setOption(optionsFour)
    },
    initMapChart() {
      const chart = echarts.init(document.getElementById('chart'))
      const option = {
        title: {
          text: '感染人数分布'
        },
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
.home-map {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  .home-chart {
    flex: 0.7;
    display: flex;
    flex-direction: column;
    &-item {
      width: 100%;
      flex: 1;
    }
    &-bottom {
      width: 100%;
      flex: 0.5;
      display: flex;
      flex-wrap: wrap;
      &-item {
        flex: 1;
        height: 130px;
      }
    }
  }
  .home-center {
    flex: 1;
    width: 50%;
    margin-right: 10px;
    #chart {
      height: 100%;
    }
  }
}

</style>