 <template>
  <!-- Main navigation header -->
  <header class="navbar">
    <!-- Left section: Navigation controls and page title -->
    <div class="navbar-left">
      <!-- Button to toggle sidebar visibility (hamburger menu) -->
      <button class="sidebar-toggle" @click="toggleSidebar">
        <Menu class="toggle-icon" />
      </button>
      
      <!-- Back icon that also toggles sidebar (mobile navigation) -->
      <img src="@/assets/back_icon.png" alt="Back" class="back-icon" @click="toggleSidebar">
      
      <!-- Dynamic page title based on current route -->
      <span class="navbar-title">{{ pageTitle }}</span>
    </div>
    
    <!-- Right section: Desktop-only action buttons -->
    <div class="navbar-right desktop">
      <!-- Notification bell button with badge counter -->
      <button class="icon-button">
        <BellDot class="nav-icon" />
        <!-- Show notification count badge if there are notifications -->
        <span class="notification-badge" v-if="notificationCount > 0">
          {{ notificationCount }}
        </span>
      </button>
      
      <!-- Add/Plus button for creating new content -->
      <button class="icon-button add-button">
        <Plus class="nav-icon" />
      </button>
    </div>
    
    <!-- Right section: Mobile-only action buttons -->
    <div class="navbar-right mobile">
      <!-- Mobile notification button -->
      <button class="icon-button" @click="toggleNotifications">
        <BellDot class="nav-icon" />
        <!-- Mobile version of notification badge -->
        <span class="notification-badge mobile-badge" v-if="notificationCount > 0">
          {{ notificationCount }}
        </span>
      </button>
    </div>
    
    <!-- Floating Action Button (FAB) - Mobile only -->
    <button class="fab-button mobile" @click="handleAddClick">
      <Plus class="fab-icon" />
    </button>
  </header>
</template>

<script>
// Import icon components from lucide-vue-next library
import { BellDot, Plus, Menu } from 'lucide-vue-next'

export default {
  name: 'Navbar', // Component name
  
  // Register icon components
  components: {
    BellDot, // Notification bell icon
    Plus,    // Plus/Add icon
    Menu     // Hamburger menu icon
  },
  
  data() {
    return {
      // Track number of notifications (hardcoded for demo)
      notificationCount: 1
    }
  },
  
  computed: {
    // Computed property that returns the current page title based on route
    pageTitle() {
      // Get current route path
      const path = this.$route.path
      
      // Map route paths to display titles
      if (path === '/' || path === '/home') return 'Home'
      if (path === '/inbox') return 'Inbox'
      if (path === '/meine-immos') return 'Meine Immos'
      if (path === '/mieter-verwaltung') return 'Mieter Verwaltung'
      if (path === '/controlling') return 'Controlling'
      
      // Fallback to 'Home' if route doesn't match any known paths
      return 'Home'
    }
  },
  
  methods: {
    // Handle click on FAB (Floating Action Button)
    handleAddClick() {
      console.log('Add button clicked')
      // TODO: Implement add functionality
    },
    
    // Handle click on notifications button
    toggleNotifications() {
      console.log('Notifications clicked')
      // TODO: Implement notifications panel toggle
    },
    
    // Handle sidebar toggle - emits event to parent component
    toggleSidebar() {
      // Emit event to parent (App.vue) to toggle sidebar visibility
      this.$emit('toggle-sidebar')
    }
  }
}
</script>

<style scoped>
.navbar {
  height: 60px;
  border-bottom: 1px solid var(--border-color, #e5e7eb);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: white;
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  box-sizing: border-box;
}

.navbar-left {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

 
.sidebar-toggle {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  transition: background 0.2s;
}

.sidebar-toggle:hover {
  background: var(--hover-bg, #f3f4f6);
}

.toggle-icon {
  width: 20px;
  height: 20px;
  color: var(--text-secondary, #6b7280);
}

.back-icon {
  width: 18px;
  height: 18px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.back-icon:hover {
  opacity: 0.7;
}

.navbar-title {
  font-size: 16px;
  font-weight: 800;
  color: var(--text-primary, #111827);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
}

.navbar-right.desktop {
  display: none;
}

.navbar-right.mobile {
  display: flex;
  align-items: center;
}

.icon-button {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
  color: var(--text-secondary, #6b7280);
  position: relative;
}

.nav-icon {
  width: 20px;
  height: 20px;
}

.notification-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  background: #ef4444;
  color: white;
  font-size: 10px;
  min-width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
}

.mobile-badge {
  top: 2px;
  right: 2px;
}

.add-button {
  background: var(--primary-green, #10b981);
  color: white;
}

.add-button:hover {
  background: #059669;
}

.fab-button.mobile {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: var(--primary-green, #10b981);
  color: white;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 40;
  transition: transform 0.2s, box-shadow 0.2s;
}

.fab-button.mobile:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.fab-icon {
  width: 24px;
  height: 24px;
}

@media (min-width: 768px) {
  .navbar {
    padding: 0 24px;
  }
  
  .navbar-title {
    font-size: 18px;
    max-width: 300px;
  }
  
  .back-icon {
    width: 20px;
    height: 20px;
  }
}

@media (min-width: 1024px) {
  .navbar-right.mobile,
  .fab-button.mobile {
    display: none !important;
  }
  
  .navbar-right.desktop {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  
  .navbar-title {
    max-width: none;
  }
  
  /* Hide sidebar toggle on desktop if sidebar is always visible */
  .sidebar-toggle {
    display: none;
  }
}

@media (min-width: 1280px) {
  .navbar {
    padding: 0 32px;
  }
  
  .icon-button {
    width: 40px;
    height: 40px;
  }
  
  .nav-icon {
    width: 22px;
    height: 22px;
  }
}

@media (max-width: 375px) {
  .navbar {
    padding: 0 12px;
    height: 56px;
  }
  
  .navbar-left {
    gap: 8px;
  }
  
  .navbar-title {
    font-size: 14px;
    max-width: 120px;
  }
  
  .fab-button.mobile {
    width: 52px;
    height: 52px;
    bottom: 16px;
    right: 16px;
  }
  
  .sidebar-toggle {
    width: 32px;
    height: 32px;
  }
  
  .toggle-icon {
    width: 18px;
    height: 18px;
  }
}
</style>