<template>
  <div class="h-full flex">
    <div v-for="it in 3" :key="it" class="flex-1">
      <el-container class="px-2 h-full">
        <el-header class="leading-[60px] text-center">Header</el-header>
        <el-main class="!p-0">
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" :width="60"> 张飞 </el-table-column>
            <el-table-column prop="name" label="Name" :width="auto">
              <el-progress :text-inside="true" :stroke-width="14" :percentage="percentage">
                <span>
                  <count-up
                    :duration="1.5"
                    :end-val="percentage"
                    :options="{ suffix: '%' }"
                  ></count-up>
                </span>
              </el-progress>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </div>
    <div v-for="it in 2" :key="it + '2'" class="flex-1">
      <el-container class="px-2 h-full">
        <el-header class="leading-[60px] text-center">Header</el-header>
        <el-main class="!p-0">
          <BarYCategory />
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BarYCategory from './BarYCategory.vue'
import CountUp from 'vue-countup-v3'

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. '
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. '
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. '
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. '
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. '
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. '
  }
]
const percentage = ref(0)
setTimeout(() => {
  percentage.value = 50
}, 2000)
</script>

<style scoped lang="scss"></style>
