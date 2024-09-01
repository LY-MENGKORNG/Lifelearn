import {
  reactive
} from 'vue'

export const AppState = {
  install: (app: any) => {
    const appState = reactive({
      theme: 'Aura',
      darkTheme: false
    })
    app.config.globalProperties.$appState = appState;
  }
}
