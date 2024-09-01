import { defineStore } from "pinia"

export const useTheme = defineStore('theme', {
  state: () => ({
    isDark: (localStorage.getItem('theme') === 'system' ? 'system' : localStorage.getItem('theme') === 'light' ? 'light' : undefined) || 'light'
  }),
  actions: {
    toggleTheme(theme: boolean) {
      this.isDark = theme ? 'system' : 'light'
    },
    setTheme(theme: string) {
      localStorage.setItem('theme', JSON.parse(JSON.stringify(theme)))
    },
  }
})
