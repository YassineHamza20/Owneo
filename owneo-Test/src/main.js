// Import Vue 3's createApp function to create the Vue application instance
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

// Create the Vue application instance with the root App component
const app = createApp(App)

// Use the router plugin in the Vue application
// This enables Vue Router features like <router-link>, <router-view>, and $route/$router
app.use(router)

// Mount the Vue application to the DOM element with id="app"
// This attaches the Vue app to the HTML element and starts the application
app.mount('#app')