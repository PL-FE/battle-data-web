<template>
  <v-chart class="chart h-full" :option="option" autoresize :initOptions="initOpts" />
</template>

<script setup>
import VChart from 'vue-echarts'
import { reactive, ref } from 'vue'
import CountUp from 'vue-countup-v3'

const initOpts = ref({
  renderer: 'svg'
})
const option = reactive({
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
  },
  series: [
    {
      name: '2011',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    }
  ]
})
</script>

<style scoped lang="scss"></style>
