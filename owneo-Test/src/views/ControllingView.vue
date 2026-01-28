<template>
  <!-- Use the reusable EmptyState component -->
  <!-- This component displays a consistent empty state UI across the application -->
  <EmptyState 
    @primary-click="handleAddProperty"     
    @secondary-click="handleTestData"      
  />
</template>

<script>
// Import the reusable EmptyState component
import EmptyState from '@/components/EmptyState.vue'

export default {
  name: 'ControllingView', // Component name for Vue DevTools
  
  // Register components used in this view
  components: {
    EmptyState // Makes the EmptyState component available in template
  },
  
  methods: {
    // Handler for primary button click in EmptyState component
    handleAddProperty() {
      console.log('Add property clicked in Controlling')
      // TODO: Implement logic for adding a new property
      // This could open a modal, navigate to a form, or call an API
    },
    
    // Handler for secondary button click in EmptyState component  
    handleTestData() {
      console.log('Test data clicked in Controlling')
      // TODO: Implement logic for loading test/sample data
      // This could populate the view with demo data or trigger a tutorial
    }
  }
}
</script>