<template>
  <el-container>
    <el-header class="leading-[60px] text-center">Header</el-header>
    <el-main class="!p-0">
      <el-table :data="tableData">
        <el-table-column prop="date" label="Date" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </el-main>
  </el-container>
</template>

<script setup>
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
</script>

<style scoped lang="scss"></style>
