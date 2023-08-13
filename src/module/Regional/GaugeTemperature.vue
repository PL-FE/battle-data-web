<template>
  <v-chart class="chart" :option="option" autoresize :initOptions="initOpts" />
</template>

<script setup>
import VChart from 'vue-echarts'
import { reactive, ref } from 'vue'
const initOpts = ref({
  renderer: 'svg'
})
const gaugeData = [
  {
    value: 90,
    name: '北部一区 \n 600',
    title: {
      offsetCenter: ['0%', '20%'],
      lineHeight: 24
    },
    detail: {
      valueAnimation: true
    }
  }
]
const option = reactive({
  series: [
    {
      type: 'gauge',
      min: 0,
      max: 100,
      radius: '100%',
      itemStyle: {
        color: '#FFAB91'
      },
      progress: {
        show: true,
        width: 10
      },
      pointer: {
        show: false
      },
      axisLine: {
        lineStyle: {
          width: 10
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        show: false
      },
      anchor: {
        show: false
      },
      title: {},
      detail: {
        valueAnimation: true,
        offsetCenter: [0, '-40%'],
        fontWeight: 'bolder',
        fontSize: 24,
        formatter: '{value} %',
        color: 'inherit'
      },
      data: gaugeData
    }
  ]
})
</script>

<style scoped lang="scss"></style>
