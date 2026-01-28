 <template>
  <!-- Sidebar navigation component -->
  <!-- Dynamic classes for open/closed state controlled by parent -->
  <aside class="sidebar" :class="{ 'sidebar-open': isOpen, 'sidebar-closed': !isOpen }">
 
    <!-- Logo section at the top -->
    <div class="logo">
      <div class="logo-icon">
         <img src="@/assets/logo.png" alt="Owneo Logo" width="28" height="28">
      </div>
      <span class="logo-text">Owneo</span>
    </div>
 

    <!-- Main navigation menu -->
    <nav class="nav-menu">
      <!-- Dashboard link - active when exactly on root path -->
      <router-link to="/" class="nav-item" exact-active-class="active">
        <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
          <LayoutDashboard class="h-6 w-6 text-black" />
        </div>
        <span>Dashboard</span>
      </router-link>

      <!-- Inbox link with notification badge -->
      <router-link to="/inbox" class="nav-item" active-class="active">
        <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
          <Inbox class="h-6 w-6 text-black" />
        </div>
        <span>Inbox</span>
        <!-- Notification badge showing 4 items -->
        <span class="badge">04</span>
      </router-link>

      <!-- My Properties link -->
      <router-link to="/meine-immos" class="nav-item" active-class="active">
        <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
          <House class="h-6 w-6 text-black" />
        </div>
        <span>Meine Immos</span>
      </router-link>

      <!-- Tenant Management link -->
      <router-link to="/mieter-verwaltung" class="nav-item" active-class="active">
        <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
          <Users class="h-6 w-6 text-black" />
        </div>
        <span>Mieter/Verwaltung</span>
      </router-link>

      <!-- Controlling/Finance link -->
      <router-link to="/controlling" class="nav-item" active-class="active">
        <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
          <Building2 class="h-6 w-6 text-black" />
        </div>
        <span>Controlling</span>
      </router-link>

      <!-- Marketplace link (disabled/coming soon) -->
      <div class="nav-item disabled">
        <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
          <Handshake class="h-6 w-6 text-black" />
        </div>
        <span>Marketplace</span>
        <span class="coming-soon">Coming Soon</span>
      </div>

      <!-- Settings section with expandable/collapsible chevron -->
      <div class="nav-item" @click="toggleSettings">
        <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
          <BookOpen class="h-6 w-6 text-black" />
        </div>
        <span>Einstellungen</span>
        <!-- Chevron icon that rotates when settings are open -->
        <svg class="chevron" :class="{ open: settingsOpen }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </nav>

    <!-- Footer section at bottom of sidebar -->
    <div class="sidebar-footer">
      <div class="footer-content">
        <!-- First label item with arrow icon -->
        <div class="label-item">
          <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <BookOpen class="h-6 w-6 text-black" />
          </div>
          <span>Label 
            <!-- Arrow icon indicating link/action -->
            <svg class="label-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </span>
        </div>

        <!-- Second label item with arrow icon -->
        <div class="label-item">
          <div class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <BookOpen class="h-6 w-6 text-black" />
          </div>
          <span>Label  
            <!-- Arrow icon indicating link/action -->
            <svg class="label-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </span>
        </div>

        <!-- User profile section -->
        <div class="user-profile">
          <div class="user-avatar">
            <!-- User avatar icon (placeholder) -->
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </div>
          <span class="user-name">User</span>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
// Import all icon components from lucide-vue-next
import {
  LayoutDashboard, // Dashboard icon
  Inbox,           // Inbox/mail icon
  House,           // House/property icon
  Users,           // Users/tenants icon
  Building2,       // Building/controlling icon
  Handshake,       // Handshake/marketplace icon
  BookOpen         // Book/settings icon
} from 'lucide-vue-next'
 
export default {
  name: 'Sidebar', // Component name
  
  // Register all imported icon components
  components: {   
    LayoutDashboard,
    Inbox,
    House,
    Users,
    Building2,
    Handshake,
    BookOpen
  },
  
  // Props received from parent component
  props: {
    // Controls sidebar open/closed state
    isOpen: {
      type: Boolean,
      default: true // Default to open
    }
  },
  
  data() {
    return {
      // Local state for settings section expand/collapse
      settingsOpen: false
    }
  },
  
  methods: {
    // Toggle settings section expand/collapse
    toggleSettings() {
      this.settingsOpen = !this.settingsOpen
    }
  }
}
</script>
<style scoped>
.sidebar {
  width: 330px; 
  background: var(--sidebar-bg);
  border-right: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  padding: 25px 20px;
  transition: transform 0.3s ease-in-out;
}

/* Mobile: Sidebar as drawer */
@media (max-width: 1023px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    z-index: 100;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
    transform: translateX(-100%);
  }
  
  .sidebar-open {
    transform: translateX(0);
  }
  
  .sidebar-closed {
    transform: translateX(-100%);
  }
}

/* Tablet: Keep sidebar as drawer */
@media (min-width: 768px) and (max-width: 1023px) {
  .sidebar {
    width: 300px;
  }
}

/* Desktop: Sidebar always visible */
@media (min-width: 1024px) {
  .sidebar {
    position: relative;
    transform: translateX(0) !important;
  }
  
  .sidebar-closed {
    transform: translateX(0) !important;
  }
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px 20px;
  margin-bottom: 20px;
}

.logo-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
}

.logo-text {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.nav-menu {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: 10 5px;
  overflow-y: auto;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 20px;
  border-radius: 8px;
  color: var(--text-secondary);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
  position: relative;
   
}

.nav-item:hover:not(.disabled) {
  background: var(--hover-bg);
  color: var(--text-primary);
}

.nav-item.active {
  background: var(--hover-bg);
  color: var(--text-primary);
  font-weight: 500;
}

.nav-item.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.nav-item svg {
  flex-shrink: 0;
}

.nav-item span:first-of-type {
  flex: 1;
}

.badge {
  background: var(--badge-bg);
  color: white;
  padding: 3px 6px;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 500;
}

.coming-soon {
  font-size: 11px;
  color: var(--text-secondary);
  background: var(--hover-bg);
  padding: 2px 6px;
  border-radius: 4px;
}

.chevron {
  transition: transform 0.2s;
  margin-left: auto;
}

.chevron.open {
  transform: rotate(180deg);
}

.sidebar-footer {
  padding: 5px ;
  margin-top: 20px;
}

.footer-content {
  display: flex;
  flex-direction: column;
   
}

.label-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 13px;
  padding:0px 5px;
  border-radius: 0px;
  margin-bottom: 0px;
  cursor: pointer;
  
  transition: all 0.2s;
  min-height: 44px;
}

.label-item:hover {
  background: var(--hover-bg);
}

.label-item svg:last-child {
  margin-left: auto;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 25px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 8px;
  border-top: 1px solid var(--border-color);
  padding-top: 12px;
  min-height: 48px;
}

.user-profile:hover {
  background: var(--hover-bg);
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--primary-green);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.user-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
}

/* Mobile optimizations */
@media (max-width: 375px) {
  .sidebar {
    width: 280px;
    padding: 20px 15px;
  }
  
  .logo {
    padding: 0 15px 15px;
  }
  
  .nav-menu {
    padding: 0 8px;
  }
  
  .nav-item {
    padding: 5px 15px;
    font-size: 13px;
  }
}
</style>
