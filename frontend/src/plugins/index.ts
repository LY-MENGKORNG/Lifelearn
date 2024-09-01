/**
* plugins/index.ts
*
* Automatically included in `./src/main.ts`
*/

// Types
import { router } from '@/router'
import { pinia } from '@/store'
import type { App } from 'vue'

// Plugins
import PrimeVue from 'primevue/config'
import primeVueCustomize from './primeVue'
import ConfirmationService from 'primevue/confirmationservice'
import ToastService from 'primevue/toastservice'

// Components
import Card from 'primevue/card'
import Panel from 'primevue/panel'
import Button from 'primevue/button'
import ConfirmBtn from '@/components/common/ConfirmBtn.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import { AppState } from "@/plugins/appState";

/**
 * This is where the `Plugins`, `Properties`, and `Components`, registerd
 * @param app
 */
export default function registerPlugins(app: App) {
  // Global plugins
  app
    .use(pinia)
    .use(router)
    .use(PrimeVue, primeVueCustomize)
    .use(AppState)
    .use(ConfirmationService)
    .use(ToastService)

  // Components
  app
    .component('card', Card)
    .component('panel', Panel)
    .component('Button', Button)
    .component('confirm-btn', ConfirmBtn)
    .component('main-layout', MainLayout)
    .component('auth-layout', AuthLayout)
}
