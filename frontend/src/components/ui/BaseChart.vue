<template>
  <div class="card">
    <Chart
      type="bar"
      :data="chartData"
      :options="chartOptions"
      class="h-[30rem]"
    />
  </div>
</template>

<script setup lang="ts">
import Chart from 'primevue/chart'
import { ref, onMounted } from "vue"

const documentStyle = getComputedStyle(document.documentElement)

const chartData = ref()
const chartOptions = ref()

onMounted(() => {
  chartData.value = setChartData()
  chartOptions.value = setChartOptions()
})

const setChartData = () => ({
  labels: props.labels,
  datasets: props.datasets
})
const setChartOptions = () => {
  const textColor = documentStyle.getPropertyValue('--p-text-color')
  const textColorSecondary = documentStyle
    .getPropertyValue('--p-text-muted-color')
  const surfaceBorder = documentStyle
    .getPropertyValue('--p-content-border-color')

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
          font: {
            weight: 500
          }
        },
        grid: {
          display: false,
          drawBorder: false
        }
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
          drawBorder: false,
        },
      },
    }
  }
}

const props = defineProps({
  labels: {
    type: Array,
    required: false,
    default: () => ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  },
  datasets: {
    type: Array,
    required: false,
    default: () => [
      {
        label: 'My First dataset',
        backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--p-cyan-400'),
        borderColor: getComputedStyle(document.documentElement).getPropertyValue('--p-cyan-500'),
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--p-pink-500'),
        borderColor: getComputedStyle(document.documentElement).getPropertyValue('--p-pink-500'),
        data: [28, 48, 40, 19, 86, 27, 90],
      }
    ]
  }
})
</script>
