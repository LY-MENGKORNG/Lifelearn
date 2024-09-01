<template>
  <div class="card">
    <Timeline :value="events" align="alternate" class="customized-timeline">
      <template #marker="slotProps">
                <span
                  class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm"
                  :style="{ backgroundColor: slotProps.item.color }">
                    <i :class="slotProps.item.icon"></i>
                </span>
      </template>
      <template #content="slotProps">
        <card class="mt-4">
          <template #title>
            {{ slotProps.item.status }}
          </template>
          <template #subtitle>
            {{ slotProps.item.date }}
          </template>
          <template #content>
            <img v-if="slotProps.item.image"
                 :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.item.image}`"
                 :alt="slotProps.item.name" width="200" class="shadow-sm"/>
            <p>
              {{ slotProps.item.description }}
            </p>
            <Button label="Read more" text></Button>
          </template>
        </card>
      </template>
    </Timeline>
  </div>
</template>

<script setup lang="ts">
import Timeline from "primevue/timeline";
import { ref } from "vue";

const events = ref([
  {
    status: 'Ordered',
    date: '15/10/2020 10:30',
    icon: 'pi pi-shopping-cart',
    color: '#9C27B0',
    image: 'game-controller.jpg',
    description: "Carousel supports specific configuration per screen size with the responsiveOptions property that takes an array of objects where each object defines the max-width breakpoint,"
  },
  {
    status: 'Processing',
    date: '15/10/2020 14:00',
    icon: 'pi pi-cog',
    color: '#673AB7'
  },
  {
    tatus: 'Shipped',
    date: '15/10/2020 16:15',
    icon: 'pi pi-shopping-cart',
    color: '#FF9800'
  },
  {
    status: 'Delivered',
    date: '16/10/2020 10:00',
    icon: 'pi pi-check',
    color: '#607D8B'
  }
])

</script>

<style lang="scss" scoped>
@media screen and (max-width: 960px) {
  ::v-deep(.customized-timeline) {
    .p-timeline-event:nth-child(even) {
      flex-direction: row;

      .p-timeline-event-content {
        text-align: left;
      }
    }

    .p-timeline-event-opposite {
      flex: 0;
    }
  }
}
</style>
