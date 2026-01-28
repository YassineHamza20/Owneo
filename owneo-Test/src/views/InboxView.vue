<template>
  <EmptyState 
    @primary-click="handleAddProperty"
    @secondary-click="handleTestData"
  />
</template>

<script>
import EmptyState from '@/components/EmptyState.vue'

export default {
  name: 'InboxView',
  components: {
    EmptyState
  },
  methods: {
    handleAddProperty() {
      console.log('Add property clicked in Inbox')
      // Your logic
    },
    handleTestData() {
      console.log('Test data clicked in Inbox')
      // Your logic
    }
  }
}
</script>