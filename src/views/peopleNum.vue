<template>
  <div class="people">
    <div id="num"></div>
    <div id="voice"></div>
    <div id="change"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'peopleNum',
  data() {
    return {

    }
  },
  mounted() {
    this.initCharts()
  },
  methods: {
    initCharts() {
      const myChart = echarts.init(document.getElementById('num'))
      const options = {
        title: {
          text: '声波图展示',
          left: '1%'
        },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '5%',
          right: '15%',
          bottom: '10%'
        },
        xAxis: {
          data: [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2.0,2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,2.9,3.0],
        },
        yAxis: {},
        toolbox: {
          right: 10,
          feature: {
            saveAsImage: {}
          }
        },
        dataZoom: [
          {
            startValue: '0'
          },
          {
            type: 'inside'
          }
        ],
        series: {
          name: '声波图展示',
          type: 'line',
          symbol: "none",
          smooth: true,
          itemStyle: {
            normal: {
              lineStyle: {
                  color: '#747d8c' //改变折线颜色
              }
            }
			    },
          data: [150,-110,-30,110,-233,332,155,-40,112,50,320,-110,20,250,-140,3,240,-250,50,110,300,20,199,-134,-309,234,345,-345,45,224,234,-110],
        }
      }
      myChart.setOption(options)

      const voiceChart = echarts.init(document.getElementById('voice'))
      const voiceOptions = {
        tooltip: {
          trigger: 'axis',
          position: function (pt) {
            return [pt[0], '10%'];
          }
        },
        title: {
          left: 'center',
          text: '声波图展示'
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2.0,2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,2.9,3.0,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4.0]
        },
        yAxis: {
          type: 'value'
        },
        dataZoom: [
          {
            // type: 'inside',
            startValue: '0'
          }
        ],
        series: [
          {
            name: '声波图展示',
            type: 'line',
            symbol: 'none',
            sampling: 'lttb',
            itemStyle: {
              color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(255, 158, 68)'
                },
                {
                  offset: 1,
                  color: 'rgb(255, 70, 131)'
                }
              ])
            },
            data: [150,110,50,30,80,110,200,350,-30,-50,-120,-233,-329,36,154,223,332,155,-40,112,50,320,-110,20,250,-140,3,240,-250,50,110,300,20,199,-134,-309,234,345,-345,45,224,234,-110]
          }
        ]
      }
      voiceChart.setOption(voiceOptions)

      const changChart = echarts.init(document.getElementById('change'))
      const changeOptions = {
        visualMap: [
          {
            show: false,
            type: 'continuous'
          }
        ],
        title: [
          {
            left: 'center',
            text: '声波图展示'
          }
        ],
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
            data: [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2.0,2.1,2.2,2.3,2.4,2.5,2.6,2.7,2.8,2.9,3.0,3.1,3.2,3.3,3.4,3.5,3.6,3.7,3.8,3.9,4.0]
        },
        yAxis: {},
        series: [
          {
            type: 'line',
            showSymbol: false,
            data: [150,110,50,30,80,110,200,350,-30,-50,-120,-233,-329,36,154,223,332,155,-40,112,50,320,-110,20,250,-140,3,240,-250,50,110,300,20,199,-134,-309,234,345,-345,45,224,234,-110]
          }
        ]
      }
      changChart.setOption(changeOptions)

      // const chart = echarts.init(document.getElementById(''))
      // const chartOptions = {}
      // chart.setOption(chartOptions)

      // const people = echarts.init(document.getElementById(''))
      // const peopleOptoins = {}
      // people.setOption(peopleOptoins)
    }
  }
}
</script>

<style lang="scss" scoped>
.people {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  #num, #voice, #change {
    width: 570px;
    height: 300px;
  }
  #change {
    margin-top: 20px;
  }
}
</style>