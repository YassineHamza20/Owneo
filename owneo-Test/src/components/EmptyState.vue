<template>
  <!-- Main empty state container -->
  <div class="empty-state">
    <div class="empty-content">
      <!-- Emoji display -->
      <div class="emoji">{{ emoji }}</div>
      
      <!-- Title text -->
      <h2>{{ title }}</h2>
      
      <!-- Button group with two action buttons -->
      <div class="button-group">
        <!-- Primary action button with plus icon -->
        <button class="primary-button" @click="$emit('primary-click')">
            <Plus class="fab-icon" />
          {{ primaryButtonText }}
        </button>
        
        <!-- Secondary action button -->
        <button class="secondary-button" @click="$emit('secondary-click')">
          {{ secondaryButtonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// Import Plus icon from lucide-vue-next library
import { Plus } from 'lucide-vue-next'

export default {
  name: 'EmptyState', // Component name
  
  // Register imported components
  components: {
    Plus  // Plus icon component
  },
  
  // Component props with default values
  props: {
    // Emoji character to display
    emoji: {
      type: String,
      default: '👀' // Default: eyes emoji
    },
    // Main title text
    title: {
      type: String,
      default: 'Hier ist noch nicht viel los.' // Default German text
    },
    // Text for primary button
    primaryButtonText: {
      type: String,
      default: 'Immobilie hinzufügen' // Default: add property
    },
    // Text for secondary button
    secondaryButtonText: {
      type: String,
      default: 'Mit Testdaten loslegen' // Default: start with test data
    }
  },
  
  // Define events this component emits
  emits: ['primary-click', 'secondary-click']
}
</script>

<style scoped>
.empty-state {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: #fafafa;
  min-height: calc(100vh - 120px);
}

.empty-content {
  text-align: center;
  max-width: 500px;
  width: 100%;
}

.emoji {
  font-size: 48px;
  margin-bottom: 20px;
}

h2 {
  font-size: 18px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-bottom: 32px;
  line-height: 1.4;
}

.button-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.primary-button {
  background: var(--primary-green);
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s;
  width: 100%;
  max-width: 300px;
  justify-content: center;
}

.secondary-button {
  background: #cbf0da;
  color: var(--primary-green);
   border: none; 
  padding: 14px 24px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
  max-width: 300px;
}

.primary-button:hover {
  background: #368f52;
}

.secondary-button:hover {
  background: #68e59e;
}

@media (min-width: 480px) {
  .button-group {
    flex-direction: row;
    justify-content: center;
  }
  
  .primary-button,
  .secondary-button {
    width: auto;
    min-width: 200px;
  }
}

@media (min-width: 768px) {
  .empty-state {
    padding: 48px;
  }
  
  .emoji {
    font-size: 64px;
    margin-bottom: 24px;
  }
  
  h2 {
    font-size: 20px;
    margin-bottom: 40px;
  }
  
  .primary-button,
  .secondary-button {
    padding: 16px 28px;
    font-size: 15px;
    min-width: 220px;
  }
}

@media (min-width: 1024px) {
  .empty-content {
    max-width: 600px;
  }
  
  h2 {
    font-size: 22px;
  }
}

@media (max-width: 360px) {
  .empty-state {
    padding: 20px 16px;
  }
  
  .emoji {
    font-size: 40px;
  }
  
  h2 {
    font-size: 16px;
    margin-bottom: 28px;
  }
  
  .primary-button,
  .secondary-button {
    padding: 12px 20px;
    font-size: 13px;
  }
}
</style>