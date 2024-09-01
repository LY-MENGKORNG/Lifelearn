<template>
  <div class="card">
    <Menubar :model="items" class="border-0">
      <template #item="{ item, props, hasSubmenu, root }">
        <router-link :to="{ name: 'Home' }" class="flex items-center" v-bind="props.action">
          <span :class="item.icon"/>
          <span class="ml-2">{{ item.label }}</span>
          <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge"/>
          <span v-if="item.shortcut"
                class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{
              item.shortcut
            }}</span>
          <i v-if="hasSubmenu"
             :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
        </router-link>
      </template>
      <template #end>
        <div class="flex items-center gap-2">
          <ThemeSwitcher />
          <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
                  shape="circle"/>
        </div>
      </template>
    </Menubar>
  </div>
</template>

<script setup lang="ts">
import Avatar from "primevue/avatar"
import Badge from "primevue/badge"
import Menubar from "primevue/menubar"
import { ref } from "vue"
import { useTheme } from "@/store"
import ThemeSwitcher from '@/components/ui/ThemeSwitcher.vue'

const themeStore = useTheme()
const toggleTheme = ref<boolean>(localStorage.getItem('theme') || 'default')

const themeChange = (theme: boolean) => {
  toggleTheme.value = !theme
  const newTheme = theme ? 'system' : 'default'
  themeStore.setTheme(newTheme)
}

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
  {
    label: 'Features',
    icon: 'pi pi-star'
  },
  {
    label: 'Projects',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Core',
        icon: 'pi pi-bolt',
        shortcut: '⌘+S'
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server',
        shortcut: '⌘+B'
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil',
        shortcut: '⌘+U'
      },
      {
        separator: true
      },
      {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Apollo',
            icon: 'pi pi-palette',
            badge: 2
          },
          {
            label: 'Ultima',
            icon: 'pi pi-palette',
            badge: 3
          }
        ]
      }
    ]
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope',
    badge: 3
  }
])
</script>

<style scoped></style>
