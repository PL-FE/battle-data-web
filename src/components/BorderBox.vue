<template>
  <div class="r-border-container flex flex-col p-4">
    <div class="r-border-title">{{ title }}</div>
    <div class="r-border-body flex-1">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

<style lang="scss" scoped></style>
