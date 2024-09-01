<template>
  <Carousel :value="products"
            :numVisible="5"
            :numScroll="1"
            :responsiveOptions="responsiveOptions">
    <template #item="slotProps">
      <div class="border border-surface-200 dark:border-surface-300 rounded m-2  p-4">
        <div class="mb-4">
          <div class="relative mx-auto">
            <img
              :src="'https://primefaces.org/cdn/primevue/images/product/' + slotProps.data.image"
              :alt="slotProps.data.name" class="w-full rounded"/>
            <Tag :value="slotProps.data.inventoryStatus"
                 :severity="getSeverity(slotProps.data.inventoryStatus)" class="absolute"
                 style="left:5px; top: 5px"/>
          </div>
        </div>
        <div class="mb-4 font-medium">{{ slotProps.data.name }}</div>
        <div class="flex justify-between items-center">
          <div class="mt-0 font-semibold text-xl">${{ slotProps.data.price }}</div>
          <span>
              <Button icon="pi pi-heart" severity="secondary" outlined/>
              <Button icon="pi pi-shopping-cart" class="ml-2"/>
            </span>
        </div>
      </div>
    </template>
  </Carousel>
</template>
<script setup lang="ts">
import {
  ref,
  onMounted
} from "vue"
import {
  ProductService
} from '@/data/carousel'
import Carousel from "primevue/carousel"

const products = ref()
onMounted(() => {
  ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)))
})

const responsiveOptions = ref([
  {
    breakpoint: '1230px',
    numVisible: 5,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
])

const getSeverity = (status: string): string | undefined => {
  switch (status) {
    case 'INSTOCK':
      return 'success'

    case 'LOWSTOCK':
      return 'warn'

    case 'OUTOFSTOCK':
      return 'danger'

    default:
      return undefined
  }
}
</script>
