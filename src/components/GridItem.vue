<template>
  <div class="grid-item">
    <img :src="url">

    <div class="grid-item--info">
      <div class="title">{{ title }}</div>
      <i class="material-icons"
        :class="{favorite: isFavorite}"
        @click.stop="$emit('favorite-clicked')"
      >
        favorite
      </i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'grid-item',
  props: {
    url: String,
    title: String,
    isFavorite: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
  display: block;
}
.grid-item {
  display: inline-grid;
  position: relative;
  background-color: rgba(255, 255, 255, 0.8);
}
.grid-item--info {
  position: absolute;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  padding: 8px;
  background: linear-gradient(180deg,transparent 0,rgba(0,0,0,.6));
  left: 0;
  right: 0;
  color: #fff;
  font-weight: 600;
  text-align: left;
  transition: opacity .2s;
}
.material-icons {
  font-size: 16px;
  color: white;
  cursor: pointer;
  padding-left: 4px;
}
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.favorite {
  color: #f44336;
}
</style>
