// Styles
import '@/assets/index.css'
import '@/assets/flags.css'

// Plugins
import registerPlugins from '@/plugins'

// Composable
import { createApp } from 'vue'

// Components
import App from '@/App.vue'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
