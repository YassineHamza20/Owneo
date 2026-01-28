// Import Vue Router functions
import { createRouter, createWebHistory } from 'vue-router'
// Import the HomeView component (eagerly loaded)
import HomeView from '../views/HomeView.vue'

// Create and configure the router instance
const router = createRouter({
  // Use HTML5 history mode for cleaner URLs (removes # from URLs)
  history: createWebHistory(import.meta.env.BASE_URL),
  
  // Define all application routes
  routes: [
    {
      path: '/',              // URL path
      name: 'home',           // Route name for programmatic navigation
      component: HomeView,    // Component to render (eagerly loaded)
      meta: { title: 'Home' } // Route metadata (used for page title)
    },
    {
      path: '/inbox',
      name: 'inbox',
      // Lazy load component for better performance (loads only when needed)
      component: () => import('../views/InboxView.vue'),
      meta: { title: 'Inbox' }
    },
    {
      path: '/meine-immos',
      name: 'meine-immos',
      // Lazy load component
      component: () => import('../views/MeineImmosView.vue'),
      meta: { title: 'Meine Immos' }
    },
    {
      path: '/mieter-verwaltung',
      name: 'mieter-verwaltung',
      // Lazy load component
      component: () => import('../views/MieterVerwaltungView.vue'),
      meta: { title: 'Mieter Verwaltung' }
    },
    {
      path: '/controlling',
      name: 'controlling',
      // Lazy load component
      component: () => import('../views/ControllingView.vue'),
      meta: { title: 'Controlling' }
    }
  ],
  
  // Scroll behavior configuration
  scrollBehavior(to, from, savedPosition) {
    // If returning to a page with saved scroll position, restore it
    if (savedPosition) {
      return savedPosition
    } else {
      // Otherwise, scroll to top of page on navigation
      return { top: 0 }
    }
  }
})

// Global navigation guard - runs before each route navigation
router.beforeEach((to, from, next) => {
  // Update document title based on route metadata
  // Format: "Page Title | Owneo" or just "Owneo" if no title
  document.title = to.meta.title ? `${to.meta.title} | Owneo` : 'Owneo'
  
  // Continue with the navigation
  next()
})

// Export the configured router for use in main.js
export default router