<template>
  <EmptyState 
    @primary-click="handleAddProperty"
    @secondary-click="handleTestData"
  />
</template>

<script>
import EmptyState from '@/components/EmptyState.vue'

export default {
  name: 'MeineImmosView',
  components: {
    EmptyState
  },
  methods: {
    handleAddProperty() {
      console.log('Add property clicked in Meine Immos')
    },
    handleTestData() {
      console.log('Test data clicked in Meine Immos')
    }
  }
}
</script>