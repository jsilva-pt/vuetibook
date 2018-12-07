<template>
  <div class="grid-container" :class="`cols${numberOfCols}`">
    <grid-item
      v-for="(item, index) in items"
      :key="index"
      :url="item.url"
      :title="'Yoo ' + index"
      :is-favorite="item.favorite"
      class="grid-item"
      @favorite-clicked="onItemFavoriteClicked(index)"
      @click.native="onItemClicked(index)"
    />
  </div>
</template>

<script>
import GridItem from './GridItem'
export default {
  name: 'grid',
  components: {
    GridItem
  },
  props: {
    items: {
      type: Array,
      required: true
    },
    numberOfCols: {
      type: Number,
      default: 3
    }
  },
  methods: {
    onItemClicked (index) {
      this.$emit('item-clicked', index)
    },
    onItemFavoriteClicked (index) {
      this.$emit('item-favorite-clicked', index)
    }
  }
}
</script>

<style scoped>
.grid-container {
  max-width: 600px;
  display: grid;
}
.grid-item {
  margin: 3px;
  cursor: pointer;
}
.cols3 {
  grid-template-columns: auto auto auto;
}
.cols2 {
  grid-template-columns: auto auto;
}
</style>
