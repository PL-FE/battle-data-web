<template>
  <el-progress type="dashboard" :duration="1500">
    <template #default="{ percentage }">
      <p class="text-red-600 font-bold">
        <count-up :duration="1.5" :end-val="percentage" :options="{ suffix: '%' }"></count-up>
      </p>
      <p class="pt-2">
        {{ props.data.value1 }}
      </p>
      <p class="pt-2">
        <count-up :duration="1.5" :end-val="props.data.value2"></count-up>
      </p>
    </template>
  </el-progress>
</template>

<script setup>
import CountUp from 'vue-countup-v3'

const props = defineProps({
  data: Object
})
</script>

<style scoped lang="scss"></style>
