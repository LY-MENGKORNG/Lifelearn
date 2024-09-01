/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'darkTheme',
    themes: {
      lightTheme: {
        dark: false,
        colors: {
          primary: '#1976D2', // Customize your primary color
          secondary: '#424242', // Customize your secondary color
          accent: '#82B1FF',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
      darkTheme: {
        dark: true,
        colors: {
          primary: '#1E88E5',
          secondary: '#FFCDD2',
          accent: '#FF8A80',
          error: '#FF5252',
          info: '#1E88E5',
          success: '#00E676',
          warning: '#FFC107',
        },
      },
    },
  },
})
