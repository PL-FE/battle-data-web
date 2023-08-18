<template>
  <div class="all flex flex-col h-full">
    <div class="flex-1 flex items-center" v-for="it in 3" :key="it">
      <span class="whitespace-nowrap pr-6">总流水</span>
      <div class="flex justify-around items-center  w-full">
        <template v-for="item in gaugeList" :key="item.color">
          <GaugeTemperature
            :color="item.color"
            :stroke-width="item.strokeWidth"
            :percentage="item.percentage"
            :width="item.width"
            :data="item.data"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GaugeTemperature from './GaugeTemperature.vue'
const colors = ['#ff0000', '#ffcc00', '#339966', '#9bccff']
const gaugeList = ref(
  new Array(4).fill(1).map((it, index) => {
    return {
      color: colors[index],
      strokeWidth: 12 - index * 2,
      percentage: 0,
      width: 140 - index * 10,
      data: {
        value1: `北部${index + 1}区`,
        value2: 0
      }
    }
  })
)

setTimeout(() => {
  gaugeList.value = new Array(4).fill(1).map((it, index) => {
    return {
      color: colors[index],
      strokeWidth: 12 - index * 2,
      percentage: 50 - index * 2,
      width: 140 - index * 10,
      data: {
        value1: `北部${index + 1}区`,
        value2: (1000 - index * 100).toFixed(2)
      }
    }
  })
}, 2000)
</script>

<style scoped lang="scss"></style>
