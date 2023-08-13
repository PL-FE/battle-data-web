<template>
  <div class="all flex flex-col h-full">
    <div class="flex-1 flex items-center" v-for="it in 3" :key="it">
      <span class="whitespace-nowrap">总流水</span>
      <div class="flex-1 flex h-full">
        <GaugeTemperature />
        <GaugeTemperature class="scale-[0.9] origin-left" />
        <GaugeTemperature class="scale-[0.8] origin-left" />
        <GaugeTemperature class="scale-[0.7] origin-left" />
      </div>
    </div>
  </div>
</template>

<script setup>
import GaugeTemperature from './GaugeTemperature.vue'
</script>

<style scoped lang="scss"></style>
