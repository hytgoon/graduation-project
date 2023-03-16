/* 柱形图配置 */
export const pillar = {
  title: {
    text: '感染区域',
    left: 'center',
    textStyle: {
      fontSize: 14
    }
  },
  grid: {
    right: '8%',
    bottom: '18%'
  },
  xAxis: {
    type: 'category',
    data: ['渝中', '江北', '南岸', '沙坪坝', '九龙坡', '大渡口', '渝北', '巴南', '北碚'],
    axisLabel: {
      show: true,
      interval: 0,
      textStyle: {
        fontSize: 10
      }
    }
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130, 100, 50],
      type: 'bar'
    }
  ]
}

/* 折线图配置 */
export const line = {
  title: {
    text: '累计疫情走势',
    textStyle: {
      fontSize: 14
    }
  },
  grid: {
    left: '12%',
    right: '8%',
    bottom: '18%'
  },
  legend: {
    left: 'right',
    data: ['确诊', '治愈', '疑似', '死亡']
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '确诊',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '治愈',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '疑似',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: '死亡',
      type: 'line',
      stack: 'Total',
      data: [20, 32, 10, 34, 90, 30, 20]
    }
  ]
}

/* 扇形图配置 */
export const sector = {
  legend: {
    left: 'center',
    textStyle: {
      fontSize: 10
    }
  },
  grid: {
    bottom: '10%'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%','60%'],
      label: {
        show: false,
        position: 'center'
      },
      labelLine: {
        show: false
      },
      data: []
    }
  ]
}