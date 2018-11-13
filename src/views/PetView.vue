<template>
  <div class="pet-view">
    <pet-info class="pet-info elevation-3" :data="data"></pet-info>
  </div>
</template>

<script>
import PetInfo from '@/components/PetInfo.vue'
export default {
  name: 'pet-view',
  components: {
    PetInfo
  },
  data () {
    return {
      data: {
        name: 'Nina',
        size: 'small',
        gender: 'female',
        age: 'young',
        breed: 'breed_2'
      }
    }
  }
}
</script>

<style scoped>
.pet-info {
  margin: auto;
  max-width: 300px;;
}
</style>
