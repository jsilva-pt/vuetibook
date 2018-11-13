<template>
  <div class="add-item">
    <pet-form class="pet-form elevation-3" />
  </div>
</template>

<script>
import PetForm from '@/components/PetForm.vue'
export default {
  name: 'add-item',
  components: {
    PetForm
  }
}
</script>

<style scoped>
.pet-form {
  margin: auto;
  max-width: 300px;
}
</style>
