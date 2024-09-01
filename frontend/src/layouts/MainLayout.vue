<template>
  <div class="flex flex-col">
    <ProgressBar class="top-0 z-50 h-1" mode="indeterminate"></ProgressBar>
    <NavigationBar class="position-sticky top-0" />
    <main class="flex-1 flex flex-col">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import NavigationBar from '@/components/NavigationBar.vue'
import ProgressBar from 'primevue/progressbar'
import Footer from "@/components/Footer.vue";
</script>
