<template>
  <div class="grid-view">
    <grid :items="items" />
  </div>
</template>

<script>
import Grid from '@/components/Grid'
export default {
  name: 'grid-view',
  components: {
    Grid
  },
  data () {
    return {
      items: [{
        url: 'https://picsum.photos/200/200',
        favorite: true
      },
      {
        url: 'https://picsum.photos/201/201'
      },
      {
        url: 'https://picsum.photos/202/202'
      },
      {
        url: 'https://picsum.photos/203/203'
      },
      {
        url: 'https://picsum.photos/204/204',
        favorite: true
      },
      {
        url: 'https://picsum.photos/205/205'
      },
      {
        url: 'https://picsum.photos/206/206',
        favorite: true
      },
      {
        url: 'https://picsum.photos/207/207'
      },
      {
        url: 'https://picsum.photos/208/208'
      },
      {
        url: 'https://picsum.photos/209/209'
      },
      {
        url: 'https://picsum.photos/210/210'
      }]
    }
  }
}
</script>

<style>
.grid-view {
  margin: auto;
  max-width: 600px;;
}
</style>
