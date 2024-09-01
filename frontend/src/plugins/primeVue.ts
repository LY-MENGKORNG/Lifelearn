import Noir from "@/presets/Noir";

const primeVueCustomize = {
  theme: {
    preset: Noir,
    options: {
      cssLayer: {
        name: 'primevue',
        order: 'tailwind-base, primevue, tailwind-utilities',
      },
      prefix: 'p',
      darkModeSelector: '.p-dark',
    },
  },
}

export default primeVueCustomize
