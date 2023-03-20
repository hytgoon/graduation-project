<template>
  <div class="statement">
    <div class="statement-top">
      <div class="statement-top-item" style="color: #F79F1F">
        <span>确诊</span>
        <span style="font-size: 35px; margin-left: 20px;">1190</span>
      </div>
      <div class="statement-top-item">
        <span style="color: #FFC312">疑似</span>
        <span style="color: #FFC312; font-size: 40px; margin-left: 20px;">190</span>
      </div>
      <div class="statement-top-item">
        <span style="color: #EE5A24">死亡</span>
        <span style="color: #EE5A24; font-size: 40px; margin-left: 20px;">30</span>
      </div>
      <div class="statement-top-item">
        <span style="color: #A3CB38">治愈</span>
        <span style="color: #A3CB38; font-size: 40px; margin-left: 20px;">2190</span>
      </div>
    </div>
    <div class="statement-center" id="one"></div>
    <div class="statement-bottom">
      <div class="statement-bottom-item" id="month"></div>
      <div class="statement-bottom-item" id="week"></div>
      <div class="statement-bottom-item" id="day"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { pillar, line } from '../views/home/service/echart'

export default {
  name: 'statement',
  data() {
    return {
      pillar,
      line
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

      const chartMonth = echarts.init(document.getElementById('month'))
      const optionsMonth = this.pillar
      optionsMonth.title.text = '月增加'
      chartMonth.setOption(optionsMonth)

      const chartWeek = echarts.init(document.getElementById('week'))
      const optionsWeek = this.pillar
      optionsWeek.title.text = '周增加'
      chartWeek.setOption(optionsWeek)

      const chartDay= echarts.init(document.getElementById('day'))
      const optionsDay = this.pillar
      optionsDay.title.text = '日增加'
      chartDay.setOption(optionsDay)
    }
  }
}
</script>

<style lang="scss" scoped>
.statement {
  width: 100%;
  height: 100%; 
  &-top {
    height: 13%;
    display: flex;
    &-item {
      flex: 1;
      text-align: center;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.1);
      border-color: rgba(0, 0, 0, 0.05);
      margin: 0 10px;
      padding: 20px 0;
      font-weight: 600;
      span {
        font-size: 18px;
        vertical-align: middle;
      }
    }
  }
  &-center {
    flex: 1;
    height: 50%;
    margin: 0 10px;
    margin-top: 15px;
    padding: 15px 20px;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.1);
    border-color: rgba(0, 0, 0, 0.05);
  }
  &-bottom {
    display: flex;
    height: 31%;
    margin-top: 15px;
    &-item {
      flex: 1;
      margin: 0 5px;
      padding: 10px 15px;
      box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.1);
      border-color: rgba(0, 0, 0, 0.05); 
    }
  }
}
</style>