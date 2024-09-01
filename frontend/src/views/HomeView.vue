<template>
  <div class="flex p-5 gap-5 w-screen">
    <panel header="What the fucking Chart" class="flex-1">
      <BaseChart />
    </panel>
    <panel class="flex-1">
      <confirm-btn
        text="Register"
        message="What the fuck!"
        :after-confirm="{ name: 'About' }"
      />
    </panel>
  </div>
</template>

<script lang='ts' setup>
import BaseChart from '@/components/ui/BaseChart.vue'
</script>

<style lang='scss' scoped></style>
