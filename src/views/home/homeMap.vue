<template>
  <div class="home-map">
    <div class="home-center">
      <baidu-map class="map" center="重庆">
      </baidu-map>
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
    .map {
      height: 100%;
    }
  }
}

</style>