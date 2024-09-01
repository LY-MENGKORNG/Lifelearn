<template>
  <div class="box">
    <panel>
      <Carousel/>
    </panel>
    <div class="mt-4 flex gap-3">
      <panel class="w-[40%]">
        <div></div>
      </panel>
      <panel class="w-[55%]">
        <TimeLine/>
      </panel>
    </div>
  </div>
</template>
<script lang='ts' setup>
import Carousel from '@/components/ui/Carousel.vue'
import TimeLine from "@/components/ui/TimeLine.vue"

</script>
