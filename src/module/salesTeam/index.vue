<template>
  <div class="h-full flex">
    <TitleColBox class="flex-1">
      <ScrollBoard ref="tableRef1" :config="config" class="h-full w-full" />
    </TitleColBox>
    <TitleColBox class="flex-1">
      <ScrollBoard ref="tableRef2" :config="config" class="h-full w-full" />
    </TitleColBox>
    <TitleColBox class="flex-1">
      <ScrollBoard ref="tableRef3" :config="config" class="h-full w-full" />
    </TitleColBox>
  </div>
</template>

<script setup>
import ScrollBoard from '@/components/scrollBoard/index.vue'
import TitleColBox from '@/components/TitleColBox.vue'
import { nextTick, onMounted, ref } from 'vue'
const tableRef1 = ref(null)
const tableRef2 = ref(null)
const tableRef3 = ref(null)
onMounted(() => {
  nextTick(() => {
    setTimeout(() => {
      // tableRef1?.value?.initWH(true)
      // tableRef2?.value?.initWH(true)
      // tableRef3?.value?.initWH(true)
      config.value = {
        hoverPause: false,
        data: [
          ['行1列1', '行1列2', '行1列3'],
          ['行2列1', '行2列2', '行2列3'],
          ['行3列1', '行3列2', '行3列3'],
          ['行4列1', '行4列2', '行4列3'],
          ['行5列1', '行5列2', '行5列3'],
          ['行6列1', '行6列2', '行6列3'],
          ['行7列1', '行7列2', '行7列3'],
          ['行8列1', '行8列2', '行8列3'],
          ['行9列1', '行9列2', '行9列3'],
          ['行10列1', '行10列2', '行10列3']
        ]
      }
    }, 3000)
  })
})
const config = ref({})
</script>

<style scoped lang="scss"></style>
