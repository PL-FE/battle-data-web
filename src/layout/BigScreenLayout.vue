<template>
  <!-- 缩放+动态宽高 -->
  <v-scale-screen
    :width="route.query.w || wh.w"
    :height="route.query.h || wh.h"
    :boxStyle="{ backgroundColor: '#fff' }"
  >
    <div class="r-big-screen-container h-full flex flex-col p-4">
      <div class="r-big-screen-header text-8xl text-center border">我是标题</div>
      <div class="r-big-screen-body flex-1 grid gap-4 grid-cols-5 grid-rows-2">
        <BorderBox class="one" title="流水趋势">
          <FlowingTrend />
        </BorderBox>
        <BorderBox class="two col-start-2 col-end-[span_2]" title="大区">
          <Regional />
        </BorderBox>
        <BorderBox class="three col-start-4 col-end-[span_2]" title="销售组">
          <SalesTeam />
        </BorderBox>
        <BorderBox class="four" title="销售支持">
          <SalesSupport />
        </BorderBox>
        <BorderBox class="five col-start-2 col-end-[span_4]" title="销售个人">
          <Sales />
        </BorderBox>
      </div>
    </div>
  </v-scale-screen>
</template>

<script setup>
import Sales from '@/module/sales/index.vue'
import SalesSupport from '@/module/SalesSupport.vue'
import SalesTeam from '@/module/salesTeam/index.vue'
import Regional from '@/module/regional/index.vue'
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

// 自适应尺寸
// const w = document.documentElement.clientWidth
// const h = document.documentElement.clientHeight
// const rate = wh.h / h
// wh.w = rate * w
</script>

<style lang="scss" scoped>
.one {
  background: #19caad;
}
.two {
  background: #8cc7b5;
}
.three {
  background: #d1ba74;
}
.four {
  background: #bee7e9;
}
.five {
  background: #e6ceac;
}
.six {
  background: #ecad9e;
}
</style>
