<template>
  <!-- 缩放+动态宽高 -->
  <v-scale-screen
    :width="route.query.w || wh.w"
    :height="route.query.h || wh.h"
    :boxStyle="{ backgroundColor: '#fff' }"
  >
    <div class="r-big-screen-container h-full flex flex-col">
      <div class="r-big-screen-header text-8xl text-center border">我是标题</div>
      <div class="r-big-screen-body flex-1">
        <BorderBox class="border" title="流水趋势">
          <FlowingTrend />
        </BorderBox>
        <BorderBox class="border" title="大区">
          <Regional />
        </BorderBox>
        <BorderBox class="border col-start-3 col-end-[span_2]" title="销售组">
          <SalesTeam />
        </BorderBox>
        <BorderBox class="border" title="销售支持">
          <SalesSupport />
        </BorderBox>
        <BorderBox class="border col-start-2 col-end-[span_3]" title="销售个人">
          <Sales />
        </BorderBox>
      </div>
    </div>
  </v-scale-screen>
</template>

<script setup>
import Sales from '@/module/Sales.vue'
import SalesSupport from '@/module/SalesSupport.vue'
import SalesTeam from '@/module/SalesTeam.vue'
import Regional from '@/module/Regional.vue'
import FlowingTrend from '@/module/FlowingTrend.vue'
import BorderBox from '@/components/BorderBox.vue'
import VScaleScreen from 'v-scale-screen'
import { reactive } from 'vue'
import { useRoute } from 'vue-router'
const wh = reactive({
  w: 1920,
  h: 1080
})
const route = useRoute()

const w = document.documentElement.clientWidth
const h = document.documentElement.clientHeight
const rate = wh.h / h
wh.w = rate * w
</script>

<style lang="scss" scoped>
.r-big-screen-body {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
}
.kk {
  grid-column: 3 / span 2;
}
</style>
