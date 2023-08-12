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
        <BorderBox class="r-big-screen-box border" v-for="box in 9" :key="box"> 22</BorderBox>
      </div>
    </div>
  </v-scale-screen>
</template>

<script setup>
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
}
</style>
