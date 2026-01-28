 <template>
  <!-- Main application container -->
  <div class="app-container">
    <!-- Sidebar component - conditionally rendered when sidebarOpen is true -->
    <Sidebar v-if="sidebarOpen" class="sidebar-component" :class="{ 'mobile-sidebar': true }" />
    
    <!-- Overlay that appears on mobile when sidebar is open -->
    <!-- Clicking overlay closes sidebar on mobile devices -->
    <div class="sidebar-overlay" v-if="sidebarOpen && isMobile" @click="closeSidebar"></div>
    
    <!-- Main content area -->
    <div class="main-content">
      <!-- Navigation bar with sidebar toggle functionality -->
      <Navbar @toggle-sidebar="toggleSidebar" />
      
      <!-- Dynamic content area where routed components render -->
      <router-view />
    </div>
  </div>
</template>

<script>
// Import child components
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App', // Root application component name
  
  // Register child components
  components: {
    Sidebar, // Navigation sidebar component
    Navbar   // Top navigation bar component
  },
  
  data() {
    return {
      // Controls sidebar visibility state
      sidebarOpen: true,
      // Tracks whether the app is viewed on mobile screen
      isMobile: false
    }
  },
  
  // Lifecycle hook - runs when component is mounted to DOM
  mounted() {
    // Check initial screen size on component mount
    this.checkScreenSize()
    // Add event listener for window resize to handle responsive behavior
    window.addEventListener('resize', this.checkScreenSize)
  },
  
  // Lifecycle hook - runs before component is destroyed
  beforeUnmount() {
    // Clean up event listener to prevent memory leaks
    window.removeEventListener('resize', this.checkScreenSize)
  },
  
  methods: {
    // Toggles sidebar open/closed state
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
    
    // Closes sidebar specifically on mobile devices
    closeSidebar() {
      // Only close sidebar if we're on mobile
      if (this.isMobile) {
        this.sidebarOpen = false
      }
    },
    
    // Checks current screen size and updates responsive state
    checkScreenSize() {
      // Determine if screen width is mobile (< 1024px)
      this.isMobile = window.innerWidth < 1024
      
      // On desktop screens, ensure sidebar is always open by default
      if (!this.isMobile) {
        this.sidebarOpen = true
      }
    }
  }
}
</script>
<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
  position: relative;
}

.sidebar-component {
  flex-shrink: 0;
}

/* Mobile sidebar styles */
@media (max-width: 1023px) {
  .sidebar-component.mobile-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 100;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  }
  
  .sidebar-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99;
    animation: fadeIn 0.2s ease-in-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .sidebar-component {
    position: relative;
  }
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  background: #fff;
  min-width: 0;
}
</style>