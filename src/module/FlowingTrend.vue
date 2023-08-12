<template>
  <v-chart class="chart bg-white h-full" :option="option" autoresize :initOptions="initOpts" />
</template>

<script setup>
import VChart from 'vue-echarts'
import { reactive, ref } from 'vue'
const initOpts = ref({
  renderer: 'svg'
})
const option = reactive({
  xAxis: {
    type: 'category'
  },
  color: ['#FF5454', '#12E3E5', '#4A9BF4', '#FB9B01'],
  yAxis: {
    type: 'value'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['总流水', '战役新增合作客户流水']
  },
  grid: {
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    containLabel: true
  },
  series: [
    {
      name: '总流水',
      type: 'line',
      data: [10, 11, 13, 11, 12, 12, 9],
      smooth: true
    },
    {
      name: '战役新增合作客户流水',
      type: 'line',
      data: [10, 11, 13, 11, 12, 12, 9].map((a) => a - 2),
      smooth: true
    }
  ]
})
</script>

<style scoped lang="scss"></style>
