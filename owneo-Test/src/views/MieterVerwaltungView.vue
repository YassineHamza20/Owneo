<template>
  <EmptyState 
    @primary-click="handleAddProperty"
    @secondary-click="handleTestData"
  />
</template>

<script>
import EmptyState from '@/components/EmptyState.vue'

export default {
  name: 'MieterVerwaltungView',
  components: {
    EmptyState
  },
  methods: {
    handleAddProperty() {
      console.log('Add property clicked in MieterVerwaltung')
      // Your logic for adding property
    },
    handleTestData() {
      console.log('Test data clicked in MieterVerwaltung')
      // Your logic for test data
    }
  }
}
</script>