import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// // Vuetify
// import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
// import * as components from 'vuetify/components'
// import * as directives from 'vuetify/directives'

// .use(vuetify)

// const vuetify = createVuetify({
//     components,
//     directives,
// })

createApp(App).use(store).use(router).mount('#app')
